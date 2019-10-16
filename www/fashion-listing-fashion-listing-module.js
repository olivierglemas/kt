(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-listing-fashion-listing-module"],{

/***/ "./src/app/fashion/listing/fashion-listing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.module.ts ***!
  \***********************************************************/
/*! exports provided: FashionListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingPageModule", function() { return FashionListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fashion_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fashion-listing.page */ "./src/app/fashion/listing/fashion-listing.page.ts");
/* harmony import */ var _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fashion-listing.resolver */ "./src/app/fashion/listing/fashion-listing.resolver.ts");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _fashion_listing_page__WEBPACK_IMPORTED_MODULE_7__["FashionListingPage"],
        resolve: {
            data: _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["FashionListingResolver"]
        }
    }
];
var FashionListingPageModule = /** @class */ (function () {
    function FashionListingPageModule() {
    }
    FashionListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [_fashion_listing_page__WEBPACK_IMPORTED_MODULE_7__["FashionListingPage"]],
            providers: [
                _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["FashionListingResolver"],
                _fashion_service__WEBPACK_IMPORTED_MODULE_9__["FashionService"]
            ]
        })
    ], FashionListingPageModule);
    return FashionListingPageModule;
}());



/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.page.html":
/*!***********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fashion Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"fashion-listing-content\">\n  <ng-container *ngIf=\"listing?.items\">\n    <ion-row class=\"items-row\">\n      <ion-col size=\"6\" class=\"listing-item\" *ngFor=\"let item of listing.items\">\n        <div class=\"item-image-wrapper\">\n          <a class=\"image-anchor\" [routerLink]=\"['/app/categories/fashion/', item.slug]\">\n            <app-aspect-ratio [ratio]=\"{w: 3, h: 4}\">\n              <app-image-shell class=\"item-image\" animation=\"spinner\" [src]=\"item.image\" [alt]=\"'product image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </a>\n        </div>\n        <ion-row class=\"item-body\">\n          <ion-col size=\"12\" class=\"main-info\">\n            <h4 class=\"item-name\">\n              <a class=\"name-anchor\" [routerLink]=\"['/app/categories/fashion/', item.slug]\">\n                <app-text-shell animation=\"gradient\" [data]=\"item.name\"></app-text-shell>\n              </a>\n            </h4>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-row class=\"secondary-info\">\n              <ion-col class=\"price-col\">\n                <span class=\"item-sale-price\">\n                  <app-text-shell animation=\"gradient\" [data]=\"item.salePrice | currency\"></app-text-shell>\n                </span>\n              </ion-col>\n              <ng-container *ngIf=\"item.price != '0'\">\n                <ion-col class=\"separator\">\n                </ion-col>\n                <ion-col class=\"price-col\">\n                  <span class=\"item-original-price\">\n                    <app-text-shell animation=\"gradient\" [data]=\"item.price | currency\"></app-text-shell>\n                  </span>\n                </ion-col>\n              </ng-container>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.page.ts ***!
  \*********************************************************/
/*! exports provided: FashionListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingPage", function() { return FashionListingPage; });
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


var FashionListingPage = /** @class */ (function () {
    function FashionListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(FashionListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FashionListingPage.prototype.ngOnInit = function () {
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
    ], FashionListingPage.prototype, "isShell", null);
    FashionListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fashion-listing',
            template: __webpack_require__(/*! ./fashion-listing.page.html */ "./src/app/fashion/listing/fashion-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/fashion-listing.page.scss */ "./src/app/fashion/listing/styles/fashion-listing.page.scss"), __webpack_require__(/*! ./styles/fashion-listing.shell.scss */ "./src/app/fashion/listing/styles/fashion-listing.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FashionListingPage);
    return FashionListingPage;
}());



/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.resolver.ts ***!
  \*************************************************************/
/*! exports provided: FashionListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingResolver", function() { return FashionListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FashionListingResolver = /** @class */ (function () {
    function FashionListingResolver(fashionService) {
        this.fashionService = fashionService;
    }
    FashionListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.fashionService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    FashionListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_fashion_service__WEBPACK_IMPORTED_MODULE_1__["FashionService"]])
    ], FashionListingResolver);
    return FashionListingResolver;
}());



/***/ }),

