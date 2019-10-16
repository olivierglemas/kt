(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-listing-food-listing-module"],{

/***/ "./src/app/food/listing/food-listing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/food/listing/food-listing.module.ts ***!
  \*****************************************************/
/*! exports provided: FoodListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListingPageModule", function() { return FoodListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _food_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food-listing.page */ "./src/app/food/listing/food-listing.page.ts");
/* harmony import */ var _food_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food-listing.resolver */ "./src/app/food/listing/food-listing.resolver.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../food.service */ "./src/app/food/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _food_listing_page__WEBPACK_IMPORTED_MODULE_8__["FoodListingPage"],
        resolve: {
            data: _food_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FoodListingResolver"]
        }
    }
];
var FoodListingPageModule = /** @class */ (function () {
    function FoodListingPageModule() {
    }
    FoodListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [
                _food_listing_page__WEBPACK_IMPORTED_MODULE_8__["FoodListingPage"]
            ],
            providers: [
                _food_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FoodListingResolver"],
                _food_service__WEBPACK_IMPORTED_MODULE_10__["FoodService"]
            ]
        })
    ], FoodListingPageModule);
    return FoodListingPageModule;
}());



/***/ }),

/***/ "./src/app/food/listing/food-listing.page.html":
/*!*****************************************************!*\
  !*** ./src/app/food/listing/food-listing.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Food Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"food-listing-content\">\n  <ng-container *ngIf=\"listing?.items\">\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n      <div class=\"cover-wrapper\">\n        <a class=\"cover-anchor\" [routerLink]=\"['/app/categories/food/', item.slug]\">\n          <app-image-shell class=\"cover-image add-overlay\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item.image\">\n            <app-aspect-ratio [ratio]=\"{w:35, h:15}\">\n              <div class=\"cover-icon-wrapper\">\n                <app-aspect-ratio [ratio]=\"{w: 20, h: 7}\">\n                  <app-image-shell class=\"item-icon\" [src]=\"item.icon\"></app-image-shell>\n                </app-aspect-ratio>\n              </div>\n            </app-aspect-ratio>\n          </app-image-shell>\n        </a>\n      </div>\n      <ion-row class=\"info-row\">\n        <ion-col class=\"description-col\">\n          <ion-row class=\"description-wrapper\">\n            <h3 class=\"item-name\">\n              <a class=\"name-anchor\" [routerLink]=\"['/app/categories/food/', item.slug]\">\n                <app-text-shell [data]=\"item.name\"></app-text-shell>\n              </a>\n            </h3>\n            <p class=\"item-address\">\n              <app-text-shell [data]=\"item.address\"></app-text-shell>\n            </p>\n            <ion-row class=\"item-tags\">\n              <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of item.tags\">\n                <span class=\"item-tag\">\n                  <app-text-shell [data]=\"tag\"></app-text-shell>\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-row>\n        </ion-col>\n        <ion-col class=\"stats-col\" size=\"2\">\n          <span class=\"item-rating\" [attr.ratingBase]=\"item.rating | floor\">\n            <app-text-shell [data]=\"item.rating\"></app-text-shell>\n          </span>\n          <div class=\"item-price-range\">\n            <span class=\"price\" *ngFor=\"let price of [].constructor(item.priceRange)\">$</span>\n            <span class=\"no-price\" *ngFor=\"let price of [].constructor(5 - (item.priceRange || 1))\">$</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"pictures-row\">\n        <ion-col class=\"picture-wrapper\" size=\"2\" *ngFor=\"let picture of item.pictures.slice(0, 5); let i = index\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell class=\"picture-image\" [src]=\"picture\" [alt]=\"'food image'\"></app-image-shell>\n          </app-aspect-ratio>\n          <a class=\"has-more-pictures\" [routerLink]=\"['/app/categories/food/', item.slug]\" *ngIf=\"i == 4 && item.pictures.length > 5\">\n            <span class=\"pictures-count\">{{ item.pictures.length - 5 }}</span>\n          </a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/food/listing/food-listing.page.ts":
/*!***************************************************!*\
  !*** ./src/app/food/listing/food-listing.page.ts ***!
  \***************************************************/
