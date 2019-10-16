(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-state-details-real-state-details-module"],{

/***/ "./src/app/real-state/details/real-state-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: RealStateDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsPageModule", function() { return RealStateDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_state_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./real-state-details.page */ "./src/app/real-state/details/real-state-details.page.ts");
/* harmony import */ var _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-state-details.resolver */ "./src/app/real-state/details/real-state-details.resolver.ts");
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
        component: _real_state_details_page__WEBPACK_IMPORTED_MODULE_7__["RealStateDetailsPage"],
        resolve: {
            data: _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_8__["RealStateDetailsResolver"]
        }
    }
];
var RealStateDetailsPageModule = /** @class */ (function () {
    function RealStateDetailsPageModule() {
    }
    RealStateDetailsPageModule = __decorate([
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
                _real_state_details_page__WEBPACK_IMPORTED_MODULE_7__["RealStateDetailsPage"]
            ],
            providers: [
                _real_state_details_resolver__WEBPACK_IMPORTED_MODULE_8__["RealStateDetailsResolver"],
                _real_state_service__WEBPACK_IMPORTED_MODULE_9__["RealStateService"]
            ]
        })
    ], RealStateDetailsPageModule);
    return RealStateDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/real-state/details/real-state-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/real-state\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Real State Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"real-state-details-content\">\n  <ion-row class=\"image-row\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"details-picture\" [src]=\"details.picture\">\n        <app-aspect-ratio [ratio]=\"{w:64, h:40}\">\n          <ion-icon class=\"bookmark-icon\" name=\"heart\"></ion-icon>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"description-row\">\n    <ion-col size=\"12\">\n      <h4 class=\"details-price\">\n        <span class=\"price-icon\">$</span>\n        <app-text-shell [data]=\"details.price\"></app-text-shell>\n      </h4>\n      <p class=\"details-address\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details.location?.address\"></app-text-shell>\n      </p>\n      <p class=\"details-address\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details.location?.city\"></app-text-shell>\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"details-description\">\n        <app-text-shell animation=\"bouncing\" lines=\"5\" [data]=\"details.description\"></app-text-shell>\n      </p>\n    </ion-col>\n  </ion-row>\n  <div class=\"accommodations-wrapper\">\n    <h3 class=\"detail-title\">About the space</h3>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/guests.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Guests</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.guests\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bedrooms.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Bedrooms</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.bedrooms\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bathroom.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Bathrooms</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.bathrooms\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/patio.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Patio</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.patios\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"location-wrapper\">\n    <div class=\"location-header\">\n      <h3 class=\"detail-title\">Location</h3>\n      <span class=\"location-address\">\n        <app-text-shell [data]=\"details.location?.address\"></app-text-shell>\n      </span>\n    </div>\n    <!-- <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\n      <app-image-shell [src]=\"'https://maps.googleapis.com/maps/api/staticmap?center=' + details.location?.latlng + '&zoom=15&size=640x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xd9453a%7C' + details.location?.latlng + '&key=YOUR_KEY_HERE'\">\n      </app-image-shell>\n    </app-aspect-ratio> -->\n    <app-aspect-ratio [ratio]=\"{w:64, h:30}\">\n      <app-image-shell class=\"location-image\" animation=\"spinner\" [src]=\"details.location?.mapImage\" [alt]=\"'location map'\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"amenities-wrapper\">\n    <h3 class=\"detail-title\">Amenities</h3>\n    <ion-row class=\"amenities-tags\">\n      <ion-col class=\"tag-wrapper\" *ngFor=\"let amenity of details.amenities\">\n        <span class=\"amenity-tag\">\n          <app-text-shell [data]=\"amenity.name\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"safety-features-wrapper\">\n    <h3 class=\"detail-title\">Safety Features</h3>\n    <ul class=\"features-list\">\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Smoke Detector'\"></app-text-shell>\n      </li>\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Carbon Monoxide Detector'\"></app-text-shell>\n      </li>\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Security Alarm System'\"></app-text-shell>\n      </li>\n    </ul>\n  </div>\n  <div class=\"availability-wrapper\">\n    <h3 class=\"detail-title\">Availability</h3>\n    <ion-row class=\"availability-row\">\n      <span class=\"availability-description\">\n        <app-text-shell [data]=\"'1 month minimum'\"></app-text-shell>\n      </span>\n      <span class=\"availability-value\">\n        <app-text-shell [data]=\"'Available from June'\"></app-text-shell>\n      </span>\n    </ion-row>\n    <ion-button class=\"book-now-btn\" color=\"dark\" expand=\"block\" fill=\"outline\">BOOK NOW</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/real-state/details/real-state-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.page.ts ***!
  \***************************************************************/
