(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-state-listing-real-state-listing-module"],{

/***/ "./src/app/real-state/listing/real-state-listing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RealStateListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingPageModule", function() { return RealStateListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_state_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./real-state-listing.page */ "./src/app/real-state/listing/real-state-listing.page.ts");
/* harmony import */ var _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-state-listing.resolver */ "./src/app/real-state/listing/real-state-listing.resolver.ts");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _real_state_listing_page__WEBPACK_IMPORTED_MODULE_7__["RealStateListingPage"],
        resolve: {
            data: _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["RealStateListingResolver"]
        }
    }
];
var RealStateListingPageModule = /** @class */ (function () {
    function RealStateListingPageModule() {
    }
    RealStateListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [
                _real_state_listing_page__WEBPACK_IMPORTED_MODULE_7__["RealStateListingPage"]
            ],
            providers: [
                _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["RealStateListingResolver"],
                _real_state_service__WEBPACK_IMPORTED_MODULE_9__["RealStateService"]
            ]
        })
    ], RealStateListingPageModule);
    return RealStateListingPageModule;
}());



/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Real State Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"real-state-listing-content\">\n  <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n    <ion-row class=\"image-row\">\n      <ion-col size=\"12\">\n        <a class=\"image-anchor\" [routerLink]=\"['/app/categories/real-state/', item.slug]\">\n          <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"item-picture\" [src]=\"item.picture\">\n            <app-aspect-ratio [ratio]=\"{w:365, h:125}\">\n            </app-aspect-ratio>\n          </app-image-shell>\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"description-row\">\n      <ion-col size=\"12\" class=\"details-col\">\n        <ion-row class=\"details-wrapper\">\n          <ion-col>\n            <h4 class=\"item-price\">\n              <span class=\"price-icon\">$</span>\n              <app-text-shell [data]=\"item.price\"></app-text-shell>\n            </h4>\n            <p class=\"item-address\">\n              <app-text-shell [data]=\"item.address\"></app-text-shell>\n            </p>\n          </ion-col>\n          <ion-col class=\"bookmark-col\" size=\"2\">\n            <ion-icon *ngIf=\"item.liked\" class=\"like-icon\" name=\"heart\"></ion-icon>\n            <ion-icon *ngIf=\"!item.liked\" class=\"like-icon\" name=\"heart-empty\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col class=\"accommodations-col\" size=\"12\">\n        <ion-row class=\"accommodations-wrapper\">\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/guests.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Guests</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.guests\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bedrooms.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Bedrooms</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.bedrooms\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bathroom.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Bathrooms</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.bathrooms\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/patio.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Patios</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.patios\"></app-text-shell>\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"amenities-col\" *ngIf=\"item.amenities\">\n        <h5 class=\"amenities-title\">Amenities</h5>\n        <ion-row class=\"amenities-wrapper\">\n          <ng-container>\n            <ion-col class=\"item-amenity\" size=\"4\" *ngFor=\"let amenity of item.amenities.slice(0, 4); let i = index\">\n              <ion-icon *ngIf=\"amenity.icon\" class=\"amenity-icon\" [src]=\"amenity.icon\"></ion-icon>\n              <span class=\"amenity-value\">\n                <app-text-shell [data]=\"amenity.name\"></app-text-shell>\n              </span>\n            </ion-col>\n            <ion-col class=\"has-more-amenities\" *ngIf=\"i == 3 && item.amenities.length > 4\">\n              <span class=\"amenities-count\">+{{ item.amenities.length - 4 }}</span>\n            </ion-col>\n          </ng-container>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.page.ts ***!
  \***************************************************************/
