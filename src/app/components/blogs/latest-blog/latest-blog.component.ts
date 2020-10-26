import { Component, OnInit } from '@angular/core';

import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.scss']
})
export class LatestBlogComponent implements OnInit {

  latestPost: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getLatestPost();
  }

  getLatestPost = (): void => {
    this.postService.getLatestPost().subscribe(
      (post) => {
        this.latestPost = post;
      }
    );
  }

}
