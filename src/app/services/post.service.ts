import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post, PostList } from '../models/post';

import { API } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl = `${API}posts/`;

  constructor(private http: HttpClient) { }

  getPosts = (): Observable<PostList> => {
    return this.http.get<PostList>(this.postsUrl);
  }

  getPost = (id: string): Observable<Post> => {
    return this.http.get<Post>(`${this.postsUrl}${id}/`);
  }

  getLatestPost = (): Observable<Post> => {
    return this.http.get<Post>(`${this.postsUrl}latest-post/`);
  }
}
