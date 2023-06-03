import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Observable } from "rxjs";
import * as _ from 'lodash';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Constructor parameters for Dependency Injection
   * @param route Service to navigate to different pages
   */
  constructor(public router: Router) { }

  /**
   * Navigation between the pages
   */
  ngOnInit() {
    this.currentPageTitle = this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
            map((() => _.find(["Book", "Author"], t => this.router.isActive('/' + t.toLowerCase() + '-search-page', false))).bind(this)))
  }
  title = 'BiblioScope';
  isNavbarCollapsed = true;
  currentPageTitle!: Observable<string | undefined>;
}
