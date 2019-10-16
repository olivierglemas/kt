import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TravelService } from '../travel.service';
import { ActivatedRouteSnapshot } from '@angular/router';
//import { TravelDetails } from './travel-details.page';
@Injectable()





export class TravelDetailsResolver implements Resolve<any> {

  
  
  constructor(private TravelService: TravelService,
              //private TravelDetails: TravelDetails,
              //private route: ActivatedRoute
              ) {
    
  }

  resolve(route: ActivatedRouteSnapshot) {
    // Get the Shell Provider from the service
    console.log("AVANT");
    let filmId = route.paramMap.get('productId');
    console.log("filmId="+filmId)
    
    const shellProviderObservable = this.TravelService.getDetailsDataWithShell(filmId);
    console.log("APRES");
    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      resolve(shellProviderObservable);
    });
    return observablePromise;
  }
}
