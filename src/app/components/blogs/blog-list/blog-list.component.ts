import { Component, OnInit } from '@angular/core';

import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts = (): void => {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data.posts;
      }
    );
  }

}
