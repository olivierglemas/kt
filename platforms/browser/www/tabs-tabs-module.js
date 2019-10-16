(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/styles/tabs.page.scss":
/*!********************************************!*\
  !*** ./src/app/tabs/styles/tabs.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-dark); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQ0FBUTtFQUNSLHVDQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9zdHlsZXMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"categories\">\n      <ion-icon src=\"./assets/sample-icons/tabs/categories.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Categories</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"user\">\n      <ion-icon src=\"./assets/sample-icons/tabs/profile.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Profile</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"notifications\">\n      <ion-icon src=\"./assets/sample-icons/tabs/notifications.svg\"></ion-icon>\n      <ion-label class=\"tab-title\">Notifications</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
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


var TabsPage = /** @class */ (function () {
    function TabsPage(menu) {
        this.menu = menu;
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(true);
    };
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./styles/tabs.page.scss */ "./src/app/tabs/styles/tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: '../categories/categories.module#CategoriesPageModule'
                    },
                    {
                        path: 'fashion',
                        loadChildren: '../fashion/listing/fashion-listing.module#FashionListingPageModule'
                    },
                    {
                        path: 'fashion/:productId',
                        loadChildren: '../fashion/details/fashion-details.module#FashionDetailsPageModule'
                    },
                    {
                        path: 'food',
                        loadChildren: '../food/listing/food-listing.module#FoodListingPageModule'
                    },
                    {
                        path: 'food/:productId',
                        loadChildren: '../food/details/food-details.module#FoodDetailsPageModule'
                    },
                    {
                        path: 'travel',
                        loadChildren: '../travel/listing/travel-listing.module#TravelListingPageModule'
                    },
                    {
                        path: 'travel/:productId',
                        loadChildren: '../travel/details/travel-details.module#TravelDetailsPageModule'
                    },
                    {
                        path: 'deals',
                        loadChildren: '../deals/listing/deals-listing.module#DealsListingPageModule'
                    },
                    {
                        path: 'deals/:productId',
                        loadChildren: '../deals/details/deals-details.module#DealsDetailsPageModule'
                    },
                    {
                        path: 'real-state',
                        loadChildren: '../real-state/listing/real-state-listing.module#RealStateListingPageModule'
                    },
                    {
                        path: 'real-state/:productId',
                        loadChildren: '../real-state/details/real-state-details.module#RealStateDetailsPageModule'
                    }
                ]
            },
            {
                path: 'user',
                children: [
                    {
                        path: '',
                        loadChildren: '../user/profile/user-profile.module#UserProfilePageModule'
                    },
                    {
                        path: 'friends',
                        loadChildren: '../user/friends/user-friends.module#UserFriendsPageModule'
                    }
                ]
            },
            {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: '../notifications/notifications.module#NotificationsPageModule'
                    }
                ]
            },
        ]
    },
    // /app/ redirect
    {
        path: '',
        redirectTo: 'app/categories',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map