import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthorSearchPageComponent } from './components/author-search-page/author-search-page.component';
import { AuthorService } from "./services/author.service";
import { HttpClientModule } from '@angular/common/http';
import { BookSearchPageComponent } from './components/book-search-page/book-search-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';

let routes: Route[] = [
  { path: "author-search-page", component: AuthorSearchPageComponent },
  { path: "author-search-page/:id", component: AuthorSearchPageComponent },
  { path: "book-search-page", component: BookSearchPageComponent },
  { path: "book-search-page/:id", component: BookSearchPageComponent },
  { path: "book-search-page/book-page", component: BookPageComponent },
  { path: "book-search-page/book-page/:key", component: BookPageComponent },
  { path: "book-search-page/book-page/:key/cover-page", component: CoverPageComponent },
  { path: "book-search-page/book-page/:key/cover-page/:id", component: CoverPageComponent },
];

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(routes), 
    HttpClientModule],
  declarations: [AppComponent, AuthorSearchPageComponent, BookSearchPageComponent, BookPageComponent, CoverPageComponent],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
