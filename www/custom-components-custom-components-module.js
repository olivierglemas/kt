(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-components-custom-components-module"],{

/***/ "./src/app/showcase/custom-components/custom-components.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsModule", function() { return CustomComponentsModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _custom_components_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-components.page */ "./src/app/showcase/custom-components/custom-components.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CustomComponentsModule = /** @class */ (function () {
    function CustomComponentsModule() {
    }
    CustomComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _custom_components_page__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsPage"]
                    }
                ])
            ],
            declarations: [
                _custom_components_page__WEBPACK_IMPORTED_MODULE_7__["CustomComponentsPage"]
            ],
            providers: [
                _showcase_service__WEBPACK_IMPORTED_MODULE_8__["ShowcaseService"]
            ]
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());



/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Custom Components\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Checkbox Wrapper</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      This is a super straightforward component whose purpose is to wrap an <code>&lt;ion-checkbox&gt;</code> element to enable accessing the checkbox state from its parents.\n    </p>\n<pre>\n&lt;app-checkbox-wrapper class=\"custom-checkbox\"&gt;\n  &lt;ion-checkbox checked=true&gt;&lt;/ion-checkbox&gt;\n  &lt;ion-label&gt;Sample Checkbox&lt;/ion-label&gt;\n&lt;/app-checkbox-wrapper&gt;\n</pre>\n<pre>\napp-checkbox-wrapper.custom-checkbox &#123;\n  background: #CCC;\n  color: #000;\n\n  &.checkbox-checked &#123;\n    background: #00AFFF;\n    color: #FFF;\n  &#125;\n&#125;\n</pre>\n    <app-checkbox-wrapper class=\"custom-checkbox\">\n      <ion-checkbox checked=true></ion-checkbox>\n      <ion-label>Sample Checkbox</ion-label>\n    </app-checkbox-wrapper>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Show/Hide Password</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      By wrapping an <code>&lt;ion-input&gt;</code> element with this component, you can enhance the UX and add a show/hide password functionality.\n    </p>\n<pre>\n&lt;app-show-hide-password&gt;\n  &lt;ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"&gt;&lt;/ion-input&gt;\n&lt;/app-show-hide-password&gt;\n</pre>\n    <app-show-hide-password>\n      <ion-input type=\"password\" placeholder=\"Try setting a password\" value=\"It's a secret!\"></ion-input>\n    </app-show-hide-password>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Countdown Timer</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      This components shows the remaining time (in days, hours, minutes or seconds) to a given date.\n    </p>\n    <p>\n      A few examples on how to use this component:\n    </p>\n    <h5>From days to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'second'}\"></app-countdown-timer>\n    <h5>From days to minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'minute'}\"></app-countdown-timer>\n    <h5>From hours to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>From hours to minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'minute'}\"></app-countdown-timer>\n    <h5>From minutes to seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'minute', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'minute', to: 'second'}\"></app-countdown-timer>\n    <h5>Just days</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'day', to: 'day'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'day', to: 'day'}\"></app-countdown-timer>\n    <h5>Just hours</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'hour', to: 'hour'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <h5>Just minutes</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'minute', to: 'minute'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'minute', to: 'minute'}\"></app-countdown-timer>\n    <h5>Just seconds</h5>\n<pre>\n&lt;app-countdown-timer <b>[units]=\"&#123;from: 'second', to: 'second'&#125;\"</b> [end]=\"countdownDate\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer [end]=\"countdownDate\" [units]=\"{from: 'second', to: 'second'}\"></app-countdown-timer>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Styling</h2>\n    <p>\n      You can change different properties to adjust the look and feel of the component.\n    </p>\n    <h5>Fill</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 10px;\n  --countdown-fill-background: #FFFFFF;\n  --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      background-color: transparent;\n      --countdown-padding: 10px;\n      --countdown-fill-border: none;\n      --countdown-fill-border-radius: 10px;\n      --countdown-fill-background: #FFFFFF;\n      --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Color</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-fill-background: #000000;\n  --countdown-value-color: #FFFFFF;\n  --countdown-unit-color: #F2F2F2;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-fill-background: #000000;\n      --countdown-padding: 10px;\n      --countdown-value-color: #FFFFFF;\n      --countdown-unit-color: #F2F2F2;\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Margins & Paddings</h5>\n<pre>\napp-countdown-timer &#123;\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n&#125;\n</pre>\n    <h5>Time unit positioning</h5>\n    <p>\n      Time units to the right (default)\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: row-reverse;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: row-reverse;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units to the left\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: row;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: row;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units above\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: column;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: column;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      Time units below\n    </p>\n<pre>\napp-countdown-timer &#123;\n  --countdown-time-flex-direction: column-reverse;\n&#125;\n</pre>\n    <app-countdown-timer style=\"\n      --countdown-time-flex-direction: column-reverse;\n    \" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'hour'}\"></app-countdown-timer>\n    <p>\n      This component can be configured with different fill modes (by default, no fill will be applied).\n    </p>\n    <h5>Fill: Entire Countdown</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"countdown\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"countdown\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Fill: Time wrapper</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"time\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-time-margin: 0px 10px;\n    --countdown-time-padding: 10px 0px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"time\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n    <h5>Fill: Inner Time Value</h5>\n<pre>\n&lt;app-countdown-timer <b>fill=\"inner-time\"</b> [end]=\"countdownDate\" [units]=\"&#123;from: 'hour', to: 'second'&#125;\"&gt;&lt;/app-countdown-timer&gt;\n</pre>\n    <app-countdown-timer style=\"\n    background-color: transparent;\n    --countdown-padding: 10px;\n    --countdown-inner-time-margin: 5px;\n    --countdown-inner-time-padding: 10px;\n    --countdown-fill-border: none;\n    --countdown-fill-border-radius: 10px;\n    --countdown-fill-background: #FFFFFF;\n    --countdown-fill-shadow: 0px 0px 5px 0px rgba(0,0,0, 0.2);\n    \" fill=\"inner-time\" [end]=\"countdownDate\" [units]=\"{from: 'hour', to: 'second'}\"></app-countdown-timer>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background-shade); }\n  .showcase-content ion-item-divider {\n    --background: var(--ion-color-secondary);\n    --color: var(--ion-color-lightest);\n    text-transform: uppercase;\n    font-weight: 500;\n    letter-spacing: 1px; }\n  .showcase-content .showcase-section {\n    margin: 20px 20px 100px; }\n  .showcase-content pre {\n    font-size: 14px;\n    background: #CCC;\n    padding: 10px; }\n  .showcase-content code {\n    color: #F92672;\n    font-weight: 500; }\n  .showcase-content .custom-checkbox {\n    background: #CCC;\n    color: #000;\n    padding: 20px;\n    display: flex;\n    align-items: center; }\n  .showcase-content .custom-checkbox ion-label {\n      -webkit-margin-start: 10px;\n              margin-inline-start: 10px; }\n  .showcase-content .custom-checkbox.checkbox-checked {\n      background: #00AFFF;\n      color: #FFF; }\n  .showcase-content app-countdown-timer {\n    padding: 20px;\n    margin-bottom: 40px;\n    background-color: #FFF; }\n  .showcase-content app-show-hide-password {\n    background-color: #FFF;\n    padding: 0px 15px; }\n  .showcase-content app-show-hide-password ion-input {\n      --padding-start: 0px;\n      --padding-end: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvc2hvd2Nhc2UvY3VzdG9tLWNvbXBvbmVudHMvY3VzdG9tLWNvbXBvbmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQWEsRUFBQTtFQURmO0lBSUksd0NBQWE7SUFDYixrQ0FBUTtJQUNSLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFSdkI7SUFZSSx1QkFBdUIsRUFBQTtFQVozQjtJQWdCSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtFQWxCakI7SUFzQkksY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBdkJwQjtJQTJCSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUEvQnZCO01Ba0NNLDBCQUF5QjtjQUF6Qix5QkFBeUIsRUFBQTtFQWxDL0I7TUFzQ00sbUJBQW1CO01BQ25CLFdBQVcsRUFBQTtFQXZDakI7SUE0Q0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0IsRUFBQTtFQTlDMUI7SUFrREksc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBO0VBbkRyQjtNQXNETSxvQkFBZ0I7TUFDaEIsa0JBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL2N1c3RvbS1jb21wb25lbnRzL2N1c3RvbS1jb21wb25lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5jdXN0b20tY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcbiAgICB9XG5cbiAgICAmLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cbiAgfVxuXG4gIGFwcC1jb3VudGRvd24tdGltZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICB9XG5cbiAgYXBwLXNob3ctaGlkZS1wYXNzd29yZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/showcase/custom-components/custom-components.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/custom-components/custom-components.page.ts ***!
  \**********************************************************************/
/*! exports provided: CustomComponentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsPage", function() { return CustomComponentsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomComponentsPage = /** @class */ (function () {
    // Instead of hardcoded one
    // countdownDate = '12/01/2018';
    function CustomComponentsPage() {
        // Relative date (better to showcase UI micro-interactions)
        this.countdownDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
    }
    CustomComponentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase-custom-components',
            template: __webpack_require__(/*! ./custom-components.page.html */ "./src/app/showcase/custom-components/custom-components.page.html"),
            styles: [__webpack_require__(/*! ./custom-components.page.scss */ "./src/app/showcase/custom-components/custom-components.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomComponentsPage);
    return CustomComponentsPage;
}());



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
//# sourceMappingURL=custom-components-custom-components-module.js.map