(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-not-found-page-not-found-module"],{

/***/ "./src/app/page-not-found/page-not-found.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found.page */ "./src/app/page-not-found/page-not-found.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PageNotFoundModule = /** @class */ (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _page_not_found_page__WEBPACK_IMPORTED_MODULE_6__["PageNotFound"]
                    }
                ])
            ],
            declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_6__["PageNotFound"]]
        })
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.page.html":
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Page Not Found\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"not-found-content\">\n  <div class=\"illustration-wrapper\">\n    <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n      <app-image-shell [src]=\"'./assets/images/page-not-found.svg'\" [alt]=\"'not found page'\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"not-found-title\">404</div>\n  <div class=\"not-found-text\">Page not found</div>\n  <ion-button class=\"go-home-btn\" [routerLink]=\"['/app/categories']\" expand=\"block\" fill=\"outline\">Back to Home page</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.ts ***!
  \*******************************************************/
/*! exports provided: PageNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFound = /** @class */ (function () {
    function PageNotFound(menu) {
        this.menu = menu;
    }
    PageNotFound.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    PageNotFound = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.page.html */ "./src/app/page-not-found/page-not-found.page.html"),
            styles: [__webpack_require__(/*! ./styles/page-not-found.page.scss */ "./src/app/page-not-found/styles/page-not-found.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], PageNotFound);
    return PageNotFound;
}());



/***/ }),

/***/ "./src/app/page-not-found/styles/page-not-found.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/page-not-found/styles/page-not-found.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin); }\n\n.not-found-content {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.not-found-content .illustration-wrapper {\n    margin: 0px 10%; }\n\n.not-found-content .not-found-title {\n    text-align: center;\n    font-size: 30px;\n    font-weight: 500; }\n\n.not-found-content .not-found-text {\n    text-align: center;\n    font-size: 22px;\n    margin-bottom: 40px;\n    font-weight: 500; }\n\n.not-found-content .go-home-btn {\n    margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvcGFnZS1ub3QtZm91bmQvc3R5bGVzL3BhZ2Utbm90LWZvdW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFjLEVBQUE7O0FBSWhCO0VBQ0UsbUNBQWdCO0VBQ2hCLGlDQUFjO0VBQ2QsaUNBQWM7RUFDZCxvQ0FBaUIsRUFBQTs7QUFKbkI7SUFPSSxlQUFlLEVBQUE7O0FBUG5CO0lBV0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFicEI7SUFpQkksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7O0FBcEJwQjtJQXdCSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9zdHlsZXMvcGFnZS1ub3QtZm91bmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLm5vdC1mb3VuZC1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgLmlsbHVzdHJhdGlvbi13cmFwcGVyIHtcbiAgICBtYXJnaW46IDBweCAxMCU7XG4gIH1cblxuICAubm90LWZvdW5kLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAubm90LWZvdW5kLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmdvLWhvbWUtYnRuIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuIl19 */"

/***/ })

}]);
//# sourceMappingURL=page-not-found-page-not-found-module.js.map