/*! exports provided: RealStateListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingPage", function() { return RealStateListingPage; });
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


var RealStateListingPage = /** @class */ (function () {
    function RealStateListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(RealStateListingPage.prototype, "isShell", {
        // You can add a class to know when the shell has finish loading to the entire page or by using [ngClass] in the html
        //    <ion-content [ngClass]="{'is-shell': (listing.isShell)}">
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RealStateListingPage.prototype.ngOnInit = function () {
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
    ], RealStateListingPage.prototype, "isShell", null);
    RealStateListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-state-listing',
            template: __webpack_require__(/*! ./real-state-listing.page.html */ "./src/app/real-state/listing/real-state-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/real-state-listing.page.scss */ "./src/app/real-state/listing/styles/real-state-listing.page.scss"), __webpack_require__(/*! ./styles/real-state-listing.shell.scss */ "./src/app/real-state/listing/styles/real-state-listing.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RealStateListingPage);
    return RealStateListingPage;
}());



/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: RealStateListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingResolver", function() { return RealStateListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealStateListingResolver = /** @class */ (function () {
    function RealStateListingResolver(realStateService) {
        this.realStateService = realStateService;
    }
    RealStateListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.realStateService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    RealStateListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_real_state_service__WEBPACK_IMPORTED_MODULE_1__["RealStateService"]])
    ], RealStateListingResolver);
    return RealStateListingResolver;
}());



/***/ }),

