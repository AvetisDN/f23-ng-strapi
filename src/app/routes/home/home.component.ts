import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { PostsService } from '../../posts.service';
import { NavigationEnd, Router } from '@angular/router';
import { PostComponent } from '../../components/post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  postsService = inject(PostsService);

  posts = [];

  constructor(private router: Router) {
    this.postsService.getAllPosts().subscribe((data: any) => {
      this.posts = data.data;
    });

    // router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('/category/') !== -1) {
          let n = event.url.replace('/category/', '');
          console.log(+n);
        }
      }
    });
  }
}
