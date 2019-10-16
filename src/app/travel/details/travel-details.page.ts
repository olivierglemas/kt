import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ShellProvider } from '../../utils/shell-provider';
import { HttpClient } from '@angular/common/http';

import { TravelDetailsModel } from './travel-details.model';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.page.html',
  styleUrls: [
    './styles/travel-details.page.scss',
    './styles/travel-details.shell.scss'
  ]
})
export class TravelDetailsPage implements OnInit {
  details: TravelDetailsModel;
  private _detailsWithShellCache: ShellProvider<TravelDetailsModel>;
  filmId=null;
  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route && this.route.data) {
      // We resolved a promise for the data Observable
      const promiseObservable = this.route.data;
      console.log('Route Resolve Observable => promiseObservable: ', promiseObservable);
      this.filmId = this.route.snapshot.paramMap.get('productId');
      console.log("filmId="+this.filmId)
      if (promiseObservable) {
        promiseObservable.subscribe(promiseValue => {
          const dataObservable = promiseValue['data'];
          console.log('Subscribe to promiseObservable => dataObservable: ', dataObservable);

          if (dataObservable) {
            dataObservable.subscribe(observableValue => {
              const pageData: TravelDetailsModel = observableValue;
              // tslint:disable-next-line:max-line-length
              console.log('Subscribe to dataObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
              // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
              // and the real remote data once it gets fetched
              if (pageData) {
                this.details = pageData;
                if (pageData.overview =="")
                  pageData.overview="Non disponible";

                if (pageData.backdrop_path ==null)
                  this.details.backdrop_path = "https://image.tmdb.org/t/p/original"+pageData.poster_path
                else 
                  this.details.backdrop_path = "https://image.tmdb.org/t/p/original"+pageData.backdrop_path ;
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
