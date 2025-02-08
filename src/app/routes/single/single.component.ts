import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../../icons/icons.module';
import { CommentsService } from '../../comments.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-single',
  imports: [ReactiveFormsModule, IconsModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css',
})
export class SingleComponent {
  id: string | null = null;
  post: any = {};

  postsService = inject(PostsService);
  commentsService = inject(CommentsService);
  authService = inject(AuthService);

  comments: any = [];

  commentForm = new FormGroup({
    content: new FormControl(''),
    threadOf: new FormControl('0'),
  });

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.postsService.getPostById(this.id).subscribe((post: any) => {
      this.post = post.data;
    });

    this.commentsService.getComments(this.id as string).subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit() {
    this.commentsService.addComment(this.commentForm.value, this.id as string);
  }
}