/*! exports provided: RealStateDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsPage", function() { return RealStateDetailsPage; });
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


var RealStateDetailsPage = /** @class */ (function () {
    function RealStateDetailsPage(route) {
        this.route = route;
    }
    Object.defineProperty(RealStateDetailsPage.prototype, "isShell", {
        get: function () {
            return (this.details && this.details.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    RealStateDetailsPage.prototype.ngOnInit = function () {
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
                                _this.details = pageData;
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
    ], RealStateDetailsPage.prototype, "isShell", null);
    RealStateDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-real-state-details',
            template: __webpack_require__(/*! ./real-state-details.page.html */ "./src/app/real-state/details/real-state-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/real-state-details.page.scss */ "./src/app/real-state/details/styles/real-state-details.page.scss"), __webpack_require__(/*! ./styles/real-state-details.shell.scss */ "./src/app/real-state/details/styles/real-state-details.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RealStateDetailsPage);
    return RealStateDetailsPage;
}());



/***/ }),

/***/ "./src/app/real-state/details/real-state-details.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-state/details/real-state-details.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: RealStateDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateDetailsResolver", function() { return RealStateDetailsResolver; });
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


var RealStateDetailsResolver = /** @class */ (function () {
    function RealStateDetailsResolver(realStateService) {
        this.realStateService = realStateService;
    }
    RealStateDetailsResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.realStateService.getDetailsDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    RealStateDetailsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_real_state_service__WEBPACK_IMPORTED_MODULE_1__["RealStateService"]])
    ], RealStateDetailsResolver);
    return RealStateDetailsResolver;
}());



/***/ }),

