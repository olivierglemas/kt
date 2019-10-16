(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-shell-app-shell-module"],{

/***/ "./src/app/showcase/app-shell/app-shell.module.ts":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.module.ts ***!
  \********************************************************/
/*! exports provided: AppShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellModule", function() { return AppShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_shell_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-shell.page */ "./src/app/showcase/app-shell/app-shell.page.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase/showcase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _app_shell_page__WEBPACK_IMPORTED_MODULE_7__["AppShellPage"]
    }
];
var AppShellModule = /** @class */ (function () {
    function AppShellModule() {
    }
    AppShellModule = __decorate([
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
                _app_shell_page__WEBPACK_IMPORTED_MODULE_7__["AppShellPage"]
            ],
            providers: [
                _showcase_service__WEBPACK_IMPORTED_MODULE_8__["ShowcaseService"]
            ]
        })
    ], AppShellModule);
    return AppShellModule;
}());



/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.html":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      App Shell Components\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"showcase-content\">\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Aspect Ratio</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      The <code>&lt;app-aspect-ratio&gt;</code> is a simple component that ensures a block will maintain the specified aspect ratio.\n    </p>\n    <p>\n      It uses an <a href=\"http://stackoverflow.com/a/10441480/1116959\" target=\"_blank\">old CSS technique</a> to adjust the height of the element based on its width (using padding-bottom).\n    </p>\n    <p>\n      This is a very handy component to prevent content from jumping around while the page is loading.\n    </p>\n    <p>\n      <b>Note:</b> The <code>&lt;app-aspect-ratio&gt;</code> component must be surrounded by a container element with a defined width, as this component will fill the parent width.\n    </p>\n<pre>\n<b>&lt;div style=\"width:80%; margin: 0px auto;\"&gt;</b>\n  &lt;app-aspect-ratio [ratio]=\"&#123;w:2, h:1&#125;\"&gt;\n    &lt;span&gt;This container will always have a 2:1 aspect ratio&lt;/span&gt;\n  &lt;/app-aspect-ratio&gt;\n<b>&lt;/div&gt;</b>\n</pre>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:2, h:1}\" style=\"background-color: #00AFFF;\">\n        <span style=\"margin: 10px; display: block;\">This container will always have a <b>2:1</b> aspect ratio</span>\n      </app-aspect-ratio>\n    </div>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Image Shell</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      This component enables to preload an image with an elegant shell.\n    </p>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>Set different animation options</h5>\n    <p>\n      You can choose between <b>no animation</b> (default), <b>spinner animation</b>, and <b>gradient background</b> animation\n    </p>\n    <h4>No animation (default)</h4>\n<pre>\n&lt;app-image-shell [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h4>Spinner animation</h4>\n<pre>\n&lt;app-image-shell <b>animation=\"spinner\"</b> [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h4>Gradient animation</h4>\n<pre>\n&lt;app-image-shell <b>animation=\"gradient\"</b> [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <p>\n      You can add/remove the following <b>Classes</b> to adjust the shell element behavior:\n    </p>\n    <h5>Overlay</h5>\n    <p>\n      This class adds a background overlay after the image has loaded.\n    </p>\n<pre>\n&lt;app-image-shell animation=\"spinner\" <b>class=\"add-overlay\"</b> [src]=\"''./assets/sample-images/travel/Travel2-64.47.png''\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [src]=\"'./assets/sample-images/travel/Travel2-64.47.png'\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <p>\n      You can also override these <b>CSS 4 variables</b> to adjust the shell element style\n    </p>\n    <h5>Background</h5>\n<pre>\napp-image-shell &#123;\n  --image-shell-loading-background: rgba(233, 30, 99, .25);\n&#125;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell style=\"--image-shell-loading-background: rgba(233, 30, 99, .25);\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Overlay</h5>\n<pre>\napp-image-shell &#123;\n  --image-shell-overlay-background: rgba(103, 58, 183, .40);\n&#125;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell style=\"--image-shell-overlay-background: rgba(103, 58, 183, .40);\" animation=\"spinner\" class=\"add-overlay\" [src]=\"'./assets/sample-images/travel/Travel2-64.47.png'\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Spinner</h5>\n<pre>\napp-image-shell &#123;\n  --image-shell-spinner-size: 40px;\n  --image-shell-spinner-color: #000000;\n&#125;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell style=\"--image-shell-spinner-size: 40px; --image-shell-spinner-color: #000000;\" animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Background Animation</h5>\n    <p>\n      <b>Note:</b> These properties are only applied when using <code>animation=\"gradient\"</code>.\n    </p>\n<pre>\napp-image-shell &#123;\n  --image-shell-loading-background: rgba(255, 3, 109, 0.6);\n  --image-shell-animation-color: rgba(156, 4, 68, 0.7);\n&#125;\n</pre>\n    <div style=\"width:30%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell style=\"\n          --image-shell-loading-background: rgba(255, 3, 109, 0.6);\n          --image-shell-animation-color: rgba(156, 4, 68, 0.7);\n        \" animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Border Radius</h5>\n<pre>\napp-image-shell &#123;\n  --image-shell-border-radius: 10px;\n&#125;\n</pre>\n    <ion-row>\n      <ion-col>\n        <div style=\"width:80%; margin: 0px auto;\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <app-image-shell style=\"--image-shell-border-radius: 10px;\" animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n          </app-aspect-ratio>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div style=\"width:80%; margin: 0px auto;\">\n          <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n            <app-image-shell style=\"--image-shell-border-radius: 10px;\" animation=\"gradient\" [src]=\"\" [alt]=\"\"></app-image-shell>\n          </app-aspect-ratio>\n        </div>\n      </ion-col>\n    </ion-row>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Cover Image mode</h2>\n    <p>\n      In addition to the default <code>&lt;app-image-shell&gt;</code>, you can specify a <b>cover</b> mode if you want to display your image as a background-image.\n    </p>\n    <p>\n      This is different from the default mode, because (although it's not mandatory) cover mode is designed to contain content (for example some text)\n    </p>\n<pre>\n<b>&lt;app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\"&gt;</b>\n  &lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;\n    Some Text\n  &lt;/app-aspect-ratio&gt;\n<b>&lt;/app-image-shell&gt;</b>\n</pre>\n    <app-image-shell class=\"add-overlay\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"\">\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n        <h4 style=\"margin: 10px;\">Some Text on top of a background-image container</h4>\n      </app-aspect-ratio>\n    </app-image-shell>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Usage</h2>\n    <p>\n      Let me explain you the differences between <b>default</b> and <b>cover</b> mode and when you should use each one.\n    </p>\n    <h5>Default Mode Usage</h5>\n    <p>\n      You should use the <b>default mode</b> when you are 100% confident on the aspect ratio of an image.\n    </p>\n    <p>\n      If the image ratio does not match the specified aspect ratio, the image will be stretched.\n    </p>\n    <p>\n      <b>Expected behavior:</b>\n      <br />\n      The image <b>WILL</b> be stretched.\n      <br />\n      We define an aspect ratio of <b>2:1</b> but the image has an aspect ratio of <b>1:1</b>.\n    </p>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n        <app-image-shell animation=\"spinner\" [src]=\"'https://lorempixel.com/200/200/people/1/'\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <p>\n      <b>Expected behavior:</b>\n      <br />\n      The image <b>WON'T</b> be stretched.\n      <br />\n      We define an aspect ratio of <b>1:1</b> that matches the image ratio of <b>1:1</b>.\n    </p>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n        <app-image-shell animation=\"spinner\" [src]=\"'https://lorempixel.com/200/200/people/1/'\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Cover Mode Usage</h5>\n    <p>\n      You should use the <b>cover mode</b> when you want to fill a container with an image and you don't care if the image is shown completly or a portion of it.\n    </p>\n    <p>\n      If the image ratio does not match the specified aspect ratio, the image will be cropped to fit the available space without stretching the image.\n    </p>\n    <p>\n      <b>Expected behavior:</b>\n      <br />\n      The image will be cropped to fill the available space.\n      <br />\n      We define an aspect ratio of <b>2:1</b> but the image has an aspect ratio of <b>1:1</b>.\n    </p>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-image-shell animation=\"spinner\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/200/200/people/1/'\">\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n        </app-aspect-ratio>\n      </app-image-shell>\n    </div>\n    <p>\n      You can also change the <b>background-position</b> property to adjust how the image is placed inside the container.\n    </p>\n    <p>\n      <b>Notice:</b> This only applies to <b>cover</b> mode.\n    </p>\n<pre>\napp-image-shell[mode=\"cover\"] &#123;\n  background-position: bottom right;\n&#125;\n</pre>\n    <div style=\"width:80%; margin: 0px auto;\">\n      <app-image-shell style=\"background-position: bottom right;\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/200/200/people/1/'\">\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n        </app-aspect-ratio>\n      </app-image-shell>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <h2>Maintain Aspect Ratio</h2>\n    <p>\n      We use the handy <code>&lt;app-aspect-ratio&gt;</code> to ensure the image shell mantains a specified aspect ratio.\n    </p>\n    <p>\n      By doing so, we prevent content from jumping around the page while assets (images) are loading.\n    </p>\n    <h5>Default mode</h5>\n    <p>\n      Just surround the <code>&lt;app-image-shell&gt;</code> with an <code>&lt;app-aspect-ratio&gt;</code> element\n    </p>\n<pre>\n<b>&lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;</b>\n  &lt;app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"&gt;&lt;/app-image-shell&gt;\n<b>&lt;/app-aspect-ratio&gt;</b>\n</pre>\n    <div style=\"width:60%; margin: 0px auto;\">\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n        <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"\"></app-image-shell>\n      </app-aspect-ratio>\n    </div>\n    <h5>Cover mode</h5>\n    <p>\n      When using the <b>cover</b> mode we need to include the <code>&lt;app-aspect-ratio&gt;</code> inside the <code>&lt;app-image-shell&gt;</code> element instead of surrounding it.\n    </p>\n<pre>\n&lt;app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay\" [src]=\"\"&gt;\n  <b>&lt;app-aspect-ratio [ratio]=\"&#123;w:3, h:2&#125;\"&gt;</b>\n    Some Text\n  <b>&lt;/app-aspect-ratio&gt;</b>\n&lt;/app-image-shell&gt;\n</pre>\n    <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"\">\n      <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n        <h4 style=\"margin: 10px;\">Some Text on top of a background-image container</h4>\n      </app-aspect-ratio>\n    </app-image-shell>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Text Shell</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      This component is useful when you want to show a loading indicator while fetching text data from the server.\n    </p>\n    <p>\n      The <code>&lt;app-text-shell&gt;</code> basically works by wrapping the text node with a loading indicator while you are fetching data.\n    </p>\n    <p>\n      While there are empty values the component adds some 'loading' styles and animations. Whereas while there are non empty values, the loading state is removed.\n    </p>\n    <p>\n      Try toggling the loading state of the text shells below by changing the value of this textarea.\n    </p>\n    <ion-textarea style=\"--background: #EEE;\" placeholder=\"When this text is empty the text-shell will show the loading state.\" clearOnEdit=\"true\" [(ngModel)]=\"sampleTextShellData\"></ion-textarea>\n    <p>\n      You can reset the 'loading' state by clearing the textarea value.\n    </p>\n  </section>\n  <section class=\"showcase-section\">\n    <h4>No animation (default)</h4>\n    <p>\n      Single line example\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px;\">\n      <app-text-shell [data]=\"sampleTextShellData\"></app-text-shell>\n    </div>\n    <p>\n      Multi-line example\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px;\">\n      <p>\n        <app-text-shell [data]=\"sampleTextShellData\" lines=\"3\"></app-text-shell>\n      </p>\n    </div>\n    <p>\n      On top of another element (with transparent background)\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\n      <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/400/200/abstract/1/'\">\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n          <p style=\"margin: 20px 40px;\">\n            <app-text-shell [data]=\"sampleTextShellData\" lines=\"3\"></app-text-shell>\n          </p>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <h4>Bouncing animation</h4>\n    <p>\n      Single line example\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px;\">\n      <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\"></app-text-shell>\n    </div>\n    <p>\n      Multi-line example\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px;\">\n      <p>\n        <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\" lines=\"3\"></app-text-shell>\n      </p>\n    </div>\n    <p>\n      On top of another element (with transparent background)\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\n      <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/400/200/nature/1/'\">\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n          <p style=\"margin: 20px 40px;\">\n            <app-text-shell [data]=\"sampleTextShellData\" animation=\"bouncing\" lines=\"3\"></app-text-shell>\n          </p>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <h4>Gradient animation</h4>\n    <p>\n      Single line example\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px;\">\n      <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\"></app-text-shell>\n    </div>\n    <p>\n      Multi-line example\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px;\">\n      <p>\n        <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\" lines=\"3\"></app-text-shell>\n      </p>\n    </div>\n    <p>\n      On top of another element (with transparent background)\n    </p>\n    <div style=\"background-color: #FFF; padding: 20px; color: #FFF; font-weight: 500;\">\n      <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"'https://lorempixel.com/400/200/city/1/'\">\n        <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n          <p style=\"margin: 20px 40px;\">\n            <app-text-shell [data]=\"sampleTextShellData\" animation=\"gradient\" lines=\"3\"></app-text-shell>\n          </p>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </div>\n  </section>\n  <section class=\"showcase-section\">\n    <h4>Other use cases</h4>\n    <p>\n      The <code>&lt;app-text-shell&gt;</code> element can be used alone or wrapped with a text tag (<b>h1</b>, <b>h2</b>, <b>h3</b>, <b>p</b>, etc).\n    </p>\n    <p>\n      In case you wrap it with a heading element, we included basic styles (<code>src/theme/shell-defaults.scss</code>) to match the different heading styles (mainly line-height associated to each heading).\n    </p>\n<pre>\n:root &#123;\n  h1 > app-text-shell &#123;\n    --text-shell-line-height: 32px;\n    --text-shell-line-color: #CCC;\n  &#125;\n&#125;\n</pre>\n    <p>\n      By matching the line-height of the text-shell with the line-height of the wrapper element, we avoid page height bumps after the data gets loaded into the shells.\n    </p>\n<pre>\n&lt;h1&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h1&gt;\n\n&lt;h2&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h2&gt;\n\n&lt;h3&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h3&gt;\n\n&lt;h4&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h4&gt;\n\n&lt;h5&gt;\n  &lt;app-text-shell [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/h5&gt;\n</pre>\n    <h1>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h1>\n    <h2>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h2>\n    <h3>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h3>\n    <h4>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h4>\n    <h5>\n      <app-text-shell [data]=\"\"></app-text-shell>\n    </h5>\n  </section>\n  <section class=\"showcase-section\">\n    <p>\n      You can add/remove the following <b>Attributes</b> to adjust the shell element behavior\n    </p>\n    <h5>Multi-line support</h5>\n    <p>\n      You can set up-to 6 lines\n    </p>\n<pre>\n&lt;p&gt;\n  &lt;app-text-shell <b>lines=\"6\"</b> [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/p&gt;\n</pre>\n    <p>\n      <app-text-shell style=\"--text-shell-line-color: #DDD;\" [data]=\"\" lines=\"6\"></app-text-shell>\n    </p>\n    <h5>Set different animation options</h5>\n    <p>\n      You can choose between <b>no animation</b> (default), <b>bouncing animation</b>, and <b>gradient background with line masks on top</b>\n    </p>\n<pre>\n&lt;p&gt;\n  &lt;app-text-shell <b>animation=\"bouncing\"</b> lines=\"2\" [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/p&gt;\n</pre>\n    <p>\n      <app-text-shell style=\"--text-shell-line-color: #DDD;\" [data]=\"\" animation=\"bouncing\" lines=\"2\"></app-text-shell>\n    </p>\n<pre>\n&lt;p&gt;\n  &lt;app-text-shell <b>animation=\"gradient\"</b> lines=\"2\" [data]=\"\"&gt;&lt;/app-text-shell&gt;\n&lt;/p&gt;\n</pre>\n<pre>\napp-text-shell &#123;\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent;\n&#125;\n</pre>\n    <p style=\"padding: 5px; background: #FFF;\">\n      <app-text-shell style=\"--text-shell-line-color: transparent; --text-shell-background: #FFF;\" [data]=\"\" animation=\"gradient\" lines=\"2\"></app-text-shell>\n    </p>\n    <p>\n      In this mode, the <code>--text-shell-background</code> property refers to the masks colors.\n    </p>\n    <p>\n      <b>Note:</b> When using a <code>gradient</code> animation, make sure you set the line-color to transparent so the background animation that's beneath the masks can be seen.\n    </p>\n  </section>\n  <section class=\"showcase-section\">\n    <p>\n      You can also override these <b>CSS 4 variables</b> to adjust the shell element style\n    </p>\n    <h5>Line color</h5>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-color: rgba(233, 30, 99, .25);\n&#125;\n</pre>\n    <h3>\n      <app-text-shell style=\"--text-shell-line-color: rgba(233, 30, 99, .25);\" [data]=\"\"></app-text-shell>\n    </h3>\n    <h5>Background</h5>\n    <p>\n      Background by default is set to <b>transparent</b>.\n    </p>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-color: #FFFFFF;\n  --text-shell-background: #000000;\n&#125;\n</pre>\n    <p style=\"padding: 5px; background: #000000;\">\n      <app-text-shell style=\"--text-shell-line-color: #FFFFFF; --text-shell-background: #000000;\" [data]=\"\" lines=\"3\"></app-text-shell>\n    </p>\n    <h5>Background Animation</h5>\n    <p>\n      <b>Note:</b> These properties are only applied when using <code>animation=\"gradient\"</code>.\n    </p>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-color: transparent;\n  --text-shell-background: #000000;\n  --text-shell-animation-background: rgba(255, 3, 109, 0.6);\n  --text-shell-animation-color: rgba(156, 4, 68, 0.7);\n&#125;\n</pre>\n    <p style=\"padding: 5px; background: #000000;\">\n      <app-text-shell style=\"\n        --text-shell-line-color: transparent;\n        --text-shell-background: #000000;\n        --text-shell-animation-background: rgba(255, 3, 109, 0.6);\n        --text-shell-animation-color: rgba(156, 4, 68, 0.7);\n      \" [data]=\"\" lines=\"3\" animation=\"gradient\"></app-text-shell>\n    </p>\n    <h5>Line height</h5>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-height: 40px;\n&#125;\n</pre>\n    <h3>\n      <app-text-shell style=\"--text-shell-line-height: 40px;\" [data]=\"\"></app-text-shell>\n    </h3>\n    <h5>Line gutter</h5>\n<pre>\napp-text-shell &#123;\n  --text-shell-line-gutter: 10px;\n&#125;\n</pre>\n    <p>\n      <app-text-shell style=\"--text-shell-line-gutter: 10px; --text-shell-line-color: #CCC;\" [data]=\"\" lines=\"4\"></app-text-shell>\n    </p>\n  </section>\n\n  <ion-item-divider sticky=\"true\">\n    <ion-label>Binding Data to Shell Elements</ion-label>\n  </ion-item-divider>\n  <section class=\"showcase-section\">\n    <p>\n      You can combine the different shell elements in multiple ways to fit your needs\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\n      <ion-col size=\"12\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center;\">Text on top of a background-image container</h4>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"spinner\" [src]=\"\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell [data]=\"\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell [data]=\"\" lines=\"3\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>Fetch data with the HttpClient</h5>\n    <p>\n      Let's set a timeout and fetch data using the <code>HttpClient</code>\n    </p>\n    <p>\n      Data coming in <b>{{ simpleFetchCountdown }} seconds</b>\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\n      <ion-col size=\"12\">\n        <app-image-shell animation=\"gradient\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"simpleFetchData?.cover\" [alt]=\"'Sample Image Cover'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"gradient\" [src]=\"simpleFetchData?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell animation=\"gradient\" [data]=\"simpleFetchData?.title\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell animation=\"gradient\" [data]=\"simpleFetchData?.description\" lines=\"3\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-button (click)=\"showcaseShellSimpleFetch(3)\" [disabled]=\"simpleFetchButtonDisabled\">Fetch more Data</ion-button>\n  </section>\n  <section class=\"showcase-section\">\n    <h5>Fetch data using ShellProvider</h5>\n    <p>\n      Using the <code>ShellProvider</code> utility you can reduce the amount of boilerplate from the previous example and achieve the same behavior.\n    </p>\n    <ion-row style=\"background-color: #FFF; padding: 10px; margin: 20px;\">\n      <ion-col size=\"12\">\n        <app-image-shell animation=\"spinner\" class=\"add-overlay\" [mode]=\"'cover'\" [src]=\"(shellProviderData | async)?.cover\" [alt]=\"'Sample Image Cover'\">\n          <app-aspect-ratio [ratio]=\"{w:2, h:1}\">\n            <h4 style=\"margin: 10px; text-align: center; color: #FFF;\">Heading on top of a cover image</h4>\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"4\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell animation=\"spinner\" [src]=\"(shellProviderData | async)?.image\" [alt]=\"'Sample Image'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h3 style=\"margin-top: 0px;\">\n          <app-text-shell [data]=\"(shellProviderData | async)?.title\"></app-text-shell>\n        </h3>\n        <p>\n          <app-text-shell [data]=\"(shellProviderData | async)?.description\" lines=\"3\"></app-text-shell>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-button (click)=\"showcaseShellProvider()\" [disabled]=\"shellProviderButtonDisabled\">Fetch more Data</ion-button>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.scss":
/*!********************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase-content {\n  --background: var(--app-background); }\n  .showcase-content ion-item-divider {\n    --background: var(--ion-color-secondary);\n    --color: var(--ion-color-lightest);\n    text-transform: uppercase;\n    font-weight: 500;\n    letter-spacing: 1px; }\n  .showcase-content .showcase-section {\n    margin: 20px 20px 100px; }\n  .showcase-content pre {\n    font-size: 14px;\n    background: #CCC;\n    padding: 10px; }\n  .showcase-content code {\n    color: #F92672;\n    font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvc2hvd2Nhc2UvYXBwLXNoZWxsL2FwcC1zaGVsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBYSxFQUFBO0VBRGY7SUFJSSx3Q0FBYTtJQUNiLGtDQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtFQVJ2QjtJQVlJLHVCQUF1QixFQUFBO0VBWjNCO0lBZ0JJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0VBbEJqQjtJQXNCSSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaG93Y2FzZS9hcHAtc2hlbGwvYXBwLXNoZWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnNob3djYXNlLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDEwMHB4O1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgY29kZSB7XG4gICAgY29sb3I6ICNGOTI2NzI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/showcase/app-shell/app-shell.page.ts":
/*!******************************************************!*\
  !*** ./src/app/showcase/app-shell/app-shell.page.ts ***!
  \******************************************************/
