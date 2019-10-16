import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ShellProvider } from '../utils/shell-provider';

import { TravelListingModel } from './listing/travel-listing.model';
import { TravelDetailsModel } from './details/travel-details.model';
//import { TravelDetailsPage } from './details/travel-details.page';

@Injectable()
export class TravelService {
  private _listingWithShellCache: ShellProvider<TravelListingModel>;
  private _detailsWithShellCache: ShellProvider<TravelDetailsModel>;

  constructor(private http: HttpClient//,
    //private TravelDetailsPage: TravelDetailsPage
    ) { }

  public getListingDataWithShell(): Observable<TravelListingModel> {
    // Use cache if we have it.
    if (!this._listingWithShellCache) {
      // Initialize the model specifying that it is a shell model
      const shellModel: TravelListingModel = new TravelListingModel(true);
      //https://cors-anywhere.herokuapp.com/https://surhdv.com/mytv/drame.json
      
      const dataObservable = this.http.get<TravelListingModel>('https://cors-anywhere.herokuapp.com/https://surhdv.com/mytv/listing.json');

      this._listingWithShellCache = new ShellProvider(
        shellModel,
        dataObservable
      );
    }
    return this._listingWithShellCache.observable;
  }

  public getDetailsDataWithShell(filmId: string): Observable<TravelDetailsModel> {
    // Use cache if we have it.
    //if (!this._detailsWithShellCache) {
      // Initialize the model specifying that it is a shell model
      const shellModel: TravelDetailsModel = new TravelDetailsModel(true);
      console.log("filmId inside="+filmId)
      // this.http.get('https://api.themoviedb.org/3/movie/' + this.filmId + '?api_key=431bc17da732dfb3be082e58f7a5cf27&language=fr').subscribe((res: MovieModel) => {
      const dataObservable = this.http.get<TravelDetailsModel>('https://api.themoviedb.org/3/movie/' + filmId + '?api_key=431bc17da732dfb3be082e58f7a5cf27&language=fr');

      this._detailsWithShellCache = new ShellProvider(
        shellModel,
        dataObservable
      );
    //}
    return this._detailsWithShellCache.observable;
  }



  

}