/***/ "./src/app/real-state/details/styles/real-state-details.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/real-state/details/styles/real-state-details.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-amenity-vertical-gutter: 2px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a; }\n\n.real-state-details-content {\n  --background: var(--page-background); }\n\n.real-state-details-content .image-row {\n    --ion-grid-column-padding: 0px; }\n\n.real-state-details-content .image-row .bookmark-icon {\n      position: absolute;\n      right: var(--page-margin);\n      top: var(--page-margin);\n      font-size: 32px;\n      color: var(--page-color); }\n\n.real-state-details-content .description-row {\n    --ion-grid-column-padding: 0px;\n    padding: var(--page-margin); }\n\n.real-state-details-content .description-row .details-price {\n      margin: 0px 0px calc(var(--page-margin) / 2);\n      font-size: 18px;\n      font-weight: 600;\n      color: var(--ion-color-dark-tint);\n      display: flex; }\n\n.real-state-details-content .description-row .details-price .price-icon {\n        margin-right: 5px; }\n\n.real-state-details-content .description-row .details-address {\n      margin: 0px;\n      font-size: 14px;\n      color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .description-row .details-address + .details-address {\n        margin-top: 5px; }\n\n.real-state-details-content .description-row .details-description {\n      margin: var(--page-margin) 0px 0px;\n      font-size: 14px;\n      color: var(--ion-color-medium-shade); }\n\n.real-state-details-content .detail-title {\n    font-size: 16px;\n    font-weight: 500;\n    color: var(--ion-color-dark-tint);\n    margin: 0px 0px var(--page-margin); }\n\n.real-state-details-content .accommodations-wrapper {\n    padding: var(--page-margin);\n    padding-top: calc(var(--page-margin) / 2); }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row {\n      --ion-grid-column-padding: 0px;\n      align-items: center; }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row + .accommodation-row {\n        padding-top: calc(var(--page-margin) / 2); }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .icon-wrapper {\n        display: flex;\n        align-items: center;\n        flex-grow: 0;\n        padding-right: 20px; }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-icon {\n        font-size: 30px;\n        color: var(--ion-color-medium-shade); }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-name {\n        display: block;\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .accommodations-wrapper .accommodation-row .accommodation-value {\n        display: block;\n        font-size: 16px;\n        color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .location-wrapper {\n    padding: calc(var(--page-margin) / 2) 0px var(--page-margin); }\n\n.real-state-details-content .location-wrapper .location-header {\n      padding: 0px var(--page-margin) 0px;\n      margin-bottom: calc(var(--page-margin) / 2); }\n\n.real-state-details-content .location-wrapper .detail-title {\n      margin-bottom: 5px; }\n\n.real-state-details-content .location-wrapper .location-address {\n      display: block;\n      font-size: 14px;\n      color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .amenities-wrapper {\n    padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin); }\n\n.real-state-details-content .amenities-wrapper .amenities-tags {\n      --ion-grid-column-padding: 0px;\n      justify-content: center;\n      margin-top: calc(var(--page-amenity-vertical-gutter) * -1); }\n\n.real-state-details-content .amenities-wrapper .amenities-tags .tag-wrapper {\n        padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter) var(--page-amenity-vertical-gutter) 0px;\n        flex-grow: 0;\n        min-width: -webkit-fit-content;\n        min-width: -moz-fit-content;\n        min-width: fit-content; }\n\n.real-state-details-content .amenities-wrapper .amenities-tags .tag-wrapper:last-child {\n          padding-right: 0px; }\n\n.real-state-details-content .amenities-wrapper .amenities-tags .amenity-tag {\n        display: block;\n        border-radius: var(--app-narrow-radius);\n        border: 1px solid var(--ion-color-light-shade);\n        padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .safety-features-wrapper {\n    padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin); }\n\n.real-state-details-content .safety-features-wrapper .features-list {\n      list-style: none;\n      margin: 0px;\n      padding: 0px; }\n\n.real-state-details-content .safety-features-wrapper .features-list .feature-item {\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.real-state-details-content .safety-features-wrapper .features-list .feature-item + .feature-item {\n          margin-top: calc(var(--page-margin) / 2); }\n\n.real-state-details-content .availability-wrapper {\n    padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin); }\n\n.real-state-details-content .availability-wrapper .availability-row {\n      --ion-grid-column-padding: 0px;\n      justify-content: space-between;\n      align-items: center; }\n\n.real-state-details-content .availability-wrapper .availability-row .availability-description,\n      .real-state-details-content .availability-wrapper .availability-row .availability-value {\n        font-size: 14px;\n        color: var(--ion-color-medium-tint);\n        display: block;\n        flex: 1;\n        display: flex; }\n\n.real-state-details-content .availability-wrapper .availability-row .availability-description {\n        color: var(--ion-color-medium-tint);\n        justify-content: flex-start; }\n\n.real-state-details-content .availability-wrapper .availability-row .availability-value {\n        color: var(--page-color);\n        justify-content: flex-end; }\n\n.real-state-details-content .availability-wrapper .book-now-btn {\n      margin: var(--page-margin) 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLXN0YXRlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQWM7RUFDZCw4Q0FBa0I7RUFFbEIsbUNBQStCO0VBQy9CLHFDQUFpQztFQUVqQyxxQkFBYSxFQUFBOztBQUlmO0VBQ0Usb0NBQWEsRUFBQTs7QUFEZjtJQUlJLDhCQUEwQixFQUFBOztBQUo5QjtNQU9NLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZix3QkFBd0IsRUFBQTs7QUFYOUI7SUFnQkksOEJBQTBCO0lBRTFCLDJCQUEyQixFQUFBOztBQWxCL0I7TUFxQk0sNENBQTRDO01BQy9DLGVBQWU7TUFDZixnQkFBZ0I7TUFDYixpQ0FBaUM7TUFDakMsYUFBYSxFQUFBOztBQXpCbkI7UUE0QlEsaUJBQWlCLEVBQUE7O0FBNUJ6QjtNQWlDTSxXQUFXO01BQ1gsZUFBZTtNQUNmLG1DQUFtQyxFQUFBOztBQW5DekM7UUFzQ1EsZUFBZSxFQUFBOztBQXRDdkI7TUEyQ00sa0NBQWtDO01BQ2xDLGVBQWU7TUFDZixvQ0FBb0MsRUFBQTs7QUE3QzFDO0lBa0RJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGtDQUFrQyxFQUFBOztBQXJEdEM7SUF5REksMkJBQTJCO0lBQzNCLHlDQUF5QyxFQUFBOztBQTFEN0M7TUE2RE0sOEJBQTBCO01BRTFCLG1CQUFtQixFQUFBOztBQS9EekI7UUFrRVEseUNBQXlDLEVBQUE7O0FBbEVqRDtRQXNFUSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixtQkFBbUIsRUFBQTs7QUF6RTNCO1FBNkVRLGVBQWU7UUFDZixvQ0FBb0MsRUFBQTs7QUE5RTVDO1FBa0ZRLGNBQWM7UUFDZCxlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBcEYzQztRQXdGUSxjQUFjO1FBQ2QsZUFBZTtRQUNmLG1DQUFtQyxFQUFBOztBQTFGM0M7SUFnR0ksNERBQTRELEVBQUE7O0FBaEdoRTtNQW1HTSxtQ0FBbUM7TUFDbkMsMkNBQTJDLEVBQUE7O0FBcEdqRDtNQXdHTSxrQkFBa0IsRUFBQTs7QUF4R3hCO01BNEdNLGNBQWM7TUFDZCxlQUFlO01BQ2YsbUNBQW1DLEVBQUE7O0FBOUd6QztJQW1ISSwyRUFBMkUsRUFBQTs7QUFuSC9FO01Bc0hNLDhCQUEwQjtNQUUxQix1QkFBdUI7TUFDdkIsMERBQTBELEVBQUE7O0FBekhoRTtRQTRIUSwwSEFBMEg7UUFDMUgsWUFBWTtRQUNaLDhCQUFzQjtRQUF0QiwyQkFBc0I7UUFBdEIsc0JBQXNCLEVBQUE7O0FBOUg5QjtVQWlJVSxrQkFBa0IsRUFBQTs7QUFqSTVCO1FBc0lRLGNBQWM7UUFDZCx1Q0FBdUM7UUFDdkMsOENBQThDO1FBQzlDLGtGQUFrRjtRQUNsRixlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBM0kzQztJQWlKSSwyRUFBMkUsRUFBQTs7QUFqSi9FO01Bb0pNLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBOztBQXRKbEI7UUF5SlEsZUFBZTtRQUNmLG1DQUFtQyxFQUFBOztBQTFKM0M7VUE2SlUsd0NBQXdDLEVBQUE7O0FBN0psRDtJQW9LSSwyRUFBMkUsRUFBQTs7QUFwSy9FO01BdUtNLDhCQUEwQjtNQUUxQiw4QkFBOEI7TUFDOUIsbUJBQW1CLEVBQUE7O0FBMUt6Qjs7UUE4S1EsZUFBZTtRQUNmLG1DQUFtQztRQUNuQyxjQUFjO1FBQ2QsT0FBTztRQUNQLGFBQWEsRUFBQTs7QUFsTHJCO1FBc0xRLG1DQUFtQztRQUNuQywyQkFBMkIsRUFBQTs7QUF2TG5DO1FBMkxRLHdCQUF3QjtRQUN4Qix5QkFBeUIsRUFBQTs7QUE1TGpDO01BaU1NLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLXN0YXRlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcjogMnB4O1xuICAtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcjogNHB4O1xuXG4gIC0tcGFnZS1jb2xvcjogI2Q5NDUzYTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ucmVhbC1zdGF0ZS1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLmltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLmJvb2ttYXJrLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5kZXRhaWxzLXByaWNlIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5wcmljZS1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtYWRkcmVzcyB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuXG4gICAgICAmICsgLmRldGFpbHMtYWRkcmVzcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICYgKyAuYWNjb21tb2RhdGlvbi1yb3cge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIH1cblxuICAgICAgLmljb24td3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmFjY29tbW9kYXRpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgfVxuXG4gICAgICAuYWNjb21tb2RhdGlvbi1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG5cbiAgICAgIC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvY2F0aW9uLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5sb2NhdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5kZXRhaWwtdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5sb2NhdGlvbi1hZGRyZXNzIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgfVxuICB9XG5cbiAgLmFtZW5pdGllcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuYW1lbml0aWVzLXRhZ3Mge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgKiAtMSk7XG5cbiAgICAgIC50YWctd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgMHB4O1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFtZW5pdHktdGFnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2FmZXR5LWZlYXR1cmVzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5mZWF0dXJlcy1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLmZlYXR1cmUtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG5cbiAgICAgICAgJiArIC5mZWF0dXJlLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXZhaWxhYmlsaXR5LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5hdmFpbGFiaWxpdHktcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbixcbiAgICAgIC5hdmFpbGFiaWxpdHktdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5hdmFpbGFiaWxpdHktdmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvb2stbm93LWJ0biB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/real-state/details/styles/real-state-details.shell.scss":
/*!*************************************************************************!*\
  !*** ./src/app/real-state/details/styles/real-state-details.shell.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58; }\n\napp-image-shell.details-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.details-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 18px;\n  max-width: 100px;\n  min-width: 50px; }\n\n.details-price app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.details-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%; }\n\n.details-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.details-address + .details-address > app-text-shell {\n  max-width: 80%; }\n\n.details-address + .details-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px; }\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.accommodation-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%; }\n\n.location-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.amenity-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px; }\n\n.amenity-tag > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.feature-item > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 40%; }\n\n.feature-item > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.availability-description > app-text-shell,\n.availability-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 80%; }\n\n.availability-description > app-text-shell.text-loaded,\n  .availability-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLXN0YXRlLWRldGFpbHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFjO0VBQ2QsNEJBQWtCLEVBQUE7O0FBVXBCO0VBQ0UsbUVBQWlDO0VBQ2pDLDhEQUE0QixFQUFBOztBQUc5QjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFKakI7SUFPSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFFSSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFKbEI7SUFPTSxrQkFBa0IsRUFBQTs7QUFQeEI7RUFZSSxjQUFjLEVBQUE7O0FBWmxCO0lBZU0sa0JBQWtCLEVBQUE7O0FBS3hCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QixFQUFBOztBQUczQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGNBQWMsRUFBQTs7QUFJbEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFIaEI7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBOztBQUlsQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUhoQjtJQU1JLGtCQUFrQixFQUFBOztBQUl0Qjs7RUFHSSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFMbEI7O0lBUU0sY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1zdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLXN0YXRlLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uZGV0YWlscy1wcmljZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uZGV0YWlscy1hZGRyZXNzIHtcbiAgJiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgICBtYXgtd2lkdGg6IDYwJTtcblxuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIH1cbiAgfVxuXG4gICYgKyAuZGV0YWlscy1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAgIG1heC13aWR0aDogODAlO1xuXG4gICAgJi50ZXh0LWxvYWRlZCB7XG4gICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5hbWVuaXR5LXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLmZlYXR1cmUtaXRlbSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbixcbi5hdmFpbGFiaWxpdHktdmFsdWUge1xuICAmID4gYXBwLXRleHQtc2hlbGwge1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1pbi13aWR0aDogODAlO1xuXG4gICAgJi50ZXh0LWxvYWRlZCB7XG4gICAgICBtaW4td2lkdGg6IDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
//# sourceMappingURL=real-state-details-real-state-details-module.js.map