import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ShellProvider } from '../utils/shell-provider';


import { DetailsModel } from './details.model';

@Injectable()
export class DetailsService {
  private _detailsWithShellCache: ShellProvider<DetailsModel>;

  constructor(private http: HttpClient
    ) { }

  
  public getDetailsDataWithShell(filmId: string): Observable<DetailsModel> {
    // Use cache if we have it.
    //if (!this._detailsWithShellCache) {
      // Initialize the model specifying that it is a shell model
      const shellModel: DetailsModel = new DetailsModel(true);
      console.log("filmId inside="+filmId)
      // this.http.get('https://api.themoviedb.org/3/movie/' + this.filmId + '?api_key=431bc17da732dfb3be082e58f7a5cf27&language=fr').subscribe((res: MovieModel) => {
      const dataObservable = this.http.get<DetailsModel>('https://api.themoviedb.org/3/movie/' + filmId + '?api_key=431bc17da732dfb3be082e58f7a5cf27&language=fr');

      this._detailsWithShellCache = new ShellProvider(
        shellModel,
        dataObservable
      );
    //}
    return this._detailsWithShellCache.observable;
  }



  

}
