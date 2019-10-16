import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DetailsService } from './details.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()





export class DetailsResolver implements Resolve<any> {

  
  
  constructor(private DetailsService: DetailsService) {
    
  }

  resolve(route: ActivatedRouteSnapshot) {
    // Get the Shell Provider from the service
    console.log("AVANT");
    let filmId = route.paramMap.get('productId');
    console.log("filmId="+filmId)
    
    const shellProviderObservable = this.DetailsService.getDetailsDataWithShell(filmId);
    console.log("APRES");
    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      resolve(shellProviderObservable);
    });
    return observablePromise;
  }
}
