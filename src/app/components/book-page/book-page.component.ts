import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { ActivatedRoute } from '@angular/router';
import { BookService } from "../../services/book.service";
import { BookDetails } from "src/app/models/book.type";
import { HttpParams } from "@angular/common/http";
import { AuthorService } from "src/app/services/author.service";
import { Book } from "src/app/models/book.type";

@Component({
  selector: 'book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})

export class BookPageComponent implements OnInit {
  /**
   * Constructor parameters for Dependency Injection
   * @param authorService Service to send HTTP request to AuthorService
   * @param bookService Service to send HTTP request to BookService
   * @param route Service to navigate to different pages
   */
  constructor(private authorService: AuthorService, private bookService: BookService, private route: ActivatedRoute) { }
  
  selectedBook!: BookDetails;
  key: string = ''
  paramsObject: any
  bookdetails!: Book[];
  header: string = ''
  author_key: string[] = []
  favourites: BookDetails[] = []
  isFavorite: boolean = false

  /**
   * Gets the data of the book by the book's work ID.
   * It gets the data from 2 places.
   * Also creates the header.
   */
  ngOnInit() {
    this.key = this.getParamValueQueryString()
    this.bookService.getBook(this.key).subscribe(data => {
      this.selectedBook = data
      this.bookService.getBooks(`${this.key}`, 20, "all").subscribe(param => {
        this.bookdetails = param.docs
        this.author_key = this.bookdetails[0].author_key
        this.createHeader()
        this.favourites = JSON.parse(localStorage.getItem('fav') || '[]')
      this.isFavorite = this.favourites.some(b => b.key === this.selectedBook?.key)
      })
      
    })
  }

  /**
   * Gets the ID of the specific book
   * @returns the book's works ID
   */
  getParamValueQueryString() {
    const url = window.location.href;
    const httpParams = new HttpParams({ fromString: url.split('works%2F')[1] });
    return httpParams.toString().replaceAll("=", "");
  }

  /**
   * Creates the header of the card. Contains the book's author(s), title and first publish year
   */
  createHeader() {
    if (this.bookdetails[0].first_publish_year != undefined) {
      this.header = `: ${this.bookdetails[0].title} (${this.bookdetails[0].first_publish_year})`
    }
    else {
      this.header = `: ${this.bookdetails[0].title}`
    }
  }

  /**
   * Mark favorite books like button.
   */
  markFavourite() {
      this.isFavorite = !this.isFavorite

      if (this.isFavorite) {
        this.favourites.push({...this.selectedBook, key: this.key})
      } else {
        this.favourites = this.favourites.filter(b => b.key !== this.selectedBook?.key)
      }
      localStorage.setItem('fav', JSON.stringify(this.favourites))
    }
  }

