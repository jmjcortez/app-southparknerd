import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements OnInit {

  isLoading = false;

  post: Post;
  error: HttpErrorResponse;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPost(id);
  }

  getPost = (id: string): void => {

    this.isLoading = true;


    this.postService.getPost(id).subscribe(
      (post) => {
        this.isLoading = false;
        this.post = post;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.error = error;
      }
    );
  }

}
