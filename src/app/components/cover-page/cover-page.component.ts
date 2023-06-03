import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent {
  /**
   * Constructor parameters for Dependency Injection
   * @param route Service to navigate to different pages
   */
  constructor(private route: ActivatedRoute) { }

  key: string = ''

  /**
   * Gets the cover's id for the image search.
   */
  ngOnInit() {
    this.key = this.getParamValueQueryString()
  }

  /**
   * Gets the cover's id from the URL.
   * @returns cover id
   */
  getParamValueQueryString() {
    const url = window.location.href;
    const httpParams = new HttpParams({ fromString: url.split('cover-page/')[1] });
    return httpParams.toString().replaceAll("=", "");
  }
}
