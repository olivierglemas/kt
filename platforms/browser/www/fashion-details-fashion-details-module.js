(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-details-fashion-details-module"],{

/***/ "./src/app/fashion/details/fashion-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.module.ts ***!
  \***********************************************************/
/*! exports provided: FashionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsPageModule", function() { return FashionDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fashion_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fashion-details.page */ "./src/app/fashion/details/fashion-details.page.ts");
/* harmony import */ var _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fashion-details.resolver */ "./src/app/fashion/details/fashion-details.resolver.ts");
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
        component: _fashion_details_page__WEBPACK_IMPORTED_MODULE_7__["FashionDetailsPage"],
        resolve: {
            data: _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_8__["FashionDetailsResolver"]
        }
    }
];
var FashionDetailsPageModule = /** @class */ (function () {
    function FashionDetailsPageModule() {
    }
    FashionDetailsPageModule = __decorate([
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
                _fashion_details_page__WEBPACK_IMPORTED_MODULE_7__["FashionDetailsPage"]
            ],
            providers: [
                _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_8__["FashionDetailsResolver"],
                _fashion_service__WEBPACK_IMPORTED_MODULE_9__["FashionService"]
            ]
        })
    ], FashionDetailsPageModule);
    return FashionDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/fashion/details/fashion-details.page.html":
/*!***********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/fashion\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fashion Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"fashion-details-content\">\n  <ion-row class=\"slider-row\">\n    <ion-slides class=\"details-slides\" pager=\"true\" [options]=\"slidesOptions\">\n      <ion-slide class=\"\" *ngFor=\"let image of details?.showcaseImages\">\n        <ion-row class=\"slide-inner-row\">\n          <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"showcase-image\" [ngClass]=\"{'centered-image': (image.type === 'square'), 'fill-image': (image.type === 'fill')}\" [src]=\"image.source\">\n            <app-aspect-ratio [ratio]=\"{w:64, h:50}\">\n            </app-aspect-ratio>\n          </app-image-shell>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n  <div class=\"description-wrapper\">\n    <h3 class=\"details-name\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.name\"></app-text-shell>\n    </h3>\n    <span class=\"details-brand\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.brand\"></app-text-shell>\n    </span>\n    <span class=\"details-price\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.price | currency\"></app-text-shell>\n    </span>\n    <span class=\"details-sale-price\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.salePrice | currency\"></app-text-shell>\n    </span>\n  </div>\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\" class=\"aux-action-col\">\n      <ion-button class=\"size-chart-btn\" color=\"medium\" size=\"small\" fill=\"clear\">Size Chart</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"openColorChooser()\">Color</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"openSizeChooser()\">Size</ion-button>\n    </ion-col>\n    <ion-col size=\"12\" class=\"main-call-to-action-col\">\n      <ion-button class=\"add-to-cart-btn\" color=\"dark\" expand=\"block\" fill=\"solid\">Add to cart</ion-button>\n    </ion-col>\n  </ion-row>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">About me</h3>\n    <p class=\"details-description\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.description\" lines=\"5\"></app-text-shell>\n    </p>\n  </div>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">Looking after me</h3>\n    <p class=\"details-description\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.careInstructions\" lines=\"3\"></app-text-shell>\n    </p>\n  </div>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">Product code</h3>\n    <span class=\"details-description product-code\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.upc\"></app-text-shell>\n    </span>\n  </div>\n  <!-- Related Products -->\n  <div class=\"related-products-wrapper\" *ngIf=\"details?.relatedProducts && details.relatedProducts.length > 0\">\n    <h3 class=\"detail-alt-title\">Why Don't you try?</h3>\n    <ion-row class=\"related-products-list\">\n      <ion-col size=\"6\" class=\"related-product-item\" *ngFor=\"let relatedProduct of details?.relatedProducts\">\n        <div class=\"item-image-wrapper\">\n          <a class=\"image-anchor\">\n            <app-aspect-ratio [ratio]=\"{w: 3, h: 4}\">\n              <app-image-shell class=\"related-product-image\" animation=\"spinner\" [src]=\"relatedProduct.image\" [alt]=\"'related image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </a>\n        </div>\n        <div class=\"item-details-wrapper\">\n          <h4 class=\"item-name\">\n            <a class=\"name-anchor\">\n              <app-text-shell animation=\"gradient\" [data]=\"relatedProduct.name\"></app-text-shell>\n            </a>\n          </h4>\n          <span class=\"item-sale-price\">\n            <app-text-shell animation=\"gradient\" [data]=\"relatedProduct.salePrice | currency\"></app-text-shell>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fashion/details/fashion-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.page.ts ***!
  \*********************************************************/
