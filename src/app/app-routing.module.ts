import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorSearchPageComponent } from './components/author-search-page/author-search-page.component';

const routes: Routes = [
  { path: "author-search-page", component: AuthorSearchPageComponent },
  { path: "author-search-page/:id", component: AuthorSearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