/*! exports provided: FoodListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListingPage", function() { return FoodListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodListingPage = /** @class */ (function () {
    function FoodListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(FoodListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FoodListingPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route && this.route.data) {
            // We resolved a promise for the data Observable
            var promiseObservable = this.route.data;
            console.log('Route Resolve Observable => promiseObservable: ', promiseObservable);
            if (promiseObservable) {
                promiseObservable.subscribe(function (promiseValue) {
                    var dataObservable = promiseValue['data'];
                    console.log('Subscribe to promiseObservable => dataObservable: ', dataObservable);
                    if (dataObservable) {
                        dataObservable.subscribe(function (observableValue) {
                            var pageData = observableValue;
                            // tslint:disable-next-line:max-line-length
                            console.log('Subscribe to dataObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
                            // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
                            // and the real remote data once it gets fetched
                            if (pageData) {
                                _this.listing = pageData;
                            }
                        });
                    }
                    else {
                        console.warn('No dataObservable coming from Route Resolver promiseObservable');
                    }
                });
            }
            else {
                console.warn('No promiseObservable coming from Route Resolver data');
            }
        }
        else {
            console.warn('No data coming from Route Resolver');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-shell'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FoodListingPage.prototype, "isShell", null);
    FoodListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-listing',
            template: __webpack_require__(/*! ./food-listing.page.html */ "./src/app/food/listing/food-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/food-listing.page.scss */ "./src/app/food/listing/styles/food-listing.page.scss"), __webpack_require__(/*! ./styles/food-listing.shell.scss */ "./src/app/food/listing/styles/food-listing.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FoodListingPage);
    return FoodListingPage;
}());



/***/ }),

/***/ "./src/app/food/listing/food-listing.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/food/listing/food-listing.resolver.ts ***!
  \*******************************************************/
/*! exports provided: FoodListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListingResolver", function() { return FoodListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food.service */ "./src/app/food/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodListingResolver = /** @class */ (function () {
    function FoodListingResolver(foodService) {
        this.foodService = foodService;
    }
    FoodListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.foodService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    FoodListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]])
    ], FoodListingResolver);
    return FoodListingResolver;
}());



/***/ }),

