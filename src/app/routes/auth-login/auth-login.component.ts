import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { AuthLoginCredentials } from '../../types';

@Component({
  selector: 'app-auth-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css',
})
export class AuthLoginComponent {
  loginForm = new FormGroup({
    identifier: new FormControl(''),
    password: new FormControl(''),
  });

  authService = inject(AuthService);

  constructor() {}

  onSubmit() {
    this.authService.login(this.loginForm.value as AuthLoginCredentials);
  }
}
