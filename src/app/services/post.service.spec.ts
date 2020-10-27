import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

import { Post, PostList } from '../models/post';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve list of all posts', () => {
    const dummyPosts: PostList = {
      posts: [{
        id: 1,
        title: 'Blah',
        subtitle: 'Blah',
        content: 'Blah',
        author: 'Cartman',
        date_posted: '6/6/6',
        thumbnail_link: 'tes',
      }, {
        id: 1,
        title: 'Blah',
        subtitle: 'Blah',
        content: 'Blah',
        author: 'Cartman',
        date_posted: '6/6/6',
        thumbnail_link: 'tes',
      }],
    };

    service.getPosts().subscribe(posts => {
      expect(posts.posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.postsUrl}`);
    expect(request.request.method).toEqual('GET');

    request.flush(dummyPosts);
  });

  it('should be able to return a specific post', () => {
    const dummyPost: Post = {
      id: 1,
      title: 'Blah',
      subtitle: 'Blah',
      content: 'Blah',
      author: 'Cartman',
      date_posted: '6/6/6',
      thumbnail_link: 'tes',
    };

    service.getPost('1').subscribe(post => {
      expect(post).toEqual(dummyPost);
    });

    const request = httpMock.expectOne(`${service.postsUrl}1/`);
    expect(request.request.method).toEqual('GET');

    request.flush(dummyPost);
  });

  it('should be able to return latest post', () => {
    const dummyPost: Post = {
      id: 1,
      title: 'Blah',
      subtitle: 'Blah',
      content: 'Blah',
      author: 'Cartman',
      date_posted: '6/6/6',
      thumbnail_link: 'tes',
    };

    service.getLatestPost().subscribe(post => {
      expect(post).toEqual(dummyPost);
    });

    const request = httpMock.expectOne(`${service.postsUrl}latest-post/`);
    expect(request.request.method).toEqual('GET');

    request.flush(dummyPost);
  });
});
