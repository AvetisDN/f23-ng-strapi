import { Component, effect, inject } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconsModule, ThemeToggleComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService = inject(AuthService);

  user = this.authService.user;

  onLogout() {
    this.authService.logout();
  }
}
