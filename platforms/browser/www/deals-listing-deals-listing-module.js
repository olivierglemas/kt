(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deals-listing-deals-listing-module"],{

/***/ "./src/app/deals/listing/deals-listing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.module.ts ***!
  \*******************************************************/
/*! exports provided: DealsListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingPageModule", function() { return DealsListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _deals_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deals-listing.page */ "./src/app/deals/listing/deals-listing.page.ts");
/* harmony import */ var _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deals-listing.resolver */ "./src/app/deals/listing/deals-listing.resolver.ts");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../deals.service */ "./src/app/deals/deals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: _deals_listing_page__WEBPACK_IMPORTED_MODULE_8__["DealsListingPage"],
        resolve: {
            data: _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["DealsListingResolver"]
        }
    }
];
var DealsListingPageModule = /** @class */ (function () {
    function DealsListingPageModule() {
    }
    DealsListingPageModule = __decorate([
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
                _deals_listing_page__WEBPACK_IMPORTED_MODULE_8__["DealsListingPage"]
            ],
            providers: [
                _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["DealsListingResolver"],
                _deals_service__WEBPACK_IMPORTED_MODULE_10__["DealsService"]
            ]
        })
    ], DealsListingPageModule);
    return DealsListingPageModule;
}());



/***/ }),

/***/ "./src/app/deals/listing/deals-listing.page.html":
/*!*******************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Deals Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"deals-listing-content\">\n  <ng-container *ngIf=\"listing?.items\">\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\" [ngClass]=\"{'ended': ((item.expirationDate | appTimeDifference) < 0), 'imminent-end': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2), 'ends-soon': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) > 2 && (item.expirationDate | appTimeDifference) < 10), 'distant-end': ((item.expirationDate | appTimeDifference) >= 10)}\">\n      <ion-row class=\"top-row\">\n        <ion-col class=\"logo-col\" size=\"6\">\n          <app-aspect-ratio [ratio]=\"{w: 128, h: 32}\">\n            <app-image-shell [src]=\"item.logo\" [alt]=\"'deals logo'\" class=\"deal-logo\" animation=\"spinner\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col *ngIf=\"((item.expirationDate | appTimeDifference) > 0)\" class=\"call-to-action-col\">\n          <ion-button class=\"claim-button\" expand=\"block\" color=\"claim\" [routerLink]=\"['/app/categories/deals/', item.slug]\">\n            <span class=\"button-cta\">CLAIM</span>\n            <ion-icon slot=\"end\" name=\"ios-arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col *ngIf=\"((item.expirationDate | appTimeDifference) < 0)\" class=\"call-to-action-col\">\n          <span class=\"expired-cta\">EXPIRED</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"middle-row\">\n        <ion-col class=\"info-col\">\n          <h4 class=\"item-name\">\n            <a class=\"name-anchor\" [routerLink]=\"['/app/categories/deals/', item.slug]\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.name\"></app-text-shell>\n            </a>\n          </h4>\n          <p class=\"item-description\">\n            <app-text-shell animation=\"bouncing\" lines=\"3\" [data]=\"item.description\"></app-text-shell>\n          </p>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button class=\"bookmark-button\" expand=\"block\" fill=\"clear\" color=\"claim\">\n            <ion-icon slot=\"icon-only\" name=\"pricetag\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"bottom-row\">\n        <ion-col class=\"code-wrapper\">\n          <span class=\"code-cta\">Use this code:</span>\n          <span class=\"item-code\" [ngClass]=\"{'expired': ((item.expirationDate | appTimeDifference) < 0)}\">\n            <app-text-shell [data]=\"item.code\"></app-text-shell>\n          </span>\n        </ion-col>\n        <ion-col class=\"time-left-wrapper\" size=\"5\" [ngClass]=\"{'countdown-active': ((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2)}\">\n          <span class=\"expiration-cta\">DEAL {{ ((item.expirationDate | appTimeDifference) < 0) ? 'EXPIRED' : 'EXPIRES IN' }}:</span>\n          <ng-container *ngIf=\"((item.expirationDate | appTimeDifference) < 0 || (item.expirationDate | appTimeDifference) > 2)\">\n            <span class=\"item-time-left\">\n              <app-text-shell [data]=\"(item.expirationDate | appTimeAgo)\"></app-text-shell>\n            </span>\n          </ng-container>\n          <ng-container *ngIf=\"((item.expirationDate | appTimeDifference) > 0 && (item.expirationDate | appTimeDifference) <= 2)\">\n            <ion-row class=\"countdown-wrapper\">\n              <app-countdown-timer class=\"item-countdown\" fill=\"inner-time\" [end]=\"item.expirationDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n            </ion-row>\n          </ng-container>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/deals/listing/deals-listing.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.page.ts ***!
  \*****************************************************/