/***/ "./src/app/food/listing/styles/food-listing.page.scss":
/*!************************************************************!*\
  !*** ./src/app/food/listing/styles/food-listing.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-tags-gutter: 4px;\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0; }\n\n.food-listing-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.listing-item {\n  border-bottom: 2px solid var(--ion-color-medium-tint);\n  margin-bottom: calc(var(--page-margin) * 2);\n  padding-bottom: var(--page-margin); }\n\n.listing-item:last-child {\n    border-bottom: none;\n    margin-bottom: 0px; }\n\n.listing-item .cover-wrapper {\n    margin-bottom: var(--page-margin); }\n\n.listing-item .cover-wrapper .cover-anchor {\n      display: block; }\n\n.listing-item .cover-wrapper .cover-icon-wrapper {\n      margin: 0px 20%;\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      align-items: center; }\n\n.listing-item .info-row {\n    --ion-grid-columns: 10;\n    --ion-grid-column-padding: 0px;\n    margin: 0px calc(var(--page-pictures-gutter) * -1);\n    padding-bottom: var(--page-margin); }\n\n.listing-item .info-row::before, .listing-item .info-row::after {\n      content: '';\n      flex: 0 0 var(--page-pictures-gutter); }\n\n.listing-item .info-row .description-col .description-wrapper {\n      height: 100%;\n      justify-content: space-between;\n      flex-direction: column; }\n\n.listing-item .info-row .description-col .item-name {\n      margin: 0px;\n      color: var(--ion-color-dark-tint);\n      font-size: 20px; }\n\n.listing-item .info-row .description-col .item-name .name-anchor {\n        display: block;\n        text-decoration: none; }\n\n.listing-item .info-row .description-col .item-address {\n      margin: 0px;\n      margin-top: 5px;\n      color: var(--ion-color-medium-tint);\n      font-size: 12px; }\n\n.listing-item .info-row .description-col .item-tags {\n      margin-top: 5px; }\n\n.listing-item .info-row .description-col .item-tags .tag-wrapper {\n        padding-right: var(--page-tags-gutter);\n        flex-grow: 0;\n        min-width: -webkit-fit-content;\n        min-width: -moz-fit-content;\n        min-width: fit-content; }\n\n.listing-item .info-row .description-col .item-tags .tag-wrapper:last-child {\n          padding-right: 0px; }\n\n.listing-item .info-row .description-col .item-tags .item-tag {\n        display: block;\n        border-radius: var(--app-narrow-radius);\n        border: 1px solid var(--ion-color-light-shade);\n        padding: calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);\n        font-size: 10px;\n        color: var(--ion-color-medium-tint); }\n\n.listing-item .info-row .stats-col {\n      padding-left: calc(var(--page-margin) / 2); }\n\n.listing-item .info-row .stats-col .item-rating {\n        background-color: rgba(var(--page-color-rgb), 0.35);\n        color: var(--ion-color-lightest);\n        border-radius: var(--app-narrow-radius);\n        padding-top: calc(var(--page-margin) / 3);\n        padding-bottom: calc(var(--page-margin) / 3);\n        padding-left: calc(var(--page-margin) / 2);\n        padding-right: calc(var(--page-margin) / 2);\n        font-size: 12px;\n        font-weight: 600;\n        width: 100%;\n        display: block;\n        text-align: center; }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"1\"] {\n          background-color: var(--page-rating-1-color); }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"2\"] {\n          background-color: var(--page-rating-2-color); }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"3\"] {\n          background-color: var(--page-rating-3-color); }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"4\"] {\n          background-color: var(--page-rating-4-color); }\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"5\"] {\n          background-color: var(--page-rating-5-color); }\n\n.listing-item .info-row .stats-col .item-price-range {\n        margin-top: 5px;\n        font-size: 12px;\n        letter-spacing: 1px;\n        font-weight: 500;\n        text-align: center; }\n\n.listing-item .info-row .stats-col .item-price-range .price {\n          color: var(--page-color); }\n\n.listing-item .info-row .stats-col .item-price-range .no-price {\n          color: rgba(var(--ion-color-light-shade-rgb), 0.4); }\n\n.listing-item .pictures-row {\n    --ion-grid-columns: 10;\n    --ion-grid-column-padding: 0px;\n    margin: 0px calc(var(--page-pictures-gutter) * -1); }\n\n.listing-item .pictures-row .picture-wrapper {\n      padding: 0px var(--page-pictures-gutter); }\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures {\n        position: absolute;\n        top: 0px;\n        bottom: 0px;\n        left: 0px;\n        right: 0px;\n        margin: 0px var(--page-pictures-gutter);\n        background-color: rgba(var(--page-color-rgb), 0.7);\n        border-radius: var(--app-narrow-radius);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-decoration: none;\n        z-index: 2; }\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures .pictures-count {\n          font-size: 22px;\n          color: var(--ion-color-lightest);\n          font-weight: 600; }\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures .pictures-count::before {\n            content: '+';\n            font-size: 26px;\n            color: var(--ion-color-lightest);\n            font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZm9vZC9saXN0aW5nL3N0eWxlcy9mb29kLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQWM7RUFDZCx3Q0FBa0I7RUFFbEIsb0RBQXVCO0VBQ3ZCLHVCQUFtQjtFQUVuQiw4QkFBc0I7RUFDdEIsOEJBQXNCO0VBQ3RCLDhCQUFzQjtFQUN0Qiw4QkFBc0I7RUFDdEIsOEJBQXNCO0VBRXRCLHFCQUFhO0VBQ2IsMkJBQWlCLEVBQUE7O0FBSW5CO0VBQ0Usb0NBQWE7RUFDYixtQ0FBZ0I7RUFDaEIsaUNBQWM7RUFDZCxpQ0FBYztFQUNkLG9DQUFpQixFQUFBOztBQUduQjtFQUNFLHFEQUFxRDtFQUNyRCwyQ0FBMkM7RUFDM0Msa0NBQWtDLEVBQUE7O0FBSHBDO0lBTUUsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBOztBQVBwQjtJQVdJLGlDQUFpQyxFQUFBOztBQVhyQztNQWNNLGNBQWMsRUFBQTs7QUFkcEI7TUFrQk0sZUFBZTtNQUNmLGFBQWE7TUFDYixZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLG1CQUFtQixFQUFBOztBQXRCekI7SUEyQkksc0JBQW1CO0lBQ25CLDhCQUEwQjtJQUUxQixrREFBa0Q7SUFDcEQsa0NBQWtDLEVBQUE7O0FBL0JwQztNQW9DTSxXQUFXO01BQ1gscUNBQXFDLEVBQUE7O0FBckMzQztNQTBDUSxZQUFZO01BQ1osOEJBQThCO01BQzlCLHNCQUFzQixFQUFBOztBQTVDOUI7TUFnRFEsV0FBVztNQUNYLGlDQUFpQztNQUNqQyxlQUFlLEVBQUE7O0FBbER2QjtRQXFEVSxjQUFjO1FBQ2QscUJBQXFCLEVBQUE7O0FBdEQvQjtNQTJEUSxXQUFXO01BQ1gsZUFBZTtNQUNmLG1DQUFtQztNQUNuQyxlQUFlLEVBQUE7O0FBOUR2QjtNQWtFUSxlQUFlLEVBQUE7O0FBbEV2QjtRQXFFVSxzQ0FBc0M7UUFDdEMsWUFBWTtRQUNaLDhCQUFzQjtRQUF0QiwyQkFBc0I7UUFBdEIsc0JBQXNCLEVBQUE7O0FBdkVoQztVQTBFWSxrQkFBa0IsRUFBQTs7QUExRTlCO1FBK0VVLGNBQWM7UUFDZCx1Q0FBdUM7UUFDNUMsOENBQThDO1FBQzlDLGtFQUFrRTtRQUNsRSxlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBcEZ4QztNQTBGTSwwQ0FBMEMsRUFBQTs7QUExRmhEO1FBOEZRLG1EQUFrRDtRQUN0RCxnQ0FBZ0M7UUFDaEMsdUNBQXVDO1FBQ3ZDLHlDQUF5QztRQUN6Qyw0Q0FBNEM7UUFDNUMsMENBQTBDO1FBQzFDLDJDQUEyQztRQUMxQyxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCLEVBQUE7O0FBekd2QjtVQTRHSyw0Q0FBNEMsRUFBQTs7QUE1R2pEO1VBK0dLLDRDQUE0QyxFQUFBOztBQS9HakQ7VUFrSEssNENBQTRDLEVBQUE7O0FBbEhqRDtVQXFISyw0Q0FBNEMsRUFBQTs7QUFySGpEO1VBd0hLLDRDQUE0QyxFQUFBOztBQXhIakQ7UUE2SFEsZUFBZTtRQUNmLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBOztBQWpJMUI7VUFvSVUsd0JBQXdCLEVBQUE7O0FBcElsQztVQXdJVSxrREFBa0QsRUFBQTs7QUF4STVEO0lBK0lJLHNCQUFtQjtJQUNuQiw4QkFBMEI7SUFFMUIsa0RBQWtELEVBQUE7O0FBbEp0RDtNQXFKTSx3Q0FBd0MsRUFBQTs7QUFySjlDO1FBd0pJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLFNBQVM7UUFDVCxVQUFVO1FBRU4sdUNBQXVDO1FBQzNDLGtEQUFrRDtRQUM5Qyx1Q0FBdUM7UUFDM0MsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDbkIscUJBQXFCO1FBQ3JCLFVBQVUsRUFBQTs7QUFyS2xCO1VBd0tLLGVBQWU7VUFDZixnQ0FBZ0M7VUFDaEMsZ0JBQWdCLEVBQUE7O0FBMUtyQjtZQTZLTSxZQUFZO1lBQ1osZUFBZTtZQUNmLGdDQUFnQztZQUNoQyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb2QvbGlzdGluZy9zdHlsZXMvZm9vZC1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNHB4O1xuXG4gIC0tcGFnZS1yYXRpbmctNS1jb2xvcjogIzdjZTE5ODtcbiAgLS1wYWdlLXJhdGluZy00LWNvbG9yOiAjYThlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTMtY29sb3I6ICNjZWUwN2M7XG4gIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2UwYzc3YztcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjZTA3YzdjO1xuXG4gIC0tcGFnZS1jb2xvcjogI2ViYmIwMDtcbiAgLS1wYWdlLWNvbG9yLXJnYjogMjM1LDE4NywwO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5mb29kLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAmOmxhc3QtY2hpbGQge1xuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHR9XG5cbiAgLmNvdmVyLXdyYXBwZXIge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5jb3Zlci1hbmNob3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNvdmVyLWljb24td3JhcHBlciB7XG4gICAgICBtYXJnaW46IDBweCAyMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5pbmZvLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcblx0XHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLy8gVG8gY29tcGVuc2F0ZSBuZWdhdGl2ZSBzaWRlIG1hcmdpbnMgb2YgLnBpY3R1cmVzLXJvdyAoc2libGluZyBvZiAuaW5mby1yb3cpXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZmxleDogMCAwIHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tY29sIHtcbiAgICAgIC5kZXNjcmlwdGlvbi13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgLm5hbWUtYW5jaG9yIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLml0ZW0tYWRkcmVzcyB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLXRhZ3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbiAgICAgICAgLnRhZy13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tdGFnIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIC8gMikgdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0YXRzLWNvbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC5pdGVtLXJhdGluZyB7XG4gICAgICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcblx0XHRcdFx0cGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0XHQgIGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdCAgd2lkdGg6IDEwMCU7XG5cdFx0XHQgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiMVwiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiMlwiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiM1wiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMy1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiNFwiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNC1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiNVwiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuICAgICAgLml0ZW0tcHJpY2UtcmFuZ2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vLXByaWNlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblx0fVxuXG4gIC5waWN0dXJlcy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XG5cbiAgICAucGljdHVyZS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcik7XG5cbiAgICAgIC5oYXMtbW9yZS1waWN0dXJlcyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdGJvdHRvbTogMHB4O1xuXHRcdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHRcdHJpZ2h0OiAwcHg7XG4gICAgICAgIC8vIFRvIGNvbXBlbnNhdGUgdGhlIC5waWN0dXJlLXdyYXBwZXIgcGFkZGluZ1xuICAgICAgICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcik7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuNzApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG5cblx0XHRcdFx0LnBpY3R1cmVzLWNvdW50IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblxuXHRcdFx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiAnKyc7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/food/listing/styles/food-listing.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/food/listing/styles/food-listing.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0; }\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent; }\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%; }\n\n.item-name app-text-shell.text-loaded {\n    max-width: unset; }\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%; }\n\n.item-address > app-text-shell.text-loaded {\n    max-width: unset; }\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px; }\n\n.item-tag > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px; }\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZm9vZC9saXN0aW5nL3N0eWxlcy9mb29kLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFjO0VBQ2QsNEJBQWtCLEVBQUE7O0FBVXBCO0VBQ0UsbURBQTRCO0VBQzVCLG1FQUFpQztFQUNqQyw2Q0FBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNkNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBSGhCO0lBTUksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBSGhCO0lBTUksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBOztBQUlsQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxxREFBNEI7RUFDNUIsbUVBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb29kL2xpc3Rpbmcvc3R5bGVzL2Zvb2QtbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNlYmJiMDA7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuY292ZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWljb24ge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMzAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLml0ZW0tcmF0aW5nID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5waWN0dXJlLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG59XG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=food-listing-food-listing-module.js.map