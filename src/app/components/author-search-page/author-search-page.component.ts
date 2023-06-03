import { Component, OnInit } from "@angular/core";
import { Author } from "../../models/author.type";
import { AuthorService } from "../../services/author.service";
import * as _ from "lodash";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "author-search-page",
  templateUrl: "./author-search-page.component.html",
  styleUrls: ['./author-search-page.component.css']
})

export class AuthorSearchPageComponent implements OnInit {
  /**
   * Constructor parameters for Dependency Injection
   * @param authorService Service to send HTTP request to AuthorService
   * @param route Service to navigate to different pages
   */
  constructor(private authorService: AuthorService, private route: ActivatedRoute) { }

  authors: Author[] = [];
  searchTerm = "";

  /**
   * Gets the data from the searched books by searching parameters.
   */
  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'].replaceAll('_', ' ')
        await this.getAuthors(params['searchTerm'])
      }
    })
  }

  /**
   * Gets the data from the authors
   * @param searchTerm searching parameter
   */
  getAuthors(searchTerm: string) {
    this.authorService.getAuthors(searchTerm).subscribe(data => {
      this.authors = data.docs
    })
  }
}