/*! exports provided: DealsListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingPage", function() { return DealsListingPage; });
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


var DealsListingPage = /** @class */ (function () {
    function DealsListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(DealsListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    DealsListingPage.prototype.ngOnInit = function () {
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
    ], DealsListingPage.prototype, "isShell", null);
    DealsListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deals-listing',
            template: __webpack_require__(/*! ./deals-listing.page.html */ "./src/app/deals/listing/deals-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/deals-listing.page.scss */ "./src/app/deals/listing/styles/deals-listing.page.scss"), __webpack_require__(/*! ./styles/deals-listing.shell.scss */ "./src/app/deals/listing/styles/deals-listing.shell.scss"), __webpack_require__(/*! ./styles/deals-listing.ios.scss */ "./src/app/deals/listing/styles/deals-listing.ios.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DealsListingPage);
    return DealsListingPage;
}());



/***/ }),

/***/ "./src/app/deals/listing/deals-listing.resolver.ts":
/*!*********************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.resolver.ts ***!
  \*********************************************************/
/*! exports provided: DealsListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingResolver", function() { return DealsListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deals.service */ "./src/app/deals/deals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DealsListingResolver = /** @class */ (function () {
    function DealsListingResolver(dealsService) {
        this.dealsService = dealsService;
    }
    DealsListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.dealsService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    DealsListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"]])
    ], DealsListingResolver);
    return DealsListingResolver;
}());



/***/ }),

