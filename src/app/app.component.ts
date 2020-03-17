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

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          console.log(event.urlAfterRedirects);
          gtag('config', 'UA-103072673-1', {page_path: event.urlAfterRedirects});
        }
      }
    );
  }
}
