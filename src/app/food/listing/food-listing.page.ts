import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FoodListingModel } from './food-listing.model';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.page.html',
  styleUrls: [
    './styles/food-listing.page.scss',
    './styles/food-listing.shell.scss'
  ]
})
export class FoodListingPage implements OnInit {
  listing: FoodListingModel;

  

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(
    private route: ActivatedRoute,
    private callNumber: CallNumber,
    /*private launchNavigator: LaunchNavigator*/) { }

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
              const pageData: FoodListingModel = observableValue;
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

  callNow(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }


  


  launchMap(){
    console.log("launchMap");
    /*
    this.launchNavigator.navigate("London, UK", {
      start: "Manchester, UK"
  })
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }*/
  }
}
