import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ShellProvider } from '../utils/shell-provider';

import { HomeModel } from './home.model';

//import { HomeDetailsPage } from './details/home-details.page';

@Injectable()
export class HomeService {
  private _listingWithShellCache: ShellProvider<HomeModel>;
  

  constructor(private http: HttpClient//,
    //private HomeDetailsPage: HomeDetailsPage
    ) { }

  public getListingDataWithShell(): Observable<HomeModel> {
    // Use cache if we have it.
    if (!this._listingWithShellCache) {
      // Initialize the model specifying that it is a shell model
      const shellModel: HomeModel = new HomeModel(true);
      //https://cors-anywhere.herokuapp.com/https://surhdv.com/mytv/drame.json
      
      const dataObservable = this.http.get<HomeModel>('https://cors-anywhere.herokuapp.com/https://surhdv.com/mytv/listing.json');

      this._listingWithShellCache = new ShellProvider(
        shellModel,
        dataObservable
      );
    }
    return this._listingWithShellCache.observable;
  }

  

  

}
