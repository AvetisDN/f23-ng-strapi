import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() post: any = {};
}
