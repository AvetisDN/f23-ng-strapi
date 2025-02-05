import { computed, Injectable, signal } from '@angular/core';
import { Toast, ToastType } from './types';

const initialState: Toast = {
  show: false,
  type: 'info',
  text: '',
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  state = signal(initialState);
  show = computed(() => this.state().show);
  type = computed(() => this.state().type);
  text = computed(() => this.state().text);

  constructor() {}

  showToast(type: ToastType, text: string, duration: number = 3000) {
    this.state.set({
      show: true,
      type,
      text,
    });
    setTimeout(() => {
      this.hideToast();
    }, duration);
  }

  hideToast() {
    this.state.set(initialState);
  }
}
