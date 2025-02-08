import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private baseUrl = 'http://localhost:1337';

  constructor(private http: HttpClient) {}

  getComments(docId: string) {
    return this.http.get(
      `${this.baseUrl}/api/comments/api::post.post:${docId}`
    );
  }

  addComment(payload: any, docId: string) {
    const body: any = {};
    body.content = payload.content;
    if (+payload.threadOf) {
      body.threadOf = payload.threadOf;
    }
    this.http
      .post(`${this.baseUrl}/api/comments/api::post.post:${docId}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('ng-token')}`,
        },
      })
      .subscribe({
        next: (data) => {},
        error: (e) => {},
      });
  }
}