/*! exports provided: FashionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsPage", function() { return FashionDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var FashionDetailsPage = /** @class */ (function () {
    function FashionDetailsPage(route, alertController) {
        this.route = route;
        this.alertController = alertController;
        this.colorVariants = [];
        this.sizeVariants = [];
        this.slidesOptions = {
            zoom: {
                toggle: false // Disable zooming to prevent weird double tap zomming on slide images
            }
        };
    }
    Object.defineProperty(FashionDetailsPage.prototype, "isShell", {
        get: function () {
            return (this.details && this.details.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FashionDetailsPage.prototype.ngOnInit = function () {
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
                                _this.colorVariants = _this.details.colorVariants
                                    .map(function (item) {
                                    return ({
                                        name: item.name,
                                        type: 'radio',
                                        label: item.name,
                                        value: item.value,
                                        checked: item.default
                                    });
                                });
                                _this.sizeVariants = _this.details.sizeVariants
                                    .map(function (item) {
                                    return ({
                                        name: item.name,
                                        type: 'radio',
                                        label: item.name,
                                        value: item.value,
                                        checked: item.default
                                    });
                                });
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
    FashionDetailsPage.prototype.openColorChooser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Color',
                            inputs: this.colorVariants,
                            cssClass: 'variant-alert color-chooser',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FashionDetailsPage.prototype.openSizeChooser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Size',
                            inputs: this.sizeVariants,
                            cssClass: 'variant-alert size-chooser',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function (selectedValue) {
                                        console.log('Selected Value', selectedValue);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-shell'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FashionDetailsPage.prototype, "isShell", null);
    FashionDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fashion-details',
            template: __webpack_require__(/*! ./fashion-details.page.html */ "./src/app/fashion/details/fashion-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/fashion-details.page.scss */ "./src/app/fashion/details/styles/fashion-details.page.scss"), __webpack_require__(/*! ./styles/fashion-details.shell.scss */ "./src/app/fashion/details/styles/fashion-details.shell.scss"), __webpack_require__(/*! ./styles/fashion-details.ios.scss */ "./src/app/fashion/details/styles/fashion-details.ios.scss"), __webpack_require__(/*! ./styles/fashion-details.md.scss */ "./src/app/fashion/details/styles/fashion-details.md.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], FashionDetailsPage);
    return FashionDetailsPage;
}());



/***/ }),

/***/ "./src/app/fashion/details/fashion-details.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.resolver.ts ***!
  \*************************************************************/
/*! exports provided: FashionDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsResolver", function() { return FashionDetailsResolver; });
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


var FashionDetailsResolver = /** @class */ (function () {
    function FashionDetailsResolver(fashionService) {
        this.fashionService = fashionService;
    }
    FashionDetailsResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.fashionService.getDetailsDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    FashionDetailsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_fashion_service__WEBPACK_IMPORTED_MODULE_1__["FashionService"]])
    ], FashionDetailsResolver);
    return FashionDetailsResolver;
}());



/***/ }),

