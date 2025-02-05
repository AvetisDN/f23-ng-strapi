import { inject, Injectable } from '@angular/core';
import { ThemeStore } from './theme.store';
import { ThemeType } from './types';

@Injectable({
  providedIn: 'root',
})
export class ThemeFacade {
  private store = inject(ThemeStore);

  theme = this.store.theme;
  dark = this.store.dark;
  setTheme(theme: ThemeType) {
    this.store.setTheme(theme);
  }
}