/*! exports provided: AppShellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellPage", function() { return AppShellPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_shell_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/shell-provider */ "./src/app/utils/shell-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// You can use a plain interface as a shell model
// interface IShell {
//   cover: string;
//   image: string;
//   title: string;
//   description: string;
// }
// You can also use a Class object as a shell model
// import { ShowcaseShellModel } from '../showcase-shell.model';
var AppShellPage = /** @class */ (function () {
    function AppShellPage(http) {
        this.http = http;
        this.sampleTextShellData = '';
        // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
        // shellProviderData: Observable<IShell>;
        // shellProviderData: Observable<ShowcaseShellModel>;
        // Aux properties for the Simple Fetch (HttpClient) showcase
        this.simpleFetchButtonDisabled = true;
        this.simpleFetchCountdown = 0;
        // Aux properties for the ShellProvider showcase
        this.shellProviderButtonDisabled = true;
    }
    AppShellPage.prototype.ngOnInit = function () {
        this.showcaseShellSimpleFetch(10);
        this.showcaseShellProvider();
    };
    AppShellPage.prototype.showcaseShellSimpleFetch = function (countdown) {
        var _this = this;
        // Assign an (empty / null) value to the shell object to restore it's 'loading' state
        this.simpleFetchData = null;
        // Prevent rage clicks on the 'Fetch more Data' button
        this.simpleFetchButtonDisabled = true;
        // Start a countdown and an interval before executing the fetch function
        this.simpleFetchCountdown = countdown;
        this.simpleFetchInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        // Start a countdown to showcase the shell elements animations for a few seconds before the data get's fetched into the shell object
        var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(countdown * 1000);
        // When timer emits after X seconds, complete source
        this.simpleFetchInterval
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(timer$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.simpleFetchButtonDisabled = false; }))
            .subscribe({
            next: function () {
                _this.simpleFetchCountdown--;
            },
            complete: function () {
                _this.simpleFetchCountdown = 0;
                // Once the countdown ends, fetch data using the HttpClient
                // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
                // this.http.get<IShell>('./assets/sample-data/showcase/shell.json');
                // this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json');
                _this.http.get('./assets/sample-data/showcase/shell.json')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // Force Observable to complete
                ).subscribe(function (val) {
                    console.log('Fetching shell data using the HttpClient', val);
                    _this.simpleFetchData = val;
                });
            }
        });
    };
    AppShellPage.prototype.showcaseShellProvider = function () {
        var _this = this;
        // Prevent rage clicks on the 'Fetch more Data' button
        this.shellProviderButtonDisabled = true;
        var shellObject = {
            cover: '',
            image: '',
            title: '',
            description: ''
        };
        var shellProvider = new _utils_shell_provider__WEBPACK_IMPORTED_MODULE_4__["ShellProvider"](shellObject, this.http.get('./assets/sample-data/showcase/shell.json')
        // You can also define the type of the property using the IShell interface or the ShowcaseShellModel class
        // this.http.get<IShell>('./assets/sample-data/showcase/shell.json');
        // this.http.get<ShowcaseShellModel>('./assets/sample-data/showcase/shell.json');
        );
        this.shellProviderData = shellProvider.observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2), // ShellProvider will emit a mock object and the real data fetched from the source. Emit those two values and then complete.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.shellProviderButtonDisabled = false; }));
    };
    AppShellPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showcase-shell',
            template: __webpack_require__(/*! ./app-shell.page.html */ "./src/app/showcase/app-shell/app-shell.page.html"),
            styles: [__webpack_require__(/*! ./app-shell.page.scss */ "./src/app/showcase/app-shell/app-shell.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppShellPage);
    return AppShellPage;
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
//# sourceMappingURL=app-shell-app-shell-module.js.map