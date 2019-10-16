import { Component, NgZone,OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { IonSlides, MenuController } from '@ionic/angular';

import {NavController, ModalController} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.page.html',
  styleUrls: [
    './styles/getting-started.page.scss',
    './styles/getting-started.shell.scss',
    './styles/getting-started.responsive.scss'
  ]
})
export class GettingStartedPage implements OnInit/*, AfterViewInit */{
  @ViewChild(IonSlides) slides: IonSlides;
  @HostBinding('class.last-slide-active') isLastSlide = false;
  
  gettingStartedForm: FormGroup;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any;
  map: any;
  cityName : any;
  autocompleteItems: any;
  nearbyItems: any = new Array<any>();
  loading: any;

  constructor(public menu: MenuController,
    private navCtrl: NavController,
    private ModalCtrl:ModalController,
    public zone: NgZone,
    public loadingCtrl: LoadingController) {
    this.gettingStartedForm = new FormGroup({
      browsingCategory: new FormControl(),
      followingInterests: new FormGroup({
        tops: new FormControl(),
        dresses: new FormControl(),
        jeans: new FormControl(),
        jackets: new FormControl(),
        shoes: new FormControl(),
        glasses: new FormControl()
      })
    });
    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: ''
    };
    this.autocompleteItems = [];
    this.loading = this.loadingCtrl.create();
  
  }

  

  ngOnInit(): void {
    this.menu.enable(false);
  }
/*
  ngAfterViewInit(): void {
    // ViewChild is set
    this.slides.isEnd().then(isEnd => {
      this.isLastSlide = isEnd;
    });

    // Subscribe to changes
    this.slides.ionSlideWillChange.subscribe(changes => {
      this.slides.isEnd().then(isEnd => {
        this.isLastSlide = isEnd;
      });
    });
  }
  
  ionViewDidEnter(){
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
    
  }
  */

  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        if(predictions){
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        }
        
    });
    
  }

  selectSearchResult(item){
    //this.loading.present();
    this.autocompleteItems = [];
    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        this.autocompleteItems = [];
        this.GooglePlaces.nearbySearch({
          location: results[0].geometry.location,
          radius: '500',
          types: ['restaurant'], //check other types here https://developers.google.com/places/web-service/supported_types
          // key: 'YOUR_KEY_HERE'
          key:'AIzaSyCYwVfhdU-5h04ijDH9KcgwxTI8pxj2b_0'
        }, (near_places) => {
          this.zone.run(() => {
            this.nearbyItems = [];
            for (var i = 0; i < near_places.length; i++) {
              this.nearbyItems.push(near_places[i]);
            }
            //this.loading.dismiss();
          });
        })
      }
    })
    this.autocomplete.input =item.description;
    this.gettingStartedForm.controls.browsingCategory.reset();
    this.cityName = item.description;
    console.log(this.cityName);
  }
 
  radioChecked(name){
    this.autocomplete.input ='';
    this.cityName = name;
  }


  selectedCity(){
    this.cityName = this.cityName.replace(/ /g, "").replace(/,/g, "");
    //this.cityName = this.cityName.replace(/[^\w\s]/gi, " ")
    console.log(this.cityName);
  }
  

}
