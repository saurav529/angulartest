import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartest';
  pageTitle;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          switch (event.urlAfterRedirects) {
            case '/':
              this.pageTitle = 'HomePage';
              break;
            case '/test':
              this.pageTitle = 'Test Page';
              break;
            case '/gallery':
              this.pageTitle = 'Image Gallery';
              break;
            case '/login':
              this.pageTitle = 'Login Page';
              break;
          }
          console.log(`page_path: ${event.urlAfterRedirects}, page_title: ${this.pageTitle}`)
          gtag('config', 'UA-103072673-1', {page_path: event.urlAfterRedirects, page_title: this.pageTitle});
        }
      }
    );
  }
}