/***/ "./src/app/fashion/details/styles/fashion-details.ios.scss":
/*!*****************************************************************!*\
  !*** ./src/app/fashion/details/styles/fashion-details.ios.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLmlvcy5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/fashion/details/styles/fashion-details.md.scss":
/*!****************************************************************!*\
  !*** ./src/app/fashion/details/styles/fashion-details.md.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLm1kLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/fashion/details/styles/fashion-details.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/fashion/details/styles/fashion-details.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 30px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-options-gutter: calc(var(--page-margin) / 2);\n  --page-related-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f; }\n\n.fashion-details-content {\n  --background: var(--page-background); }\n\n.fashion-details-content .slider-row .details-slides {\n    --bullet-background: var(--ion-color-dark-tint);\n    --bullet-background-active: var(--ion-color-dark-tint);\n    height: 100%;\n    width: 100%; }\n\n.fashion-details-content .slider-row .details-slides .slide-inner-row {\n      height: 100%;\n      width: 100%;\n      padding: 0px;\n      padding-bottom: var(--page-swiper-pagination-space); }\n\n.fashion-details-content .slider-row .showcase-image {\n    width: 100%; }\n\n.fashion-details-content .slider-row .showcase-image.centered-image {\n      background-size: auto;\n      background-position: center; }\n\n.fashion-details-content .description-wrapper {\n    padding: var(--page-margin) var(--page-margin) 0px; }\n\n.fashion-details-content .description-wrapper .details-name {\n      font-size: 18px;\n      font-weight: 500;\n      margin: 0px 0px 5px; }\n\n.fashion-details-content .description-wrapper .details-brand {\n      display: block;\n      text-transform: uppercase;\n      font-size: 14px;\n      font-weight: 400;\n      margin: 0px 0px var(--page-margin); }\n\n.fashion-details-content .description-wrapper .details-price {\n      font-size: 18px;\n      font-weight: 500;\n      margin: 0px;\n      color: var(--page-color);\n      display: inline-block; }\n\n.fashion-details-content .description-wrapper .details-sale-price {\n      color: var(--ion-color-medium-shade);\n      text-decoration: line-through;\n      display: inline-block;\n      margin-left: var(--page-margin);\n      font-size: 14px; }\n\n.fashion-details-content .details-purchase-options-row {\n    --ion-grid-column-padding: var(--page-options-gutter);\n    padding-top: 0px;\n    padding-left: calc(var(--page-margin) - var(--page-options-gutter));\n    padding-right: calc(var(--page-margin) - var(--page-options-gutter));\n    padding-bottom: calc(var(--page-margin) * 2); }\n\n.fashion-details-content .details-purchase-options-row .aux-action-col {\n      display: flex;\n      justify-content: flex-end;\n      padding-top: 0px;\n      padding-bottom: 0px; }\n\n.fashion-details-content .details-purchase-options-row .aux-action-col .size-chart-btn {\n        margin: 0px;\n        height: 25px; }\n\n.fashion-details-content .details-purchase-options-row .main-call-to-action-col {\n      padding-bottom: 0px; }\n\n.fashion-details-content .details-purchase-options-row .select-variant-btn {\n      margin: 0px; }\n\n.fashion-details-content .details-purchase-options-row .add-to-cart-btn {\n      margin: 0px;\n      margin-top: var(--page-margin); }\n\n.fashion-details-content .detail-title {\n    font-size: 16px;\n    font-weight: 500;\n    color: var(--ion-color-dark-tint);\n    margin: 0px;\n    margin-bottom: calc(var(--page-margin) / 2); }\n\n.fashion-details-content .details-description-wrapper {\n    padding-top: 0px;\n    padding-left: var(--page-margin);\n    padding-right: var(--page-margin);\n    padding-bottom: calc(var(--page-margin) * 2); }\n\n.fashion-details-content .details-description-wrapper .details-description {\n      margin: 0px;\n      line-height: 1.3;\n      font-size: 14px;\n      color: var(--ion-color-medium-shade); }\n\n.fashion-details-content .detail-alt-title {\n    text-align: center;\n    font-size: 18px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: var(--ion-color-dark-shade);\n    margin: 0px;\n    margin-bottom: var(--page-margin); }\n\n.fashion-details-content .related-products-wrapper {\n    padding-top: 0px;\n    padding-left: var(--page-margin);\n    padding-right: var(--page-margin);\n    padding-bottom: calc(var(--page-margin) * 2); }\n\n.fashion-details-content .related-products-wrapper .related-products-list {\n      --ion-grid-column-padding: 0px; }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item {\n        margin-bottom: calc(var(--page-margin) * 2); }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item:nth-child(odd) {\n          padding-right: var(--page-related-items-gutter); }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item:nth-child(even) {\n          padding-left: var(--page-related-items-gutter); }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-image-wrapper {\n          border: 1px solid var(--ion-color-light-shade); }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-image-wrapper .image-anchor {\n            display: block; }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-details-wrapper {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 5px 5px 0px; }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-name {\n          margin: 0px;\n          margin-bottom: calc(var(--page-margin) / 2);\n          font-size: 14px;\n          font-weight: 400;\n          text-align: center;\n          min-width: 90%;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden; }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-name .name-anchor {\n            color: var(--ion-color-dark-tint);\n            display: block;\n            text-decoration: none; }\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-sale-price {\n          display: block;\n          font-weight: 400;\n          color: var(--page-color);\n          font-size: 16px;\n          text-align: center;\n          min-width: 30%; }\n\n:host ::ng-deep .details-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2); }\n\n:host ::ng-deep .details-slides .swiper-pagination .swiper-pagination-bullet {\n    width: var(--page-pagination-bullet-size);\n    height: var(--page-pagination-bullet-size); }\n\n::ng-deep .variant-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: var(--app-fair-margin); }\n\n::ng-deep .variant-alert .alert-head {\n    padding-top: calc((var(--select-alert-margin) / 4) * 3);\n    padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n    -webkit-padding-start: var(--select-alert-margin);\n            padding-inline-start: var(--select-alert-margin);\n    -webkit-padding-end: var(--select-alert-margin);\n            padding-inline-end: var(--select-alert-margin); }\n\n::ng-deep .variant-alert .alert-title {\n    color: var(--select-alert-color); }\n\n::ng-deep .variant-alert .alert-head,\n  ::ng-deep .variant-alert .alert-message {\n    background-color: var(--select-alert-background); }\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n    margin: 0px; }\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n    font-size: 18px;\n    font-weight: 400; }\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n    --padding-top: 0;\n    --padding-start: 0.9em;\n    --padding-end: 0.9em;\n    --padding-bottom: 0;\n    height: 2.1em;\n    font-size: 13px; }\n\n::ng-deep .variant-alert .alert-message {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMucGFnZS5zY3NzIiwiL1VzZXJzL29saXZpZXJnbGVtYXMvRG9jdW1lbnRzL2d1aWRlQU9UVy9pb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBYztFQUNkLHdDQUFrQjtFQUVsQixvQ0FBK0I7RUFDL0IscUNBQWdDO0VBQ2hDLG1DQUE4QjtFQUU5QixtREFBc0I7RUFDdEIseURBQTRCO0VBRTVCLHFCQUFhLEVBQUE7O0FBSWY7RUFDRSxvQ0FBYSxFQUFBOztBQURmO0lBS00sK0NBQW9CO0lBQ3BCLHNEQUEyQjtJQUUzQixZQUFZO0lBQ1osV0FBVyxFQUFBOztBQVRqQjtNQVlRLFlBQVk7TUFDWixXQUFXO01BQ1gsWUFBWTtNQUVaLG1EQUFtRCxFQUFBOztBQWhCM0Q7SUFxQk0sV0FBVyxFQUFBOztBQXJCakI7TUF3QlEscUJBQXFCO01BQ3JCLDJCQUEyQixFQUFBOztBQXpCbkM7SUErQkksa0RBQWtELEVBQUE7O0FBL0J0RDtNQWtDTSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBOztBQXBDekI7TUF3Q00sY0FBYztNQUNkLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGtDQUFrQyxFQUFBOztBQTVDeEM7TUFnRE0sZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsd0JBQXdCO01BQ3hCLHFCQUFxQixFQUFBOztBQXBEM0I7TUF3RE0sb0NBQW9DO01BQ3BDLDZCQUE2QjtNQUM3QixxQkFBcUI7TUFDckIsK0JBQStCO01BQy9CLGVBQWUsRUFBQTs7QUE1RHJCO0lBaUVJLHFEQUEwQjtJQUUxQixnQkFBZ0I7SUFDaEIsbUVBQW1FO0lBQ25FLG9FQUFvRTtJQUNwRSw0Q0FBNEMsRUFBQTs7QUF0RWhEO01BeUVNLGFBQWE7TUFDYix5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBOztBQTVFekI7UUErRVEsV0FBVztRQUNYLFlBQVksRUFBQTs7QUFoRnBCO01BcUZNLG1CQUFtQixFQUFBOztBQXJGekI7TUF5Rk0sV0FBVyxFQUFBOztBQXpGakI7TUE2Rk0sV0FBVztNQUNYLDhCQUE4QixFQUFBOztBQTlGcEM7SUFtR0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLDJDQUEyQyxFQUFBOztBQXZHL0M7SUEyR0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsNENBQTRDLEVBQUE7O0FBOUdoRDtNQWlITSxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixvQ0FBb0MsRUFBQTs7QUFwSDFDO0lBeUhJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGlDQUFpQyxFQUFBOztBQS9IckM7SUFtSUksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsNENBQTRDLEVBQUE7O0FBdEloRDtNQXlJTSw4QkFBMEIsRUFBQTs7QUF6SWhDO1FBNElRLDJDQUEyQyxFQUFBOztBQTVJbkQ7VUErSVUsK0NBQStDLEVBQUE7O0FBL0l6RDtVQW1KVSw4Q0FBOEMsRUFBQTs7QUFuSnhEO1VBdUpVLDhDQUE4QyxFQUFBOztBQXZKeEQ7WUEwSlksY0FBYyxFQUFBOztBQTFKMUI7VUErSlUsYUFBYTtVQUNiLHNCQUFzQjtVQUN0QixtQkFBbUI7VUFFbkIsb0JBQW9CLEVBQUE7O0FBbks5QjtVQXVLVSxXQUFXO1VBQ1gsMkNBQTJDO1VBQzNDLGVBQWU7VUFDZixnQkFBZ0I7VUFDaEIsa0JBQWtCO1VBQ2xCLGNBQWM7VUFFZCx1QkFBdUI7VUFDdkIsbUJBQW1CO1VBQ25CLGdCQUFnQixFQUFBOztBQWhMMUI7WUFtTFksaUNBQWlDO1lBQ2pDLGNBQWM7WUFDZCxxQkFBcUIsRUFBQTs7QUFyTGpDO1VBMExVLGNBQWM7VUFDZCxnQkFBZ0I7VUFDaEIsd0JBQXdCO1VBQ3hCLGVBQWU7VUFDZixrQkFBa0I7VUFDbEIsY0FBYyxFQUFBOztBQVd4QjtFQUVJLDRDQUE0QztFQUM1QyxjQUFjO0VBRWQsK0ZBQStGLEVBQUE7O0FBTG5HO0lBUU0seUNBQXlDO0lBQ3pDLDBDQUEwQyxFQUFBOztBQU9oRDtFQzNPRSwwQkFBcUI7RUFDckIsK0JBQTBCO0VBQzFCLDJCQUFzQjtFRDZPdEIsK0NBQXFCO0VBQ3JCLG1EQUEwQjtFQUMxQiw2Q0FBc0IsRUFBQTs7QUFOeEI7SUN0T0ksdURBQXVEO0lBQ3ZELDBEQUEwRDtJQUMxRCxpREFBZ0Q7WUFBaEQsZ0RBQWdEO0lBQ2hELCtDQUE4QztZQUE5Qyw4Q0FBOEMsRUFBQTs7QURtT2xEO0lDL05JLGdDQUFnQyxFQUFBOztBRCtOcEM7O0lDMU5JLGdEQUFnRCxFQUFBOztBRDBOcEQ7SUNwTk0sV0FBVyxFQUFBOztBRG9OakI7SUM3TU0sZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBRDRNdEI7SUN2TU0sZ0JBQWM7SUFDZCxzQkFBZ0I7SUFDaEIsb0JBQWM7SUFDZCxtQkFBaUI7SUFFakIsYUFBYTtJQUNiLGVBQWUsRUFBQTs7QURpTXJCO0lBU0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0XCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogMzBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG5cbiAgLS1wYWdlLW9wdGlvbnMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtcmVsYXRlZC1pdGVtcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLS1wYWdlLWNvbG9yOiAjY2IzMjhmO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuc2xpZGVyLXJvdyB7XG4gICAgLmRldGFpbHMtc2xpZGVzIHtcbiAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIHNwYWNlXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hvd2Nhc2UtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYuY2VudGVyZWQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG5cbiAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzLWJyYW5kIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXByaWNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuZGV0YWlscy1zYWxlLXByaWNlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy1wdXJjaGFzZS1vcHRpb25zLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcik7XG5cbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLW9wdGlvbnMtZ3V0dGVyKSk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLW9wdGlvbnMtZ3V0dGVyKSk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuYXV4LWFjdGlvbi1jb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICAgLnNpemUtY2hhcnQtYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICAuc2VsZWN0LXZhcmlhbnQtYnRuIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5hZGQtdG8tY2FydC1idG4ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIH1cblxuICAuZGV0YWlscy1kZXNjcmlwdGlvbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsLWFsdC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIH1cblxuICAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5yZWxhdGVkLXByb2R1Y3RzLWxpc3Qge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAucmVsYXRlZC1wcm9kdWN0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtcmVsYXRlZC1pdGVtcy1ndXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1yZWxhdGVkLWl0ZW1zLWd1dHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgICAgICAgLmltYWdlLWFuY2hvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtaW4td2lkdGg6IDkwJTtcblxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIC5uYW1lLWFuY2hvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1zYWxlLXByaWNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxuLy8gRklYOiAgIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjY1MDcyLzExMTY5NTlcbjpob3N0IDo6bmctZGVlcCAuZGV0YWlscy1zbGlkZXMge1xuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBpcyAxOHB4IGhlaWdodCwgLnNsaWRlLWlubmVyLXJvdyBoYXMgNDBweCBvZiBwYWRkaW5nLWJvdHRvbSA9PiBib3R0b20gPSAoNDBweCAtIDE4cHgpLzIgPSAxMXB4XG4gICAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG5cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBbGVydHMgYW5kIGluIGdlbmVyYWwgYWxsIG92ZXJsYXlzIGFyZSBhdHRhY2hlZCB0byB0aGUgYm9keSBvciBpb24tYXBwIGRpcmVjdGx5XG4vLyBXZSBuZWVkIHRvIHVzZSA6Om5nLWRlZXAgdG8gYWNjZXNzIGl0IGZyb20gaGVyZVxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IHtcbiAgQGluY2x1ZGUgc2VsZWN0LWFsZXJ0KCk7XG5cbiAgLy8gVmFyaWFibGVzIHNob3VsZCBiZSBpbiBhIGRlZXBlciBzZWxlY3RvciBvciBhZnRlciB0aGUgbWl4aW4gaW5jbHVkZSB0byBvdmVycmlkZSBkZWZhdWx0IHZhbHVlc1xuICAtLXNlbGVjdC1hbGVydC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG5cbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIkBtaXhpbiBzZWxlY3QtYWxlcnQoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiAjMDAwO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XG5cbiAgLmFsZXJ0LWhlYWQge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgfVxuXG4gIC5hbGVydC10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XG4gIH1cblxuICAuYWxlcnQtaGVhZCxcbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIC8vIGlPUyBzdHlsZXNcbiAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hdGVyaWFsIHN0eWxlc1xuICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xuICAgIC5hbGVydC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cblxuICAgIC5hbGVydC1idXR0b24ge1xuICAgICAgLy8gVmFsdWVzIHRha2VuIGZyb20gSW9uaWMgc21hbGwgYnV0dG9uIHByZXNldFxuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMC45ZW07XG4gICAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgIGhlaWdodDogMi4xZW07XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/fashion/details/styles/fashion-details.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fashion/details/styles/fashion-details.shell.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143; }\n\napp-image-shell.showcase-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.details-name > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 18px;\n  max-width: 60%; }\n\n.details-name > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.details-brand > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 14px;\n  max-width: 40%; }\n\n.details-brand > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.details-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  width: 50px; }\n\n.details-price > app-text-shell.text-loaded {\n    width: inherit; }\n\n.details-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  width: 50px; }\n\n.details-sale-price > app-text-shell.text-loaded {\n    width: inherit; }\n\n.details-description > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px; }\n\n.details-description.product-code > app-text-shell {\n  max-width: 40%; }\n\n.details-description.product-code > app-text-shell.text-loaded {\n    max-width: inherit; }\n\napp-image-shell.related-product-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\n.item-name app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px; }\n\n.item-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFjO0VBQ2QsNkJBQWtCLEVBQUE7O0FBVXBCO0VBQ0UsbUVBQWlDO0VBQ2pDLDhEQUE0QixFQUFBOztBQUc5QjtFQUNFLG9FQUFrQztFQUNsQywrREFBNkI7RUFDN0IsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFKaEI7SUFPSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxvRUFBa0M7RUFDbEMsK0RBQTZCO0VBQzdCLDhCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBSmhCO0lBT0ksa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0Usb0VBQWtDO0VBQ2xDLCtEQUE2QjtFQUM3Qiw4QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUpiO0lBT0ksY0FBYyxFQUFBOztBQUlsQjtFQUNFLG9FQUFrQztFQUNsQywrREFBNkI7RUFDN0IsOEJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFKYjtJQU9JLGNBQWMsRUFBQTs7QUFJbEI7RUFDRSxvRUFBa0M7RUFDbEMsK0RBQTZCO0VBQzdCLDhCQUF5QixFQUFBOztBQUczQjtFQUNFLGNBQWMsRUFBQTs7QUFEaEI7SUFJSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0Usb0VBQWtDO0VBQ2xDLCtEQUE2QjtFQUM3Qiw4QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxvRUFBa0M7RUFDbEMsK0RBQTZCO0VBQzdCLDhCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjY2IzMjhmO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjAzLDUwLDE0Mztcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uZGV0YWlscy1icmFuZCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcbiAgd2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbi5wcm9kdWN0LWNvZGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC1wcm9kdWN0LWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLXNhbGUtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cbiJdfQ== */"

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
//# sourceMappingURL=fashion-details-fashion-details-module.js.map