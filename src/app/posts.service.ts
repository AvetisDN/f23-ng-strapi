import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseUrl = 'http://localhost:1337';

  constructor(private http: HttpClient) {}

  posts = [];

  getAllPosts() {
    return this.http.get(`${this.baseUrl}/api/posts?populate=*`);
  }

  getPostsByCategoryId(categoryId: number) {}

  getPostById(id: string | null) {
    return this.http.get(`${this.baseUrl}/api/posts/${id}?populate=*`);
  }
}
