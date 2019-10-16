(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getting-started-getting-started-module"],{

/***/ "./src/app/getting-started/getting-started.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/getting-started/getting-started.module.ts ***!
  \***********************************************************/
/*! exports provided: GettingStartedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedPageModule", function() { return GettingStartedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _getting_started_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getting-started.page */ "./src/app/getting-started/getting-started.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// TODO: move to a shared module instead





var routes = [
    {
        path: '',
        component: _getting_started_page__WEBPACK_IMPORTED_MODULE_6__["GettingStartedPage"]
    }
];
var GettingStartedPageModule = /** @class */ (function () {
    function GettingStartedPageModule() {
    }
    GettingStartedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [_getting_started_page__WEBPACK_IMPORTED_MODULE_6__["GettingStartedPage"]]
        })
    ], GettingStartedPageModule);
    return GettingStartedPageModule;
}());



/***/ }),

/***/ "./src/app/getting-started/getting-started.page.html":
/*!***********************************************************!*\
  !*** ./src/app/getting-started/getting-started.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"skip-getting-started-button\" fill=\"clear\" [routerLink]=\"['/auth/login']\">skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Geocoding\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <a class=\"sourcecode\" href=\"https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/geocoding/geocoding.page.ts\" target=\"_blank\">[source code]</a>\n\n  <h3>Single geocoding</h3>\n  <div id=\"map_canvas1\">\n    <table class=\"smallPanel\">\n      <tr>\n        <td ><ion-input type=\"text\" id=\"search_address\" #search_address style=\"ime-mode: disable\"></ion-input></td>\n        <td><ion-button (click)=\"onButton1_click($event)\">Search</ion-button></td>\n      </tr>\n    </table>\n  </div>\n\n  <hr>\n\n  <h3>Batch geocoding</h3>\n  <div id=\"map_canvas2\">\n    <ion-button ion-button (click)=\"onButton2_click($event)\">Batch geocoding!</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/getting-started/getting-started.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/getting-started/getting-started.page.ts ***!
  \*********************************************************/
/*! exports provided: GettingStartedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedPage", function() { return GettingStartedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var GettingStartedPage = /** @class */ (function () {
    function GettingStartedPage(menu) {
        this.menu = menu;
        this.isLastSlide = false;
        this.gettingStartedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            browsingCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('men'),
            followingInterests: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                tops: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                dresses: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                jeans: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                jackets: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                shoes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                glasses: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            })
        });
    }
    GettingStartedPage.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    GettingStartedPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // ViewChild is set
        this.slides.isEnd().then(function (isEnd) {
            _this.isLastSlide = isEnd;
        });
        // Subscribe to changes
        this.slides.ionSlideWillChange.subscribe(function (changes) {
            _this.slides.isEnd().then(function (isEnd) {
                _this.isLastSlide = isEnd;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], GettingStartedPage.prototype, "slides", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.last-slide-active'),
        __metadata("design:type", Object)
    ], GettingStartedPage.prototype, "isLastSlide", void 0);
    GettingStartedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! ./getting-started.page.html */ "./src/app/getting-started/getting-started.page.html"),
            styles: [__webpack_require__(/*! ./styles/getting-started.page.scss */ "./src/app/getting-started/styles/getting-started.page.scss"), __webpack_require__(/*! ./styles/getting-started.shell.scss */ "./src/app/getting-started/styles/getting-started.shell.scss"), __webpack_require__(/*! ./styles/getting-started.responsive.scss */ "./src/app/getting-started/styles/getting-started.responsive.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], GettingStartedPage);
    return GettingStartedPage;
}());



/***/ }),

