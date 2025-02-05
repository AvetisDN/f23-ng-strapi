import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AuthLoginComponent } from './routes/auth-login/auth-login.component';
import { AuthRegisterComponent } from './routes/auth-register/auth-register.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent,
  },
  {
    path: 'register',
    component: AuthRegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'category/:id',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
