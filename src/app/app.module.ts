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
import { LoadingAnimationComponent } from './components/common/loading-animation/loading-animation.component';
import { ErrorPageComponent } from './components/common/error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppUiModule } from './components/common/app-ui.module';
import { EpisodeGeneratorPageComponent } from './components/episode-generator/episode-generator-page/episode-generator-page.component';
import { CharacterCardComponent } from './components/episode-generator/character-card/character-card.component';
import { GetImgUrl } from './components/episode-generator/episode-generator-page/episode-generator-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LatestBlogComponent,
    HomepageComponent,
    BlogListComponent,
    BlogCardComponent,
    BlogPostComponent,
    LoadingAnimationComponent,
    ErrorPageComponent,
    EpisodeGeneratorPageComponent,
    CharacterCardComponent,
    GetImgUrl,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
