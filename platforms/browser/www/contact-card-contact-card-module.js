(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-card-contact-card-module"],{

/***/ "./src/app/contact-card/contact-card.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contact-card/contact-card.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPageModule", function() { return ContactCardPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_card_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-card.page */ "./src/app/contact-card/contact-card.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactCardPageModule = /** @class */ (function () {
    function ContactCardPageModule() {
    }
    ContactCardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _contact_card_page__WEBPACK_IMPORTED_MODULE_5__["ContactCardPage"] }])
            ],
            declarations: [_contact_card_page__WEBPACK_IMPORTED_MODULE_5__["ContactCardPage"]]
        })
    ], ContactCardPageModule);
    return ContactCardPageModule;
}());



/***/ }),

/***/ "./src/app/contact-card/contact-card.page.html":
/*!*****************************************************!*\
  !*** ./src/app/contact-card/contact-card.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contact-card-content\">\n  <ion-row class=\"user-details-wrapper\">\n    <ion-col size=\"4\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell class=\"user-avatar\" animation=\"spinner\" [src]=\"'./assets/sample-images/notifications/100x100Notification2.jpg'\" [alt]=\"'notification image'\"></app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n    <ion-col class=\"user-info-wrapper\" size=\"8\">\n      <h3 class=\"user-name\">Claire Hale</h3>\n      <h5 class=\"user-handle\">@clairehale</h5>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"6\">\n      <span class=\"user-stat-value\">1553</span>\n      <span class=\"user-stat-name\">Following</span>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"6\">\n      <span class=\"user-stat-value\">537</span>\n      <span class=\"user-stat-name\">Followers</span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"user-bio\">\n        I am a product and visual designer based in Uruguay. I have designed at Google, Amazon and Microsoft.\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"user-preferences-wrapper\">\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Mobile</h4>\n      <p class=\"preference-value\">\n        +1-202-555-0102\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Email</h4>\n      <p class=\"preference-value\">\n        clairhale@ionic.com\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Address</h4>\n      <p class=\"preference-value\">\n        921 Church St, San Francisco, CA\n        <br/>\n        94114, USA\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contact-card/contact-card.page.ts":
/*!***************************************************!*\
  !*** ./src/app/contact-card/contact-card.page.ts ***!
  \***************************************************/
/*! exports provided: ContactCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPage", function() { return ContactCardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactCardPage = /** @class */ (function () {
    function ContactCardPage() {
    }
    ContactCardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-card',
            template: __webpack_require__(/*! ./contact-card.page.html */ "./src/app/contact-card/contact-card.page.html"),
            styles: [__webpack_require__(/*! ./styles/contact-card.page.scss */ "./src/app/contact-card/styles/contact-card.page.scss"), __webpack_require__(/*! ./styles/contact-card.shell.scss */ "./src/app/contact-card/styles/contact-card.shell.scss")]
        })
    ], ContactCardPage);
    return ContactCardPage;
}());



/***/ }),

