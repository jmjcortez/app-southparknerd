import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LatestBlogComponent } from './components/blogs/latest-blog/latest-blog.component';
import { BlogListComponent } from './components/blogs/blog-list/blog-list.component';
import { BlogCardComponent } from './components/blogs/blog-card/blog-card.component';
import { BlogPostComponent } from './components/blogs/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LatestBlogComponent,
    HomepageComponent,
    BlogListComponent,
    BlogCardComponent,
    BlogPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