/***/ "./src/app/fashion/listing/styles/fashion-listing.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/fashion/listing/styles/fashion-listing.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f; }\n\n.fashion-listing-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.items-row {\n  --ion-grid-column-padding: 0; }\n\n.items-row .listing-item {\n    margin-bottom: calc(var(--page-margin) * 2); }\n\n.items-row .listing-item:nth-child(odd) {\n      padding-right: var(--page-items-gutter); }\n\n.items-row .listing-item:nth-child(even) {\n      padding-left: var(--page-items-gutter); }\n\n.items-row .listing-item .item-image-wrapper {\n      border: 1px solid var(--ion-color-light-shade); }\n\n.items-row .listing-item .item-image-wrapper .image-anchor {\n        display: block; }\n\n.items-row .listing-item .item-body {\n      --ion-grid-column-padding: 0px;\n      padding: 5px 5px 0px;\n      text-align: center; }\n\n.items-row .listing-item .item-body .main-info {\n        margin-bottom: calc(var(--page-margin) / 2); }\n\n.items-row .listing-item .item-body .main-info .item-name {\n          margin: 0px;\n          font-size: 14px;\n          font-weight: 400;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden; }\n\n.items-row .listing-item .item-body .main-info .item-name .name-anchor {\n            color: var(--ion-color-primary);\n            display: block;\n            text-decoration: none; }\n\n.items-row .listing-item .item-body .secondary-info {\n        align-items: center; }\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child {\n          padding-right: calc(var(--page-margin) / 2);\n          text-align: right; }\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child:last-child {\n            text-align: center; }\n\n.items-row .listing-item .item-body .secondary-info .price-col:last-child {\n          padding-left: calc(var(--page-margin) / 2);\n          text-align: left; }\n\n.items-row .listing-item .item-body .secondary-info .separator {\n          max-width: 0px;\n          border-right: solid 2px var(--ion-color-light-shade);\n          align-self: stretch; }\n\n.items-row .listing-item .item-body .secondary-info .item-sale-price {\n          display: block;\n          font-weight: 400;\n          color: var(--page-color);\n          font-size: 16px; }\n\n.items-row .listing-item .item-body .secondary-info .item-original-price {\n          display: block;\n          text-decoration: line-through;\n          color: var(--ion-color-medium-shade);\n          font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZmFzaGlvbi9saXN0aW5nL3N0eWxlcy9mYXNoaW9uLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQWM7RUFDZCx3Q0FBa0I7RUFFbEIsaURBQW9CO0VBQ3BCLHFCQUFhLEVBQUE7O0FBSWY7RUFDRSxvQ0FBYTtFQUNiLG1DQUFnQjtFQUNoQixpQ0FBYztFQUNkLGlDQUFjO0VBQ2Qsb0NBQWlCLEVBQUE7O0FBR25CO0VBQ0UsNEJBQTBCLEVBQUE7O0FBRDVCO0lBSUksMkNBQTJDLEVBQUE7O0FBSi9DO01BT00sdUNBQXVDLEVBQUE7O0FBUDdDO01BV00sc0NBQXNDLEVBQUE7O0FBWDVDO01BZU0sOENBQThDLEVBQUE7O0FBZnBEO1FBa0JRLGNBQWMsRUFBQTs7QUFsQnRCO01BdUJNLDhCQUEwQjtNQUUxQixvQkFBb0I7TUFDcEIsa0JBQWtCLEVBQUE7O0FBMUJ4QjtRQTZCUSwyQ0FBMkMsRUFBQTs7QUE3Qm5EO1VBZ0NVLFdBQVc7VUFDWCxlQUFlO1VBQ2YsZ0JBQWdCO1VBRWhCLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsZ0JBQWdCLEVBQUE7O0FBdEMxQjtZQXlDWSwrQkFBK0I7WUFDL0IsY0FBYztZQUNkLHFCQUFxQixFQUFBOztBQTNDakM7UUFpRFEsbUJBQW1CLEVBQUE7O0FBakQzQjtVQXFEWSwyQ0FBMkM7VUFDM0MsaUJBQWlCLEVBQUE7O0FBdEQ3QjtZQXlEYyxrQkFBa0IsRUFBQTs7QUF6RGhDO1VBOERZLDBDQUEwQztVQUMxQyxnQkFBZ0IsRUFBQTs7QUEvRDVCO1VBb0VVLGNBQWM7VUFDZCxvREFBb0Q7VUFDcEQsbUJBQW1CLEVBQUE7O0FBdEU3QjtVQTBFVSxjQUFjO1VBQ2QsZ0JBQWdCO1VBQ2hCLHdCQUF3QjtVQUN4QixlQUFlLEVBQUE7O0FBN0V6QjtVQWlGVSxjQUFjO1VBQ2QsNkJBQTZCO1VBQzdCLG9DQUFvQztVQUNwQyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtaXRlbXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtY29sb3I6ICNjYjMyOGY7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmZhc2hpb24tbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLml0ZW1zLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG5cbiAgLmxpc3RpbmctaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1pdGVtcy1ndXR0ZXIpO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1pdGVtcy1ndXR0ZXIpO1xuICAgIH1cblxuICAgIC5pdGVtLWltYWdlLXdyYXBwZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAgICAgLmltYWdlLWFuY2hvciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWJvZHkge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLm1haW4taW5mbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2Vjb25kYXJ5LWluZm8ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5wcmljZS1jb2wge1xuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tc2FsZS1wcmljZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tb3JpZ2luYWwtcHJpY2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/fashion/listing/styles/fashion-listing.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fashion/listing/styles/fashion-listing.shell.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143; }\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.item-name app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px; }\n\n.item-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px; }\n\n.item-original-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZmFzaGlvbi9saXN0aW5nL3N0eWxlcy9mYXNoaW9uLWxpc3Rpbmcuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFjO0VBQ2QsNkJBQWtCLEVBQUE7O0FBVXBCO0VBQ0UsbUVBQWlDO0VBQ2pDLDhEQUE0QixFQUFBOztBQUc5QjtFQUNFLG9FQUFrQztFQUNsQywrREFBNkI7RUFDN0IsOEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usb0VBQWtDO0VBQ2xDLCtEQUE2QjtFQUM3Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxvRUFBa0M7RUFDbEMsK0RBQTZCO0VBQzdCLDhCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmFzaGlvbi9saXN0aW5nL3N0eWxlcy9mYXNoaW9uLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjY2IzMjhmO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjAzLDUwLDE0Mztcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLXNhbGUtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tb3JpZ2luYWwtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cbiJdfQ== */"

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
//# sourceMappingURL=fashion-listing-fashion-listing-module.js.map