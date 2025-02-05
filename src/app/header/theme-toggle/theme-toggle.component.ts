import { Component, inject, signal } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { ThemeType } from '../../types';
import { ThemeFacade } from '../../theme.facade';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [IconsModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  showDropdown: boolean = false;
  themeFacade = inject(ThemeFacade);
  currentTheme = this.themeFacade.theme;

  toast = inject(ToastService);

  getCurrentIcon() {
    return this.currentTheme() === 'sys'
      ? 'monitor'
      : this.currentTheme() === 'dark'
      ? 'moon'
      : 'sun';
  }

  setCurrentTheme(theme: ThemeType) {
    this.showDropdown = false;
    this.themeFacade.setTheme(theme);
    this.toast.showToast('success', 'Theme successfully changed');
  }
}