/***/ "./src/app/real-state/listing/styles/real-state-listing.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/real-state/listing/styles/real-state-listing.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-amenity-vertical-gutter: 6px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a; }\n\n.real-state-listing-content {\n  --background: var(--page-background); }\n\n.listing-item .image-row {\n  --ion-grid-column-padding: 0px; }\n\n.listing-item .image-row .image-anchor {\n    display: block; }\n\n.listing-item .description-row {\n  --ion-grid-column-padding: 0px;\n  padding-bottom: var(--page-margin); }\n\n.listing-item .description-row .details-col {\n    padding: calc(var(--page-margin) / 2) var(--page-margin) 0px; }\n\n.listing-item .description-row .details-col .details-wrapper {\n      justify-content: space-between; }\n\n.listing-item .description-row .details-col .details-wrapper .item-price {\n        margin: 0px 0px 5px;\n        font-weight: 500;\n        color: var(--ion-color-dark-tint);\n        display: flex;\n        align-items: center; }\n\n.listing-item .description-row .details-col .details-wrapper .item-price .price-icon {\n          margin-right: 5px; }\n\n.listing-item .description-row .details-col .details-wrapper .item-address {\n        margin: 0px;\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col {\n        display: flex;\n        justify-content: flex-end; }\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col .like-icon {\n          font-size: 32px;\n          color: var(--page-color); }\n\n.listing-item .description-row .accommodations-col {\n    padding: 0px var(--page-margin) var(--page-margin); }\n\n.listing-item .description-row .accommodations-col .accommodations-wrapper {\n      padding-top: calc(var(--page-margin)); }\n\n.listing-item .description-row .accommodations-col .item-accommodation {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      max-width: -webkit-fit-content;\n      max-width: -moz-fit-content;\n      max-width: fit-content; }\n\n.listing-item .description-row .accommodations-col .item-accommodation + .item-accommodation {\n        padding-left: calc((var(--page-margin) / 2) * 3); }\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-property {\n        font-size: 12px;\n        color: var(--ion-color-medium-tint); }\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-value {\n        display: inline-block;\n        font-weight: 400;\n        font-size: 14px;\n        color: var(--ion-color-medium-tint);\n        margin-top: 4px; }\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-name {\n        display: inline-block;\n        font-size: 12px;\n        color: var(--ion-color-medium-tint); }\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-icon {\n        color: var(--ion-color-medium-tint);\n        font-size: 30px; }\n\n.listing-item .description-row .amenities-col {\n    padding: 0px var(--page-margin) calc(var(--page-margin) / 2);\n    background: var(--app-background-shade); }\n\n.listing-item .description-row .amenities-col .amenities-title {\n      margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n      font-size: 12px;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      color: var(--ion-color-medium-shade); }\n\n.listing-item .description-row .amenities-col .amenities-wrapper {\n      margin: 0px calc(var(--page-amenity-horizontal-gutter) * -1); }\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity {\n        padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-icon {\n          color: var(--ion-color-medium-tint);\n          font-size: 30px;\n          flex-shrink: 0; }\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-value {\n          display: block;\n          font-weight: 300;\n          font-size: 12px;\n          color: var(--ion-color-medium-tint);\n          margin-left: calc(var(--page-amenity-horizontal-gutter) * 2);\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLXN0YXRlLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQWM7RUFDZCx3Q0FBa0I7RUFFbEIsbUNBQStCO0VBQy9CLHFDQUFpQztFQUVqQyxxQkFBYSxFQUFBOztBQUlmO0VBQ0Usb0NBQWEsRUFBQTs7QUFHZjtFQUVJLDhCQUEwQixFQUFBOztBQUY5QjtJQUtNLGNBQWMsRUFBQTs7QUFMcEI7RUFVSSw4QkFBMEI7RUFFMUIsa0NBQWtDLEVBQUE7O0FBWnRDO0lBZU0sNERBQTRELEVBQUE7O0FBZmxFO01Ba0JRLDhCQUE4QixFQUFBOztBQWxCdEM7UUFxQlUsbUJBQW1CO1FBQ3RCLGdCQUFnQjtRQUNiLGlDQUFpQztRQUNqQyxhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7O0FBekI3QjtVQTRCWSxpQkFBaUIsRUFBQTs7QUE1QjdCO1FBaUNVLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBbkM3QztRQXVDVSxhQUFhO1FBQ2IseUJBQXlCLEVBQUE7O0FBeENuQztVQTJDWSxlQUFlO1VBQ2Ysd0JBQXdCLEVBQUE7O0FBNUNwQztJQW1ETSxrREFBa0QsRUFBQTs7QUFuRHhEO01Bc0RRLHFDQUFxQyxFQUFBOztBQXREN0M7TUEwRFEsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsOEJBQXNCO01BQXRCLDJCQUFzQjtNQUF0QixzQkFBc0IsRUFBQTs7QUE3RDlCO1FBZ0VVLGdEQUFnRCxFQUFBOztBQWhFMUQ7UUFvRVUsZUFBZTtRQUNmLG1DQUFtQyxFQUFBOztBQXJFN0M7UUF5RVUscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsbUNBQW1DO1FBQ25DLGVBQWUsRUFBQTs7QUE3RXpCO1FBaUZVLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBbkY3QztRQXVGVSxtQ0FBbUM7UUFDbkMsZUFBZSxFQUFBOztBQXhGekI7SUE4Rk0sNERBQTREO0lBQzVELHVDQUF1QyxFQUFBOztBQS9GN0M7TUFrR1EsMkRBQTJEO01BQzNELGVBQWU7TUFDZix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLG9DQUFvQyxFQUFBOztBQXRHNUM7TUEwR1EsNERBQTRELEVBQUE7O0FBMUdwRTtRQTZHVSxrRkFBa0Y7UUFDbEYsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBQTs7QUFoSGpDO1VBbUhZLG1DQUFtQztVQUNuQyxlQUFlO1VBQ2YsY0FBYyxFQUFBOztBQXJIMUI7VUF5SFksY0FBYztVQUNkLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsbUNBQW1DO1VBQ25DLDREQUE0RDtVQUM1RCxtQkFBbUI7VUFDbkIsZ0JBQWdCO1VBQ2hCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLXN0YXRlLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcjogNnB4O1xuICAtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuXG4gIC0tcGFnZS1jb2xvcjogI2Q5NDUzYTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ucmVhbC1zdGF0ZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICAuaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAuaW1hZ2UtYW5jaG9yIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuZGV0YWlscy1jb2wge1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuXG4gICAgICAuZGV0YWlscy13cmFwcGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC5pdGVtLXByaWNlIHtcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgIFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5wcmljZS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLWFkZHJlc3Mge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib29rbWFyay1jb2wge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAgIC5saWtlLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hY2NvbW1vZGF0aW9ucy1jb2wge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgIC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pKTtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tYWNjb21tb2RhdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgJiArIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLXByb3BlcnR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb21tb2RhdGlvbi12YWx1ZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9uLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb21tb2RhdGlvbi1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW1lbml0aWVzLWNvbCB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgICAgIC5hbWVuaXRpZXMtdGl0bGUge1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB9XG5cbiAgICAgIC5hbWVuaXRpZXMtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgICAuaXRlbS1hbWVuaXR5IHtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIC5hbWVuaXR5LWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYW1lbml0eS12YWx1ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgKiAyKTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/real-state/listing/styles/real-state-listing.shell.scss":
/*!*************************************************************************!*\
  !*** ./src/app/real-state/listing/styles/real-state-listing.shell.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58; }\n\napp-image-shell.item-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.item-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  min-width: 50px;\n  max-width: 100px; }\n\n.item-price app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%; }\n\n.item-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.accommodation-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.amenity-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 12px;\n  min-width: 50px; }\n\n.amenity-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLXN0YXRlLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFjO0VBQ2QsNEJBQWtCLEVBQUE7O0FBVXBCO0VBQ0UsbUVBQWlDO0VBQ2pDLDhEQUE0QixFQUFBOztBQUc5QjtFQUNFLDBEQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSGxCO0lBTUksa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBSGhCO0lBTUksa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBOztBQUlsQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlYWwtc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1zdGF0ZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2Q5NDUzYTtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIxNyw2OSw1ODtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLml0ZW0tcHJpY2UgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uYW1lbml0eS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/utils/shell-provider.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/shell-provider.ts ***!
  \*****************************************/
