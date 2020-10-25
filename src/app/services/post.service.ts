import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl = 'http://127.0.0.1:8000/api/posts/';

  constructor(private http: HttpClient) { }

  getPosts = (): Observable<any> => {
    return this.http.get<any>(this.postsUrl);
  }
}