/***/ "./src/app/contact-card/styles/contact-card.page.scss":
/*!************************************************************!*\
  !*** ./src/app/contact-card/styles/contact-card.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-highlighted-background: var(--ion-color-secondary-tint); }\n\nion-header ion-toolbar {\n  --background: var(--page-highlighted-background); }\n\n.contact-card-content {\n  --background: var(--page-background);\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0); }\n\n.contact-card-content .user-details-wrapper {\n    --ion-grid-column-padding: 0px;\n    padding: 0px var(--page-margin) var(--page-margin);\n    background-color: var(--page-highlighted-background);\n    color: var(--ion-color-light);\n    align-items: center; }\n\n.contact-card-content .user-details-wrapper .user-avatar {\n      border: solid 3px var(--ion-color-light); }\n\n.contact-card-content .user-details-wrapper .user-info-wrapper {\n      padding-left: calc(var(--page-margin) / 2); }\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-name {\n        margin: 0px 0px 5px; }\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-handle {\n        margin: 0px;\n        font-weight: 400; }\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper {\n      text-align: center;\n      padding-top: calc(var(--page-margin) / 2); }\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-value {\n        margin-right: 5px;\n        font-weight: 500;\n        font-size: 18px; }\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-name {\n        font-size: 16px; }\n\n.contact-card-content .user-details-wrapper .user-bio {\n      margin: var(--page-margin) 0px 0px;\n      line-height: 1.2;\n      font-size: 14px; }\n\n.contact-card-content .user-preferences-wrapper {\n    --ion-grid-column-padding: 0px;\n    padding: var(--page-margin); }\n\n.contact-card-content .user-preferences-wrapper .preference-name {\n      margin: 0px 0px 5px;\n      font-size: 16px; }\n\n.contact-card-content .user-preferences-wrapper .preference-value {\n      margin: 0px 0px calc(var(--page-margin) / 2);\n      font-size: 14px;\n      line-height: 1.4;\n      color: var(--ion-color-dark-tint); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQWM7RUFDZCw4Q0FBa0I7RUFFbEIsOERBQThCLEVBQUE7O0FBSWhDO0VBRUksZ0RBQWEsRUFBQTs7QUFJakI7RUFDRSxvQ0FBYTtFQUViLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFIMUI7SUFNSSw4QkFBMEI7SUFFMUIsa0RBQWtEO0lBQ2xELG9EQUFvRDtJQUNwRCw2QkFBNkI7SUFDN0IsbUJBQW1CLEVBQUE7O0FBWHZCO01BY00sd0NBQXdDLEVBQUE7O0FBZDlDO01Ba0JNLDBDQUEwQyxFQUFBOztBQWxCaEQ7UUFxQlEsbUJBQW1CLEVBQUE7O0FBckIzQjtRQXlCUSxXQUFXO1FBQ1gsZ0JBQWdCLEVBQUE7O0FBMUJ4QjtNQStCTSxrQkFBa0I7TUFDbEIseUNBQXlDLEVBQUE7O0FBaEMvQztRQW1DUSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGVBQWUsRUFBQTs7QUFyQ3ZCO1FBeUNRLGVBQWUsRUFBQTs7QUF6Q3ZCO01BOENNLGtDQUFrQztNQUNsQyxnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBOztBQWhEckI7SUFxREksOEJBQTBCO0lBRTFCLDJCQUEyQixFQUFBOztBQXZEL0I7TUEwRE0sbUJBQW1CO01BQ25CLGVBQWUsRUFBQTs7QUEzRHJCO01BK0RNLDRDQUE0QztNQUM1QyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGlDQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbmlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQpO1xuICB9XG59XG5cbi5jb250YWN0LWNhcmQtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLy8gVG8gZml4IGhhbGYgcGl4ZWwgbGluZSBiZXR3ZWVuIGlvbi1oZWFkZXIgYW5kICBpb24tY29udGVudFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cbiAgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWhpZ2hsaWdodGVkLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAudXNlci1hdmF0YXIge1xuICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAudXNlci1pbmZvLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICAgIH1cblxuICAgICAgLnVzZXItaGFuZGxlIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXItc3RhdHMtd3JhcHBlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLnVzZXItc3RhdC12YWx1ZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLXN0YXQtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1iaW8ge1xuICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnByZWZlcmVuY2UtbmFtZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5wcmVmZXJlbmNlLXZhbHVlIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-card/styles/contact-card.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/contact-card/styles/contact-card.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-avatar {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.25);\n  --image-shell-border-radius: 50%;\n  --image-shell-spinner-color: var(--ion-color-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdFQUFpQztFQUNqQyxnQ0FBNEI7RUFDNUIsbURBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWNhcmQvc3R5bGVzL2NvbnRhY3QtY2FyZC5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItYXZhdGFyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMjUpO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIl19 */"

/***/ })

}]);
//# sourceMappingURL=contact-card-contact-card-module.js.map