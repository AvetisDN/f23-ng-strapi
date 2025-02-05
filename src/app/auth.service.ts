import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import {
  AuthCredentials,
  AuthLoginCredentials,
  StrapiAuthResponse,
  StrapiUser,
} from './types';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';

const initialUser: StrapiUser = {
  id: 0,
  documentId: '',
  username: '',
  email: '',
  provider: '',
  confirmed: true,
  blocked: false,
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:1337';

  toast = inject(ToastService);

  userState = signal(initialUser);

  user = computed(() => this.userState());

  constructor(private http: HttpClient, private router: Router) {}

  getMe() {
    if (localStorage.getItem('ng-token')) {
      this.http
        .get(`${this.baseUrl}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('ng-token')}`,
          },
        })
        .subscribe({
          next: (data) => {
            const strapiData = <StrapiUser>data;

            this.userState.set(strapiData);
          },
          error: (e) => {
            this.userState.set(initialUser);
          },
        });
    } else {
      this.userState.set(initialUser);
    }
  }

  register(credentials: AuthCredentials) {
    this.http
      .post(`${this.baseUrl}/api/auth/local/register`, credentials)
      .subscribe({
        next: (data) => {
          const strapiData = <StrapiAuthResponse>data;

          localStorage.setItem('ng-token', strapiData.jwt);

          this.userState.set(strapiData.user);

          this.toast.showToast(
            'success',
            `Welcome to BLOGO, ${this.userState().username} 😗`,
            3000
          );

          this.router.navigate(['/dashboard']);
        },
        error: (e) => {
          this.toast.showToast(
            'error',
            `Error ${e.status}: ${e.statusText} 😮`,
            3000
          );
        },
      });
  }

  login(credentials: AuthLoginCredentials) {
    this.http.post(`${this.baseUrl}/api/auth/local`, credentials).subscribe({
      next: (data) => {
        const strapiData = <StrapiAuthResponse>data;
        localStorage.setItem('ng-token', strapiData.jwt);

        this.userState.set(strapiData.user);

        this.toast.showToast(
          'success',
          `Welcome back, ${this.userState().username} 🤗`,
          3000
        );

        this.router.navigate(['/dashboard']);
      },
      error: (e) => {
        this.toast.showToast(
          'error',
          `Error ${e.status}: ${e.statusText} 😮`,
          3000
        );
      },
    });
  }

  logout() {
    localStorage.removeItem('ng-token');
    this.userState.set(initialUser);
    this.router.navigate(['/']);
    this.toast.showToast('info', `Bye 😒`, 3000);
  }
}
