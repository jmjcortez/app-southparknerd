export interface Post {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  date_posted: string;
  thumbnail_link: string;
  content: string;
}

export interface PostList {
  posts: Post[];
}