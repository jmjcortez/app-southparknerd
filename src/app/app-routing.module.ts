import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BlogListComponent } from './components/blogs/blog-list/blog-list.component';
import { BlogPostComponent } from './components/blogs/blog-post/blog-post.component';
import { EpisodeGeneratorPageComponent } from './components/episode-generator/episode-generator-page/episode-generator-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'blogs', component: BlogListComponent},
  {path: 'blogs/:id', component: BlogPostComponent},
  {path: 'episode-generator', component: EpisodeGeneratorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