/***/ "./src/app/deals/listing/styles/deals-listing.ios.scss":
/*!*************************************************************!*\
  !*** ./src/app/deals/listing/styles/deals-listing.ios.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.plt-mobile.ios) .claim-button {\n  height: 2.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5pb3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLmlvcykge1xuICAvLyBDdXN0b20gcGxhdGZvcm0gc3R5bGVzIGhlcmVcbiAgLmNsYWltLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjJlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/deals/listing/styles/deals-listing.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/deals/listing/styles/deals-listing.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);\n  --page-deal-code-height: 30px;\n  --page-countdown-gutter: 3px;\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-deal-border-color: var(--ion-color-light-shade);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E; }\n  :host .ion-color-claim {\n    --ion-color-base: var(--ion-color-claim) !important;\n    --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n    --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n    --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n    --ion-color-shade: var(--ion-color-claim-shade) !important;\n    --ion-color-tint: var(--ion-color-claim-tint) !important; }\n  .deals-listing-content {\n  --background: var(--page-background); }\n  .listing-item {\n  background-color: var(--ion-color-lightest);\n  margin: var(--page-margin);\n  border-radius: var(--app-fair-radius);\n  box-shadow: 1px 1px 4px 1px var(--page-item-shadow-color);\n  border-bottom-style: solid;\n  border-bottom-width: calc((var(--page-margin) / 2) * 3);\n  border-bottom-color: var(--page-deal-border-color); }\n  .listing-item.ended {\n    --page-deal-color: var(--page-expired-color);\n    --page-deal-border-color: var(--page-expired-color);\n    border-bottom-style: none; }\n  .listing-item.imminent-end {\n    --page-deal-color: var(--page-ends-soon-color);\n    --page-deal-border-color: var(--page-distant-end-color); }\n  .listing-item.ends-soon {\n    --page-deal-color: var(--page-ends-soon-color);\n    --page-deal-border-color: var(--page-ends-soon-color);\n    border-bottom-style: none; }\n  .listing-item.distant-end {\n    --page-deal-color: var(--page-distant-end-color);\n    --page-deal-border-color: var(--page-distant-end-color);\n    border-bottom-style: none; }\n  .listing-item .top-row {\n    --ion-grid-column-padding: 0px;\n    border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n    padding: calc(var(--page-margin) / 2);\n    justify-content: space-between;\n    align-items: center; }\n  .listing-item .top-row .logo-col {\n      align-self: center; }\n  .listing-item .top-row .call-to-action-col {\n      flex-grow: 0; }\n  .listing-item .top-row .call-to-action-col .expired-cta {\n        color: var(--page-expired-color);\n        font-size: 16px;\n        font-weight: 600;\n        letter-spacing: 0.8px; }\n  .listing-item .top-row .call-to-action-col .claim-button {\n        --box-shadow: none;\n        --border-radius: var(--app-fair-radius);\n        margin: 0px; }\n  .listing-item .top-row .call-to-action-col .claim-button:focus {\n          outline: none; }\n  .listing-item .top-row .call-to-action-col .claim-button .button-cta {\n          display: block;\n          line-height: 18px;\n          font-size: 16px;\n          font-weight: 600; }\n  .listing-item .top-row .call-to-action-col .claim-button ion-icon {\n          font-size: 18px; }\n  .listing-item .middle-row {\n    --ion-grid-column-padding: 0px;\n    padding: calc(var(--page-margin) / 2);\n    padding-bottom: var(--page-margin); }\n  .listing-item .middle-row .info-col {\n      padding-right: calc(var(--page-margin) / 2); }\n  .listing-item .middle-row .item-name {\n      margin: 0px;\n      margin-bottom: calc(var(--page-margin) / 2);\n      color: var(--ion-color-dark-tint);\n      font-size: 16px; }\n  .listing-item .middle-row .item-name .name-anchor {\n        display: block;\n        text-decoration: none; }\n  .listing-item .middle-row .item-description {\n      margin: 0px;\n      color: var(--ion-color-medium-tint);\n      font-size: 14px; }\n  .listing-item .middle-row .bookmark-button {\n      --padding-start: 5px;\n      --padding-end: 5px;\n      margin: 0px;\n      font-size: 16px; }\n  .listing-item .bottom-row {\n    --ion-grid-column-padding: 0px;\n    padding: 0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);\n    justify-content: space-between; }\n  .listing-item .bottom-row .code-wrapper {\n      max-width: -webkit-fit-content;\n      max-width: -moz-fit-content;\n      max-width: fit-content; }\n  .listing-item .bottom-row .code-wrapper .code-cta {\n        font-size: 12px;\n        font-weight: 500;\n        margin-bottom: 5px;\n        display: block; }\n  .listing-item .bottom-row .code-wrapper .item-code {\n        height: var(--page-deal-code-height);\n        text-transform: uppercase;\n        padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n        border: 2px solid var(--page-color);\n        font-size: 12px;\n        font-weight: 500;\n        line-height: 1;\n        border-radius: calc(var(--page-deal-code-height) / 2);\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n  .listing-item .bottom-row .code-wrapper .item-code.expired {\n          border-color: var(--page-expired-color);\n          color: var(--page-expired-color);\n          opacity: 0.6; }\n  .listing-item .bottom-row .time-left-wrapper {\n      flex-shrink: 0;\n      max-width: -webkit-fit-content;\n      max-width: -moz-fit-content;\n      max-width: fit-content;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: flex-end; }\n  .listing-item .bottom-row .time-left-wrapper .expiration-cta {\n        font-size: 12px;\n        font-weight: 500;\n        margin-bottom: 5px;\n        display: block;\n        text-transform: uppercase;\n        text-align: end; }\n  .listing-item .bottom-row .time-left-wrapper:not(.countdown-active) .item-time-left {\n        color: var(--page-deal-color);\n        font-size: 14px;\n        font-weight: 500;\n        display: block;\n        text-align: end; }\n  .listing-item .bottom-row .time-left-wrapper.countdown-active {\n        display: block;\n        position: relative; }\n  .listing-item .bottom-row .time-left-wrapper.countdown-active .countdown-wrapper {\n          width: 100%;\n          display: flex;\n          justify-content: flex-end;\n          position: absolute;\n          right: 0px; }\n  .listing-item .bottom-row .time-left-wrapper.countdown-active .countdown-wrapper app-countdown-timer.item-countdown {\n            --countdown-time-margin: 0px;\n            --countdown-time-padding: 0px;\n            --countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;\n            --countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n            --countdown-fill-border: none;\n            --countdown-fill-border-radius: var(--app-narrow-radius);\n            --countdown-fill-background: var(--ion-color-lightest);\n            --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n            --countdown-value-color: var(--ion-color-darkest);\n            --countdown-unit-color: var(--ion-color-medium-shade);\n            --countdown-time-flex-direction: column;\n            font-weight: 500;\n            font-size: 14px;\n            margin-right: calc(var(--page-countdown-gutter) * -1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCIvVXNlcnMvb2xpdmllcmdsZW1hcy9Eb2N1bWVudHMvZ3VpZGVBT1RXL2lvbmljNC1mdWxsLXN0YXJ0ZXItYXBwLTEuMi9zcmMvdGhlbWUvbWl4aW5zL2lvbi1jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0NBQWM7RUFDZCw4Q0FBa0I7RUFFbEIsMkVBQW1DO0VBQ25DLDZEQUF5QjtFQUN6Qiw2QkFBd0I7RUFDeEIsNEJBQXdCO0VBRXhCLGtEQUFxQjtFQUNyQiwrQkFBdUI7RUFDdkIsaUNBQXlCO0VBRXpCLDBDQUFrQjtFQUNsQixzREFBeUI7RUFFekIscUJBQWE7RUFJWCwwQkFBa0I7RUFDbEIsa0NBQXNCO0VBQ3RCLG1DQUEyQjtFQUMzQiwyQ0FBK0I7RUFDL0IsZ0NBQXdCO0VBQ3hCLCtCQUF1QixFQUFBO0VBekIzQjtJQ0FJLG1EQUFpQjtJQUNqQiwyREFBcUI7SUFDckIsZ0VBQXFCO0lBQ3JCLHdFQUF5QjtJQUN6QiwwREFBa0I7SUFDbEIsd0RBQWlCLEVBQUE7RUR5QnJCO0VBQ0Usb0NBQWEsRUFBQTtFQUdmO0VBcUJFLDJDQUEyQztFQUMzQywwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLHlEQUF5RDtFQUN6RCwwQkFBMEI7RUFDMUIsdURBQXVEO0VBQ3ZELGtEQUFrRCxFQUFBO0VBM0JwRDtJQUVJLDRDQUFrQjtJQUNsQixtREFBeUI7SUFDekIseUJBQXlCLEVBQUE7RUFKN0I7SUFPSSw4Q0FBa0I7SUFDbEIsdURBQXlCLEVBQUE7RUFSN0I7SUFXSSw4Q0FBa0I7SUFDbEIscURBQXlCO0lBQ3pCLHlCQUF5QixFQUFBO0VBYjdCO0lBZ0JJLGdEQUFrQjtJQUNsQix1REFBeUI7SUFDekIseUJBQXlCLEVBQUE7RUFsQjdCO0lBOEJJLDhCQUEwQjtJQUUxQiw4REFBNkQ7SUFDN0QscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQW5DdkI7TUFzQ00sa0JBQWtCLEVBQUE7RUF0Q3hCO01BMENNLFlBQVksRUFBQTtFQTFDbEI7UUE2Q1EsZ0NBQWdDO1FBQ2hDLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIscUJBQXFCLEVBQUE7RUFoRDdCO1FBb0RRLGtCQUFhO1FBQ2IsdUNBQWdCO1FBRWhCLFdBQVcsRUFBQTtFQXZEbkI7VUEwRFUsYUFBYSxFQUFBO0VBMUR2QjtVQThEVSxjQUFjO1VBQ2QsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixnQkFBZ0IsRUFBQTtFQWpFMUI7VUFxRVUsZUFBZSxFQUFBO0VBckV6QjtJQTRFSSw4QkFBMEI7SUFFMUIscUNBQXFDO0lBQ3JDLGtDQUFrQyxFQUFBO0VBL0V0QztNQWtGTSwyQ0FBMkMsRUFBQTtFQWxGakQ7TUFzRk0sV0FBVztNQUNkLDJDQUEyQztNQUN4QyxpQ0FBaUM7TUFDakMsZUFBZSxFQUFBO0VBekZyQjtRQTRGUSxjQUFjO1FBQ2QscUJBQXFCLEVBQUE7RUE3RjdCO01Ba0dNLFdBQVc7TUFDWCxtQ0FBbUM7TUFDbkMsZUFBZSxFQUFBO0VBcEdyQjtNQXdHTSxvQkFBZ0I7TUFDaEIsa0JBQWM7TUFFZCxXQUFXO01BQ1gsZUFBZSxFQUFBO0VBNUdyQjtJQWlISSw4QkFBMEI7SUFFMUIsc0VBQXNFO0lBQ3RFLDhCQUE4QixFQUFBO0VBcEhsQztNQXVITSw4QkFBc0I7TUFBdEIsMkJBQXNCO01BQXRCLHNCQUFzQixFQUFBO0VBdkg1QjtRQTBIUSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixjQUFjLEVBQUE7RUE3SHRCO1FBaUlRLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsa0VBQWtFO1FBQ2xFLG1DQUFtQztRQUNuQyxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxxREFBcUQ7UUFDckQsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBQTtFQTNJL0I7VUE4SVUsdUNBQXVDO1VBQ3ZDLGdDQUFnQztVQUNoQyxZQUFZLEVBQUE7RUFoSnRCO01Bc0pNLGNBQWM7TUFDZCw4QkFBc0I7TUFBdEIsMkJBQXNCO01BQXRCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLDhCQUE4QjtNQUM5QixxQkFBcUIsRUFBQTtFQTNKM0I7UUE4SlEsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixlQUFlLEVBQUE7RUFuS3ZCO1FBd0tVLDZCQUE2QjtRQUM3QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlLEVBQUE7RUE1S3pCO1FBaUxRLGNBQWM7UUFDZCxrQkFBa0IsRUFBQTtFQWxMMUI7VUFxTFUsV0FBVztVQUNYLGFBQWE7VUFDYix5QkFBeUI7VUFFekIsa0JBQWtCO1VBQ2xCLFVBQVUsRUFBQTtFQTFMcEI7WUE2TFksNEJBQXdCO1lBQ3hCLDZCQUF5QjtZQUN6Qiw0RkFBOEI7WUFDOUIseUZBQStCO1lBQy9CLDZCQUF3QjtZQUN4Qix3REFBK0I7WUFDL0Isc0RBQTRCO1lBQzVCLGdGQUF3QjtZQUN4QixpREFBd0I7WUFDeEIscURBQXVCO1lBQ3ZCLHVDQUFnQztZQUVoQyxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLHFEQUFxRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lvbi1jb2xvclwiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjIpO1xuICAtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodDogMzBweDtcbiAgLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXI6IDNweDtcblxuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgLS1wYWdlLWVuZHMtc29vbi1jb2xvcjogI0ZGQUI2QjtcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xuXG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIC0tcGFnZS1jb2xvcjogIzcwREY3MDtcblxuICAvLyBBZGQgY3VzdG9tIGNvbG9ycyB0byB1c2Ugd2l0aCBbY29sb3JdIHByb3BlcnR5XG4gIEBpbmNsdWRlIGlvbi1jb2xvcignY2xhaW0nKSB7XG4gICAgLS1pb24tY29sb3ItY2xhaW06ICM3MERGNzA7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XG4gIH1cbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZGVhbHMtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgJi5lbmRlZCB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cbiAgJi5pbW1pbmVudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgfVxuICAmLmVuZHMtc29vbiB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICB9XG4gICYuZGlzdGFudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHZhcigtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcik7XG5cbiAgLnRvcC1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sb2dvLWNvbCB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgICBmbGV4LWdyb3c6IDA7XG5cbiAgICAgIC5leHBpcmVkLWN0YSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICAgIH1cblxuICAgICAgLmNsYWltLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuXG4gICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLWN0YSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1pZGRsZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5pbmZvLWNvbCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5pdGVtLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmJvb2ttYXJrLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcblxuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLmJvdHRvbS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmNvZGUtd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAuY29kZS1jdGEge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWNvZGUge1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KSAvIDIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmLmV4cGlyZWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZS1sZWZ0LXdyYXBwZXIge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgIC5leHBpcmF0aW9uLWN0YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCguY291bnRkb3duLWFjdGl2ZSkge1xuICAgICAgICAuaXRlbS10aW1lLWxlZnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmNvdW50ZG93bi1hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5jb3VudGRvd24td3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIC8vIFNldCBwb3NpdGlvbiBhYnNvbHV0ZSBzbyB0aGF0IHRoZSBwYXJlbnQgZG9lbid0IGNvdW50IHRoZSBoZWlnaHQgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgICAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIDBweDtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgKiAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gaW9uLWNvbG9yKCRjb2xvcikge1xuICBAY29udGVudDtcblxuICAuaW9uLWNvbG9yLSN7JGNvbG9yfSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1zaGFkZSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXRpbnQpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/deals/listing/styles/deals-listing.shell.scss":
/*!***************************************************************!*\
  !*** ./src/app/deals/listing/styles/deals-listing.shell.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112; }\n\napp-image-shell.deal-logo {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px; }\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px; }\n\n.item-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px; }\n\n.item-code > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 60px; }\n\n.item-code > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.item-time-left > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 60px; }\n\n.item-time-left > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQWM7RUFDZCw4QkFBa0IsRUFBQTs7QUFVcEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCO0VBQzVCLGdDQUEyQixFQUFBOztBQUc3QjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBSGpCO0lBTUksY0FBYyxFQUFBOztBQUlsQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjNzBERjcwO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMTEyLDIyMywxMTI7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGVhbC1sb2dvIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAxOHB4O1xufVxuXG4uaXRlbS1uYW1lICBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tY29kZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLml0ZW0tdGltZS1sZWZ0ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNjBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIl19 */"

/***/ })

}]);
//# sourceMappingURL=deals-listing-deals-listing-module.js.map