import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { ActivatedRoute } from '@angular/router';
import { Book } from "../../models/book.type";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'book-search-page',
  templateUrl: './book-search-page.component.html',
  styleUrls: ['./book-search-page.component.css']
})
export class BookSearchPageComponent implements OnInit {
  /**
   * Constructor parameters for Dependency Injection
   * @param bookService Service to send HTTP request to BookService
   * @param route Service to navigate to different pages
   */
  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  books: Book[] = [];
  searchTerm = "";
  searchBy: string = "all"

  /**
   * Gets the data from the searched books by searching parameter.
   * It limits the element to 20.
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'].replaceAll('_', ' ')
        this.getBooks(params['searchTerm'], 20)
      }
    })
  }

  /**
   * Gets the data from the searched books.
   * @param searchTerm can be title, auhtor, subject and all. All means all parameters
   * @param limit element nubmer
   */
  getBooks(searchTerm: string, limit: number) {
    if (this.searchBy === 'subject') {
      this.bookService.getBooksBySubject(searchTerm, limit).subscribe(data => {
        this.books = data.docs
      })
    }
    this.bookService.getBooks(searchTerm, limit, this.searchBy).subscribe(data => {
      this.books = data.docs
    })
  }

  /**
   * Gets the searching parameter what is needed for the searching
   * @param value searching parameter
   */
  onSelected(value: string): void {
		this.searchBy = value;
	}
}
