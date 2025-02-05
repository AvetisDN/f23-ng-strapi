import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AuthCredentials } from '../../types';

@Component({
  selector: 'app-auth-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './auth-register.component.html',
  styleUrl: './auth-register.component.css',
  standalone: true,
})
export class AuthRegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  authService = inject(AuthService);

  constructor() {}

  onSubmit() {
    this.authService.register(this.registerForm.value as AuthCredentials);
  }
}
