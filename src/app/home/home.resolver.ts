import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HomeService } from './home.service';

@Injectable()
export class HomeResolver implements Resolve<any> {

  constructor(private homeService: HomeService) {}

  resolve() {
    // Get the Shell Provider from the service
    const shellProviderObservable = this.homeService.getListingDataWithShell();
  
    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      resolve(shellProviderObservable);
    });
    return observablePromise;
  }
}
