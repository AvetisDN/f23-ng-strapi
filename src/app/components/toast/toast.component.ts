import { Component, inject } from '@angular/core';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  private toast = inject(ToastService);

  show = this.toast.show;
  type = this.toast.type;
  text = this.toast.text;

  hide() {
    this.toast.hideToast();
  }
}
