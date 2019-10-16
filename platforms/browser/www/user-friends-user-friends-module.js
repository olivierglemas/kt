(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-friends-user-friends-module"],{

/***/ "./src/app/user/friends/styles/user-friends.md.scss":
/*!**********************************************************!*\
  !*** ./src/app/user/friends/styles/user-friends.md.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.plt-mobile.md) .user-details-section .user-actions-wrapper {\n  max-width: 12ex;\n  max-width: 12ch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvdXNlci9mcmllbmRzL3N0eWxlcy91c2VyLWZyaWVuZHMubWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLGVBQWU7RUFDZixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2ZyaWVuZHMvc3R5bGVzL3VzZXItZnJpZW5kcy5tZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dCgucGx0LW1vYmlsZS5tZCkge1xuICAudXNlci1kZXRhaWxzLXNlY3Rpb24ge1xuICAgIC51c2VyLWFjdGlvbnMtd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IDEyZXg7XG4gICAgICBtYXgtd2lkdGg6IDEyY2g7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/friends/styles/user-friends.page.scss":
/*!************************************************************!*\
  !*** ./src/app/user/friends/styles/user-friends.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-background: var(--app-background);\n  --page-segment-indicator-height: 2px; }\n\n.user-friends-segment {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  background-color: var(--page-segment-background); }\n\n.user-friends-segment ion-segment-button {\n    --padding-end: var(--page-margin);\n    --padding-start: var(--page-margin);\n    --background: var(--page-segment-background);\n    --color: rgba(var(--ion-color-dark-rgb), 0.4);\n    --color-checked: var(--ion-color-dark);\n    --indicator-color-checked: var(--ion-color-dark);\n    text-transform: capitalize;\n    min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height)); }\n\n.user-friends-segment ion-segment-button ion-label {\n      margin-top: calc(var(--page-margin) / 2);\n      margin-bottom: calc(var(--page-margin) / 4); }\n\nion-searchbar.friends-searchbar {\n  padding: var(--page-margin); }\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3); }\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center; }\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin); }\n\nion-item.friend-item:last-child {\n    --border-style: none;\n    --padding-bottom: 0px;\n    --inner-padding-bottom: 0px; }\n\nion-item.friend-item .user-details-section {\n    --ion-grid-column-padding: 0px;\n    width: 100%;\n    align-items: center; }\n\nion-item.friend-item .user-details-section .user-data-wrapper {\n      padding-left: var(--page-margin);\n      padding-right: calc(var(--page-margin) / 2);\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n        margin-bottom: calc(var(--page-margin) / 2); }\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n        margin: 0px;\n        margin-bottom: 4px;\n        font-size: 16px; }\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n        margin: 0px;\n        color: rgba(var(--ion-color-dark-rgb), 0.4);\n        font-size: 14px; }\n\nion-item.friend-item .user-details-section .user-actions-wrapper {\n      font-size: 14px;\n      max-width: 10ex;\n      max-width: 10ch; }\n\nion-item.friend-item .user-details-section .user-actions-wrapper .user-action {\n        margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvdXNlci9mcmllbmRzL3N0eWxlcy91c2VyLWZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUNBQWM7RUFFZCw0Q0FBcUI7RUFDckIsZ0RBQTBCO0VBQzFCLG9DQUFnQyxFQUFBOztBQUlsQztFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7RUFDVixnREFBZ0QsRUFBQTs7QUFKbEQ7SUFPSSxpQ0FBYztJQUNkLG1DQUFnQjtJQUNoQiw0Q0FBYTtJQUNiLDZDQUFRO0lBQ1Isc0NBQWdCO0lBQ2hCLGdEQUEwQjtJQUUxQiwwQkFBMEI7SUFDMUIsaUZBQWlGLEVBQUE7O0FBZnJGO01Ba0JNLHdDQUF3QztNQUN4QywyQ0FBMkMsRUFBQTs7QUFLakQ7RUFDRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSwrQkFBK0I7RUFDL0IsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0Usb0NBQW9DO0VBQ3BDLDJDQUEyQztFQUMzQyxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwwQkFBc0I7RUFDdEIsd0JBQW9CO0VBQ3BCLG9CQUFnQjtFQUNoQixrQkFBYztFQUNkLG9DQUFpQjtFQUNqQiwwQ0FBdUIsRUFBQTs7QUFOekI7SUFTSSxvQkFBZTtJQUNmLHFCQUFpQjtJQUNqQiwyQkFBdUIsRUFBQTs7QUFYM0I7SUFlSSw4QkFBMEI7SUFFMUIsV0FBVztJQUNYLG1CQUFtQixFQUFBOztBQWxCdkI7TUFxQk0sZ0NBQWdDO01BQ2hDLDJDQUEyQztNQUMzQyxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QixFQUFBOztBQXpCN0I7UUE2QlUsMkNBQTJDLEVBQUE7O0FBN0JyRDtRQWlDVSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWUsRUFBQTs7QUFuQ3pCO1FBdUNVLFdBQVc7UUFDWCwyQ0FBMkM7UUFDM0MsZUFBZSxFQUFBOztBQXpDekI7TUErQ00sZUFBZTtNQUtmLGVBQWU7TUFDZixlQUFlLEVBQUE7O0FBckRyQjtRQXdEUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2ZyaWVuZHMvc3R5bGVzL3VzZXItZnJpZW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuXG4gIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQ6IDJweDtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4udXNlci1mcmllbmRzLXNlZ21lbnQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2Utc2VnbWVudC1iYWNrZ3JvdW5kKTtcbiAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWluLWhlaWdodDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLSB2YXIoLS1wYWdlLXNlZ21lbnQtaW5kaWNhdG9yLWhlaWdodCkpO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgIH1cbiAgfVxufVxuXG5pb24tc2VhcmNoYmFyLmZyaWVuZHMtc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uZnJpZW5kcy1saXN0IHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbn1cblxuLmVtcHR5LWxpc3QtbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbS5mcmllbmQtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuXG4gIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWpvYiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAvLyBNYWtlIHN1cmUgd2UgYWx3YXlzIGhhdmUgc3BhY2UgZm9yIDEwIGNoYXJhY3RlcnNcbiAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cbiAgICAgIG1heC13aWR0aDogMTBleDsgLy8gVGhlICd4JyBjaGFyYWN0ZXIgaXMgc2VtaS1zcXVhcmUgY2hhclxuICAgICAgbWF4LXdpZHRoOiAxMGNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcblxuICAgICAgLnVzZXItYWN0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/friends/styles/user-friends.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/friends/styles/user-friends.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--page-border-radius); }\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 50%; }\n\n.user-name > app-text-shell.text-loaded {\n    max-width: unset; }\n\n.user-job > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 70%; }\n\n.user-job > app-text-shell.text-loaded {\n    max-width: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvdXNlci9mcmllbmRzL3N0eWxlcy91c2VyLWZyaWVuZHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUE0QixFQUFBOztBQUc5QjtFQUNFLDhCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBRmhCO0lBS0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsOEJBQXlCO0VBQ3pCLGNBQWMsRUFBQTs7QUFGaEI7SUFLSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZnJpZW5kcy9zdHlsZXMvdXNlci1mcmllbmRzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi51c2VyLWpvYiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/friends/user-friends.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/friends/user-friends.module.ts ***!
  \*****************************************************/
/*! exports provided: UserFriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFriendsPageModule", function() { return UserFriendsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_friends_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-friends.page */ "./src/app/user/friends/user-friends.page.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _user_friends_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-friends.resolver */ "./src/app/user/friends/user-friends.resolver.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _user_friends_page__WEBPACK_IMPORTED_MODULE_5__["UserFriendsPage"],
        resolve: {
            data: _user_friends_resolver__WEBPACK_IMPORTED_MODULE_7__["UserFriendsResolver"]
        }
    }
];
var UserFriendsPageModule = /** @class */ (function () {
    function UserFriendsPageModule() {
    }
    UserFriendsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            ],
            declarations: [_user_friends_page__WEBPACK_IMPORTED_MODULE_5__["UserFriendsPage"]],
            providers: [
                _user_friends_resolver__WEBPACK_IMPORTED_MODULE_7__["UserFriendsResolver"],
                _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
            ]
        })
    ], UserFriendsPageModule);
    return UserFriendsPageModule;
}());



