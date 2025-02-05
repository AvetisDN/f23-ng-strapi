import { computed, Injectable, signal, effect } from '@angular/core';
import { ThemeInterface, ThemeType } from './types';

const initialState: ThemeInterface = {
  theme: 'sys',
};

@Injectable({
  providedIn: 'root',
})
export class ThemeStore {
  state = signal(initialState);

  theme = computed(() => this.state().theme);

  dark = computed(() =>
    this.state().theme === 'sys'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : this.state().theme === 'dark'
  );

  constructor() {
    if (localStorage.getItem('ng-theme')) {
      let t = JSON.parse(localStorage.getItem('ng-theme') as string).theme;
      this.setTheme(t);
    } else {
      this.saveToLocalStorage();
    }
  }

  setTheme(theme: ThemeType) {
    this.state.update((oldState) => ({ ...oldState, theme }));
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('ng-theme', JSON.stringify(this.state()));
  }
}
