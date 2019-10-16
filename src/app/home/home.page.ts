import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: [
    './styles/home.page.scss',
    './styles/home.shell.scss'
  ]
})
export class HomePage implements OnInit {
  listing: HomeModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route && this.route.data) {
      // We resolved a promise for the data Observable
      const promiseObservable = this.route.data;
      console.log('Route Resolve Observable => promiseObservable: ', promiseObservable);

      if (promiseObservable) {
        promiseObservable.subscribe(promiseValue => {
          const dataObservable = promiseValue['data'];
          console.log('Subscribe to promiseObservable => dataObservable: ', dataObservable);

          if (dataObservable) {
            dataObservable.subscribe(observableValue => {
              const pageData: HomeModel = observableValue;
              // tslint:disable-next-line:max-line-length
              console.log('Subscribe to dataObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
              // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
              // and the real remote data once it gets fetched
              if (pageData) {
                this.listing = pageData;
                
              }
            });
          } else {
            console.warn('No dataObservable coming from Route Resolver promiseObservable');
          }
        });
      } else {
        console.warn('No promiseObservable coming from Route Resolver data');
      }
    } else {
      console.warn('No data coming from Route Resolver');
    }
  }
}
