import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authorfull } from '../models/author.type';
import { AuthorDetails } from '../models/author.type';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  /**
   * Constructor parameters for Dependency Injection
   * @param http Service to make HTTP requests.
   */
  constructor(private http: HttpClient) { }

  rootUrl = 'https://openlibrary.org'

  /**
   * Gets authors by searching parameter.
   * @param searchTerm searching parameter
   * @returns authors
   */
  getAuthors(searchTerm: string) {
    const url = new URL('/search/authors.json', this.rootUrl)

    url.searchParams.append('q', searchTerm);
    
    return this.http.get<Authorfull>(url.toString())
  }
}