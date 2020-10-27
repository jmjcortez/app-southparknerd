import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  posts: Post[];

  isLoading = false;
  error: HttpErrorResponse;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts = (): void => {

    this.isLoading = true;

    this.postService.getPosts().subscribe(
      (data) => {
        this.isLoading = false;
        this.error = null;
        this.posts = data.posts;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.posts = null;
        this.error = error;
      }
    );
  }

}
