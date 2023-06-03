import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookfull, BookDetails } from '../models/book.type';
import { Authorfull } from '../models/author.type';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  /**
   * Constructor parameters for Dependency Injection
   * @param http Service to make HTTP requests.
   */
  constructor(private http: HttpClient) { }

  rootUrl = 'https://openlibrary.org/'

  /**
   * Gets books by searching parameters.
   * @param searchTerm searching parameter
   * @param limit element number
   * @param by the search group, can be author, all and title
   * @returns books
   */
  getBooks(searchTerm: string, limit: number, by: string) {
    const url = new URL('search.json', this.rootUrl)
    if (by === "all")
      url.searchParams.append("q", searchTerm);
    else
      url.searchParams.append(by, searchTerm);
    url.searchParams.append('limit', '20');

    return this.http.get<Bookfull>(url.toString())
  }

  /**
   * Gets books by subjects.
   * @param searchTerm subject name
   * @param limit element number
   * @returns books
   */
  getBooksBySubject(searchTerm: string, limit: number) {
    const url = new URL('search/${searchTerm}.json', this.rootUrl)

    url.searchParams.append('q', searchTerm);
    url.searchParams.append('limit', '20');

    return this.http.get<Bookfull>(url.toString())
  }

  /**
   * Gets one specific books data.
   * @param key books id
   * @returns book
   */
  getBook(key: string) {
    const url = new URL(`works/${key}.json`, this.rootUrl)

    return this.http.get<BookDetails>(url.toString())
  }
}