/***/ }),

/***/ "./src/app/user/friends/user-friends.page.html":
/*!*****************************************************!*\
  !*** ./src/app/user/friends/user-friends.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/user\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-friends-content\">\n  <ion-segment class=\"user-friends-segment\" mode=\"md\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button mode=\"md\" checked=\"true\" value=\"friends\">\n      <ion-label>Friends</ion-label>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"followers\">\n      <ion-label>Followers</ion-label>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"following\">\n      <ion-label>Following</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-searchbar class=\"friends-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\"></ion-searchbar>\n\n  <ng-template #friendItem let-friend=\"friend\">\n    <ion-row class=\"user-details-section\">\n      <ion-col class=\"user-image-wrapper\" size=\"2\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"friend.image\" [alt]=\"'friend'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n          <h3 class=\"user-name\">\n            <app-text-shell [data]=\"friend.name\"></app-text-shell>\n          </h3>\n          <h5 class=\"user-job\">\n            <app-text-shell [data]=\"friend.job\"></app-text-shell>\n          </h5>\n        </div>\n      </ion-col>\n      <ion-col class=\"user-actions-wrapper\">\n        <ion-button *ngIf=\"!friend.following\" class=\"user-action\" expand=\"block\" size=\"small\" color=\"primary\">Follow</ion-button>\n        <ion-button *ngIf=\"friend.following\" class=\"user-action\" expand=\"block\" size=\"small\" color=\"light\">Following</ion-button>\n      </ion-col>\n    </ion-row>\n  </ng-template>\n\n  <section [hidden]=\"segmentValue !== 'friends'\">\n    <ion-list class=\"friends-list\" *ngIf=\"friendsList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of friendsList\">\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"friendsList.length <= 0\">\n      <h3 class=\"empty-list-message\">No Friends</h3>\n    </ng-container>\n  </section>\n\n  <section [hidden]=\"segmentValue !== 'followers'\">\n    <ion-list class=\"friends-list\" *ngIf=\"followersList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of followersList\">\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"followersList.length <= 0\">\n      <h3 class=\"empty-list-message\">No Followers</h3>\n    </ng-container>\n  </section>\n\n  <section [hidden]=\"segmentValue !== 'following'\">\n    <ion-list class=\"friends-list\" *ngIf=\"followingList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of followingList\">\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"followingList.length <= 0\">\n      <h3 class=\"empty-list-message\">No Following</h3>\n    </ng-container>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/user/friends/user-friends.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user/friends/user-friends.page.ts ***!
  \***************************************************/