/***/ "./src/app/getting-started/styles/getting-started.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/getting-started/styles/getting-started.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-alt);\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-max-heading-height: 16%;\n  --page-max-call-to-actions-height: 10%; }\n\n:host {\n  background-color: var(--page-background); }\n\nion-header ion-toolbar {\n  --background: var(--page-background); }\n\nion-header ion-toolbar ion-button {\n    --color: var(--ion-color-lightest); }\n\nion-content {\n  --background: var(--page-background); }\n\n.getting-started-form {\n  height: 100%; }\n\n.getting-started-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-light);\n  height: 100%; }\n\n.getting-started-slides .slide-inner-row {\n    --ion-grid-column-padding: 0px;\n    height: 100%;\n    width: 100%;\n    padding: var(--page-margin);\n    border-bottom: var(--page-swiper-pagination-space) solid transparent;\n    background-clip: padding-box; }\n\n.question-slide .slide-title {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 30px; }\n\n.question-slide .slide-subtitle {\n  color: var(--ion-color-lightest);\n  text-align: center;\n  margin: calc(var(--page-margin) / 2) var(--page-margin);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px; }\n\n.browsing-categories-slide .slide-inner-row {\n  flex-flow: column;\n  justify-content: space-between; }\n\n.browsing-categories-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none; }\n\n.browsing-categories-slide .question-options-col::-webkit-scrollbar {\n    display: none; }\n\n.browsing-categories-slide .question-options-col .question-options-list {\n    margin: var(--page-margin) 0px 0px;\n    background: transparent; }\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option {\n      --padding-start: 0px;\n      --ion-item-background: var(--ion-color-lightest);\n      --ion-item-color: var(--ion-color-dark);\n      --inner-border-width: 0px;\n      --inner-padding-end: 0px;\n      text-align: center; }\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option:not(:last-child) {\n        margin-bottom: var(--page-margin); }\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option.item-radio-checked {\n        --ion-item-background: var(--ion-color-secondary);\n        --ion-item-color: var(--ion-color-lightest); }\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-label {\n        margin: calc(var(--page-margin) / 2) 0px; }\n\n.browsing-categories-slide .question-options-col .question-options-list .question-option ion-radio {\n        margin: 0px;\n        width: 0px;\n        --border-width: 0px;\n        height: 0px;\n        --color-checked: transparent; }\n\n.interests-to-follow-slide .slide-inner-row {\n  flex-flow: column;\n  justify-content: space-between;\n  border-width: 0px; }\n\n.interests-to-follow-slide .heading-col {\n  flex: 0 1 auto;\n  max-height: var(--page-max-heading-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content; }\n\n.interests-to-follow-slide .question-options-col {\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none; }\n\n.interests-to-follow-slide .question-options-col::-webkit-scrollbar {\n    display: none; }\n\n.interests-to-follow-slide .question-options-col .options-list-row {\n    --ion-grid-column-padding: 0px;\n    padding-top: calc(var(--page-margin) / 4);\n    padding-bottom: calc(var(--page-margin) / 4); }\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col {\n      padding-top: calc(var(--page-margin) / 4);\n      padding-bottom: calc(var(--page-margin) / 4); }\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(odd) {\n        padding-right: calc(var(--page-margin) / 4); }\n\n.interests-to-follow-slide .question-options-col .options-list-row ion-col:nth-child(even) {\n        padding-left: calc(var(--page-margin) / 4); }\n\n.interests-to-follow-slide .call-to-action-col {\n  flex: 0 1 auto;\n  max-height: var(--page-max-call-to-actions-height);\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  display: flex;\n  align-items: flex-end;\n  padding-top: calc(var(--page-margin) / 2); }\n\n.interests-to-follow-slide .call-to-action-col .signup-button {\n    margin: 0px;\n    flex: 1 0 100%; }\n\n.interests-to-follow-slide .custom-checkbox .checkbox-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  text-align: center;\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 15%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.interests-to-follow-slide .custom-checkbox ion-checkbox {\n  --border-radius: 0px;\n  --border-width: 10vw;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --background: transparent;\n  --background-checked: var(--ion-color-secondary-rgb);\n  --background-checked: rgba(var(--ion-color-secondary-rgb), .4);\n  height: 100%;\n  width: 100%; }\n\n.interests-to-follow-slide .custom-checkbox.checkbox-checked .checkbox-title {\n  display: none; }\n\n:host(.last-slide-active) ::ng-deep .getting-started-slides .swiper-pagination {\n  display: none; }\n\n:host ::ng-deep .getting-started-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2); }\n\n:host ::ng-deep .getting-started-slides .swiper-pagination .swiper-pagination-bullet {\n    width: var(--page-pagination-bullet-size);\n    height: var(--page-pagination-bullet-size); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwiL1VzZXJzL29saXZpZXJnbGVtYXMvRG9jdW1lbnRzL2d1aWRlQU9UVy9pb25pYzQtZnVsbC1zdGFydGVyLWFwcC0xLjIvc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQ0FBYztFQUNkLDRDQUFrQjtFQUVsQixvQ0FBK0I7RUFDL0IscUNBQWdDO0VBQ2hDLG1DQUE4QjtFQUU5Qiw4QkFBMEI7RUFDMUIsc0NBQWtDLEVBQUE7O0FBSXBDO0VBRUUsd0NBQXdDLEVBQUE7O0FBRzFDO0VBRUksb0NBQWEsRUFBQTs7QUFGakI7SUFNTSxrQ0FBUSxFQUFBOztBQUtkO0VBQ0Usb0NBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLDJDQUFvQjtFQUNwQixrREFBMkI7RUFFM0IsWUFBWSxFQUFBOztBQUpkO0lBT0ksOEJBQTBCO0lBRTFCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBRTNCLG9FQUFvRTtJQUNwRSw0QkFBNEIsRUFBQTs7QUFJaEM7RUFFSSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHFFQUFxRTtFQUNyRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQVByQjtFQVdJLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsdURBQXVEO0VBQ3ZELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBRUksaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBOztBQUhsQztFQU9JLGdCQUFnQjtFQ25GbEIsd0JBQXdCO0VBR3hCLDhCQUE4QjtFQUM5QixxQkFBcUIsRUFBQTs7QUR3RXZCO0lDcEVJLGFBQWEsRUFBQTs7QURvRWpCO0lBWU0sa0NBQWtDO0lBQ2xDLHVCQUF1QixFQUFBOztBQWI3QjtNQWdCUSxvQkFBZ0I7TUFDaEIsZ0RBQXNCO01BQ3RCLHVDQUFpQjtNQUNqQix5QkFBcUI7TUFDckIsd0JBQW9CO01BRXBCLGtCQUFrQixFQUFBOztBQXRCMUI7UUF5QlUsaUNBQWlDLEVBQUE7O0FBekIzQztRQTZCVSxpREFBc0I7UUFDdEIsMkNBQWlCLEVBQUE7O0FBOUIzQjtRQWtDVSx3Q0FBd0MsRUFBQTs7QUFsQ2xEO1FBc0NVLFdBQVc7UUFFWCxVQUFVO1FBQ1YsbUJBQWU7UUFDZixXQUFXO1FBRVgsNEJBQWdCLEVBQUE7O0FBTzFCO0VBRUksaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUc5QixpQkFBaUIsRUFBQTs7QUFOckI7RUFVSSxjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLCtCQUF1QjtFQUF2Qiw0QkFBdUI7RUFBdkIsdUJBQXVCLEVBQUE7O0FBWjNCO0VBZ0JJLGdCQUFnQjtFQy9JbEIsd0JBQXdCO0VBR3hCLDhCQUE4QjtFQUM5QixxQkFBcUIsRUFBQTs7QUQySHZCO0lDdkhJLGFBQWEsRUFBQTs7QUR1SGpCO0lBcUJNLDhCQUEwQjtJQUUxQix5Q0FBeUM7SUFDekMsNENBQTRDLEVBQUE7O0FBeEJsRDtNQTJCUSx5Q0FBeUM7TUFDekMsNENBQTRDLEVBQUE7O0FBNUJwRDtRQStCVSwyQ0FBMkMsRUFBQTs7QUEvQnJEO1FBbUNVLDBDQUEwQyxFQUFBOztBQW5DcEQ7RUEwQ0ksY0FBYztFQUNkLGtEQUFrRDtFQUNsRCwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QjtFQUV2QixhQUFhO0VBQ2IscUJBQXFCO0VBRXJCLHlDQUF5QyxFQUFBOztBQWpEN0M7SUFvRE0sV0FBVztJQUNYLGNBQWMsRUFBQTs7QUFyRHBCO0VBMkRNLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFFVCxRQUFRO0VBQ1IsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQXhFakM7RUE0RU0sb0JBQWdCO0VBQ2hCLG9CQUFlO0VBQ2YsMkJBQWU7RUFDZixtQ0FBdUI7RUFDdkIseUJBQWE7RUFDYixvREFBcUI7RUFDckIsOERBQXFCO0VBRXJCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBckZqQjtFQTRGUSxhQUFhLEVBQUE7O0FBTXJCO0VBR00sYUFBYSxFQUFBOztBQVFuQjtFQUVJLDRDQUE0QztFQUM1QyxjQUFjO0VBRWQsK0ZBQStGLEVBQUE7O0FBTG5HO0lBUU0seUNBQXlDO0lBQ3pDLDBDQUEwQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdCk7XG5cbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiA0MHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcblxuICAtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0OiAxNiU7XG4gIC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodDogMTAlO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLy8gVG8gZml4IGhhbGYgcGl4ZWwgbGluZSBiZXR3ZWVuIGlvbi1oZWFkZXIgYW5kICBpb24tY29udGVudFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAgIC8vIEZvciB0aGUgc2tpcCBidXR0b25cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4uZ2V0dGluZy1zdGFydGVkLWZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5zbGlkZS1pbm5lci1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIHNwYWNlXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgfVxufVxuXG4ucXVlc3Rpb24tc2xpZGUge1xuICAuc2xpZGUtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSAwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAuc2xpZGUtc3VidGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG59XG5cbi5icm93c2luZy1jYXRlZ29yaWVzLXNsaWRlIHtcbiAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnF1ZXN0aW9uLW9wdGlvbnMtY29sIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAucXVlc3Rpb24tb3B0aW9ucy1saXN0IHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgLnF1ZXN0aW9uLW9wdGlvbiB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIC8vIFRvIGhpZGUgdGhlIC5yYWRpby1pY29uXG4gICAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgIC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5yYWRpby1pY29uIC5yYWRpby1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xuICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAvLyBJbiB0aGUgbGFzdCBzbGlkZSAuc3dpcGVyLXBhZ2luYXRpb24gaXMgaGlkZGVuXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIH1cblxuICAuaGVhZGluZy1jb2wge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IHZhcigtLXBhZ2UtbWF4LWhlYWRpbmctaGVpZ2h0KTtcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5xdWVzdGlvbi1vcHRpb25zLWNvbCB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuXG4gICAgLm9wdGlvbnMtbGlzdC1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWF4LWhlaWdodDogdmFyKC0tcGFnZS1tYXgtY2FsbC10by1hY3Rpb25zLWhlaWdodCk7XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgLnNpZ251cC1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICB9XG4gIH1cblxuICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGxlZnQ6IDE1JTtcbiAgICAgIC8vIHZlcnRpY2FsbHkgY2VudGVyZWRcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxMHZ3O1xuICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKTtcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjQpO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIE5vdGU6IFdlIGNhbm5vdGUgY2hhbmdlIHRoZSBzdHlsZXMgb2YgdGhlIC5jaGVja2JveC1pY29uIGJlY2F1c2UgaXQncyBpbnNpZGUgdGhlIHNoYWRvdyBkb20uXG4gICAgICAvLyBBbiBhbHRlcm5hdGl2ZSB3b3VsZCBiZSB0byBzZXQgLS13aWR0aCBhbmQgLS1oZWlnaHQgdG8gMHB4IGFuZCBhZGQgYSBjdXN0b20gb3ZlcmxheSBhbmQgaWNvbiBpbiB0aGUgPGN1c3RvbS1jaGVja2JveD4gaHRtbFxuICAgIH1cblxuICAgICYuY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIHtcbiAgOjpuZy1kZWVwIC5nZXR0aW5nLXN0YXJ0ZWQtc2xpZGVzIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxuLy8gRklYOiAgIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjY1MDcyLzExMTY5NTlcbjpob3N0IDo6bmctZGVlcCAuZ2V0dGluZy1zdGFydGVkLXNsaWRlcyB7XG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIGlzIDE4cHggaGVpZ2h0LCAuc2xpZGUtaW5uZXItcm93IGhhcyA0MHB4IG9mIHBhZGRpbmctYm90dG9tID0+IGJvdHRvbSA9ICg0MHB4IC0gMThweCkvMiA9IDExcHhcbiAgICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/getting-started/styles/getting-started.responsive.scss":
/*!************************************************************************!*\
  !*** ./src/app/getting-started/styles/getting-started.responsive.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2 / 3) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px; } }\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40 / 71) {\n  .interests-to-follow-slide .custom-checkbox .checkbox-title {\n    font-size: 18px; } }\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n/* ----------- iPhone X ----------- */\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFVRTtJQUdNLGVBQWUsRUFBQSxFQUNoQjtBQUtQLHFEQUFBO0FBQ0E7RUFVRTtJQUdNLGVBQWUsRUFBQSxFQUNoQjtBQUtQLGtEQUFBO0FBYUEscUNBQUE7QUFhQSxpREFBQSIsImZpbGUiOiJzcmMvYXBwL2dldHRpbmctc3RhcnRlZC9zdHlsZXMvZ2V0dGluZy1zdGFydGVkLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xuICAgIC5jdXN0b20tY2hlY2tib3gge1xuICAgICAgLmNoZWNrYm94LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTY4cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmludGVyZXN0cy10by1mb2xsb3ctc2xpZGUge1xuICAgIC5jdXN0b20tY2hlY2tib3gge1xuICAgICAgLmNoZWNrYm94LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDczNnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/getting-started/styles/getting-started.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/getting-started/styles/getting-started.shell.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.checkbox-cover {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), .4);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .4);\n  --image-shell-spinner-color: var(--ion-color-lightest); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvZ2V0dGluZy1zdGFydGVkL3N0eWxlcy9nZXR0aW5nLXN0YXJ0ZWQuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNFQUFpQztFQUNqQyxxRUFBaUM7RUFDakMsc0RBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nZXR0aW5nLXN0YXJ0ZWQvc3R5bGVzL2dldHRpbmctc3RhcnRlZC5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLmNoZWNrYm94LWNvdmVyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIC40KTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjQpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=getting-started-getting-started-module.js.map