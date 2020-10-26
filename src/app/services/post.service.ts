import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl = 'http://127.0.0.1:8000/api/posts/';

  constructor(private http: HttpClient) { }

  getPosts = (): Observable<any> => {
    return this.http.get<any>(this.postsUrl);
  }

  getPost = (id: string): Observable<Post> => {
    return this.http.get<Post>(`${this.postsUrl}${id}/`);
  }

  getLatestPost = (): Observable<Post> => {
    return this.http.get<Post>(`${this.postsUrl}latest-post/`);
  }
}