/*! exports provided: UserFriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFriendsPage", function() { return UserFriendsPage; });
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


var UserFriendsPage = /** @class */ (function () {
    function UserFriendsPage(route) {
        this.route = route;
        this.segmentValue = 'friends';
        this.searchQuery = '';
        this.showFilters = false;
    }
    Object.defineProperty(UserFriendsPage.prototype, "isShell", {
        get: function () {
            return (this.data && this.data.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    UserFriendsPage.prototype.ngOnInit = function () {
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
                                _this.data = pageData;
                                _this.friendsList = _this.data.friends;
                                _this.followersList = _this.data.followers;
                                _this.followingList = _this.data.following;
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
    UserFriendsPage.prototype.segmentChanged = function (ev) {
        this.segmentValue = ev.detail.value;
        // Check if there's any filter and apply it
        this.searchList();
    };
    UserFriendsPage.prototype.searchList = function () {
        var query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';
        if (this.segmentValue === 'friends') {
            this.friendsList = this.filterList(this.data.friends, query);
        }
        else if (this.segmentValue === 'followers') {
            this.followersList = this.filterList(this.data.followers, query);
        }
        else if (this.segmentValue === 'following') {
            this.followingList = this.filterList(this.data.following, query);
        }
    };
    UserFriendsPage.prototype.filterList = function (list, query) {
        return list.filter(function (item) { return item.name.toLowerCase().includes(query.toLowerCase()); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-shell'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], UserFriendsPage.prototype, "isShell", null);
    UserFriendsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-friends',
            template: __webpack_require__(/*! ./user-friends.page.html */ "./src/app/user/friends/user-friends.page.html"),
            styles: [__webpack_require__(/*! ./styles/user-friends.page.scss */ "./src/app/user/friends/styles/user-friends.page.scss"), __webpack_require__(/*! ./styles/user-friends.shell.scss */ "./src/app/user/friends/styles/user-friends.shell.scss"), __webpack_require__(/*! ./styles/user-friends.md.scss */ "./src/app/user/friends/styles/user-friends.md.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserFriendsPage);
    return UserFriendsPage;
}());



/***/ }),

/***/ "./src/app/user/friends/user-friends.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/friends/user-friends.resolver.ts ***!
  \*******************************************************/
/*! exports provided: UserFriendsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFriendsResolver", function() { return UserFriendsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFriendsResolver = /** @class */ (function () {
    function UserFriendsResolver(userService) {
        this.userService = userService;
    }
    UserFriendsResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.userService.getFriendsDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    UserFriendsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserFriendsResolver);
    return UserFriendsResolver;
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
//# sourceMappingURL=user-friends-user-friends-module.js.map