/*! exports provided: ShellProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellProvider", function() { return ShellProvider; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var ShellProvider = /** @class */ (function () {
    function ShellProvider(shellModel, dataObservable) {
        var _this = this;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the environment.ts file.
        this.networkDelay = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"] && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.networkDelay) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.networkDelay : 0;
        // To debug shell styles, change configuration in the environment.ts file
        this.debugMode = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"] && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.debug) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].shell.debug : false;
        // tslint:disable-next-line:max-line-length
        var shellClassName = (shellModel && shellModel.constructor && shellModel.constructor.name) ? shellModel.constructor.name : 'No Class Name';
        // tslint:disable-next-line:no-console
        console.time('[' + shellClassName + '] ShellProvider roundtrip');
        // Set the shell model as the initial value
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](shellModel);
        var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(this.networkDelay)
        // finalize(() => console.log('delayObservable COMPLETED'))
        );
        dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])() // Prevent the need to unsubscribe because .first() completes the observable
        // finalize(() => console.log('dataObservable COMPLETED'))
        );
        // Put both delay and data Observables in a forkJoin so they execute in parallel so that
        // the delay caused (on purpose) by the delayObservable doesn't get added to the time the dataObservable takes to complete
        var forkedObservables = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(delayObservable, dataObservable)
            .pipe(
        // finalize(() => console.log('forkedObservables COMPLETED'))
        )
            .subscribe(function (_a) {
            var delayValue = _a[0], dataValue = _a[1];
            if (!_this.debugMode) {
                _this._subject.next(dataValue);
                // tslint:disable-next-line:no-console
                console.timeEnd('[' + shellClassName + '] ShellProvider roundtrip');
            }
        });
        this._observable = this._subject.asObservable();
    }
    Object.defineProperty(ShellProvider.prototype, "observable", {
        get: function () {
            return this._observable;
        },
        enumerable: true,
        configurable: true
    });
    return ShellProvider;
}());



/***/ })

}]);
//# sourceMappingURL=real-state-listing-real-state-listing-module.js.map