import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ThemeFacade } from './theme.facade';
import { ToastComponent } from './components/toast/toast.component';
import { AuthService } from './auth.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  themeFacade = inject(ThemeFacade);
  dark = this.themeFacade.dark;

  authService = inject(AuthService);

  catService = inject(CategoriesService);

  constructor() {
    this.authService.getMe();
    this.catService.getCategories();
  }
}
