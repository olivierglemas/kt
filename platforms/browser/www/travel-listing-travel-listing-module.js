(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-listing-travel-listing-module"],{

/***/ "./src/app/travel/listing/styles/travel-listing.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/travel/listing/styles/travel-listing.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-color: #00AFFF; }\n\n.listing-item {\n  padding: 0px 0px var(--page-margin);\n  background-color: var(--page-background);\n  border-bottom: calc(var(--page-margin) / 2) solid var(--page-color); }\n\n.listing-item .image-row {\n    --ion-grid-column-padding: 0px; }\n\n.listing-item .image-row .item-image {\n      cursor: pointer; }\n\n.listing-item .image-row .item-image:focus {\n        outline: none; }\n\n.listing-item .image-row .content-inside-item-image {\n      padding: 0px 12%;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      flex-direction: column; }\n\n.listing-item .image-row .content-inside-item-image .item-icon {\n        width: 54px;\n        align-self: center;\n        margin-bottom: 24px; }\n\n.listing-item .image-row .content-inside-item-image .item-cta {\n        margin: 0px auto;\n        padding: calc(var(--page-margin) / 2) calc(var(--page-margin));\n        text-transform: uppercase;\n        font-size: 20px;\n        font-weight: 700;\n        text-align: center;\n        color: var(--ion-color-light);\n        display: flex;\n        align-items: center;\n        background-color: var(--page-color);\n        border-radius: var(--app-fair-radius); }\n\n.listing-item .image-row .content-inside-item-image .item-cta .cta-icon {\n          font-size: 26px;\n          margin-left: calc(var(--page-margin) / 2); }\n\n.listing-item .info-row {\n    --ion-grid-column-padding: 0px;\n    padding: var(--page-margin);\n    padding-bottom: calc(var(--page-margin) / 2); }\n\n.listing-item .info-row .main-info-col {\n      padding-right: calc(var(--page-margin) / 2); }\n\n.listing-item .info-row .item-name {\n      margin: 0px 0px var(--page-margin);\n      text-transform: capitalize;\n      font-size: 16px; }\n\n.listing-item .info-row .item-name .name-anchor {\n        color: var(--ion-color-dark);\n        display: block;\n        text-decoration: none; }\n\n.listing-item .info-row .item-description {\n      margin: 0px 0px calc(var(--page-margin) / 2);\n      color: var(--ion-color-dark-shade);\n      font-size: 14px;\n      line-height: 1.3; }\n\n.listing-item .info-row .item-address {\n      margin: 0px;\n      color: var(--ion-color-dark-tint);\n      font-size: 12px; }\n\n.listing-item .stats-row {\n    --ion-grid-column-padding: 0px;\n    padding: 0px var(--page-margin);\n    justify-content: flex-end; }\n\n.listing-item .stats-row .stats-icon {\n      font-size: 24px; }\n\n.listing-item .stats-row .item-rating {\n      display: inline-flex;\n      text-align: center;\n      justify-content: flex-end;\n      margin-right: 10px; }\n\n.listing-item .stats-row .item-rating .rating-value {\n        font-size: 16px;\n        margin-right: 5px;\n        margin: auto; }\n\n.listing-item .stats-row .item-reviews {\n      display: inline-flex;\n      text-align: center;\n      justify-content: flex-end; }\n\n.listing-item .stats-row .item-reviews .reviews-count {\n        font-size: 16px;\n        margin-right: 5px;\n        margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvdHJhdmVsL2xpc3Rpbmcvc3R5bGVzL3RyYXZlbC1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFjO0VBQ2Qsd0NBQWtCO0VBRWxCLHFCQUFhLEVBQUE7O0FBSWY7RUFDRSxtQ0FBbUM7RUFDbkMsd0NBQXdDO0VBQ3hDLG1FQUFtRSxFQUFBOztBQUhyRTtJQU1JLDhCQUEwQixFQUFBOztBQU45QjtNQVNNLGVBQWUsRUFBQTs7QUFUckI7UUFZUSxhQUFhLEVBQUE7O0FBWnJCO01BaUJNLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixzQkFBc0IsRUFBQTs7QUFyQjVCO1FBd0JRLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CLEVBQUE7O0FBMUIzQjtRQThCUSxnQkFBZ0I7UUFDaEIsOERBQThEO1FBQzlELHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQiw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQ0FBbUM7UUFDbkMscUNBQXFDLEVBQUE7O0FBeEM3QztVQTJDVSxlQUFlO1VBQ2YseUNBQXlDLEVBQUE7O0FBNUNuRDtJQW1ESSw4QkFBMEI7SUFFMUIsMkJBQTJCO0lBQzNCLDRDQUE0QyxFQUFBOztBQXREaEQ7TUF5RE0sMkNBQTJDLEVBQUE7O0FBekRqRDtNQTZETSxrQ0FBa0M7TUFDbEMsMEJBQTBCO01BQzFCLGVBQWUsRUFBQTs7QUEvRHJCO1FBa0VRLDRCQUE0QjtRQUM1QixjQUFjO1FBQ2QscUJBQXFCLEVBQUE7O0FBcEU3QjtNQXlFTSw0Q0FBNEM7TUFDNUMsa0NBQWtDO01BQ2xDLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTs7QUE1RXRCO01BZ0ZNLFdBQVc7TUFDWCxpQ0FBaUM7TUFDakMsZUFBZSxFQUFBOztBQWxGckI7SUF1RkksOEJBQTBCO0lBRTFCLCtCQUErQjtJQUMvQix5QkFBeUIsRUFBQTs7QUExRjdCO01BNkZNLGVBQWUsRUFBQTs7QUE3RnJCO01BaUdNLG9CQUFvQjtNQUNwQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFBOztBQXBHeEI7UUF1R1EsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixZQUFZLEVBQUE7O0FBekdwQjtNQThHTSxvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFBOztBQWhIL0I7UUFtSFEsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvbGlzdGluZy9zdHlsZXMvdHJhdmVsLWxpc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5saXN0aW5nLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBzb2xpZCB2YXIoLS1wYWdlLWNvbG9yKTtcblxuICAuaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAuaXRlbS1pbWFnZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50LWluc2lkZS1pdGVtLWltYWdlIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxMiU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuaXRlbS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDU0cHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tY3RhIHtcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG5cbiAgICAgICAgLmN0YS1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW5mby1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIC5tYWluLWluZm8tY29sIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLml0ZW0tbmFtZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgIC5uYW1lLWFuY2hvciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG5cbiAgICAuaXRlbS1hZGRyZXNzIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5zdGF0cy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIC5zdGF0cy1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuaXRlbS1yYXRpbmcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAucmF0aW5nLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLXJldmlld3Mge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAucmV2aWV3cy1jb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/travel/listing/styles/travel-listing.shell.scss":
/*!*****************************************************************!*\
  !*** ./src/app/travel/listing/styles/travel-listing.shell.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255; }\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .60); }\n\napp-image-shell.icon-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .15); }\n\n.item-name app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 70%; }\n\n.item-name app-text-shell.text-loaded {\n    max-width: unset; }\n\n.item-description > app-text-shell {\n  --text-shell-line-height: 14px; }\n\n.item-address > app-text-shell {\n  --text-shell-line-height: 12px;\n  max-width: 60%; }\n\n.item-address > app-text-shell.text-loaded {\n    max-width: unset; }\n\n.rating-value > app-text-shell {\n  --text-shell-line-height: 16px;\n  min-width: 30px; }\n\n.reviews-count > app-text-shell {\n  --text-shell-line-height: 16px;\n  min-width: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvdHJhdmVsL2xpc3Rpbmcvc3R5bGVzL3RyYXZlbC1saXN0aW5nLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBYztFQUNkLDRCQUFrQixFQUFBOztBQVVwQjtFQUNFLG1FQUFpQztFQUNqQyxzRUFBaUMsRUFBQTs7QUFHbkM7RUFDRSxtRUFBaUMsRUFBQTs7QUFHbkM7RUFDRSw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUZoQjtJQUtJLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLDhCQUF5QixFQUFBOztBQUczQjtFQUNFLDhCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBRmhCO0lBS0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw4QkFBeUI7RUFDekIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJhdmVsL2xpc3Rpbmcvc3R5bGVzL3RyYXZlbC1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogIzAwQUZGRjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDAsMTc1LDI1NTtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjYwKTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmljb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cblxuLnJldmlld3MtY291bnQgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/travel/listing/travel-listing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingPageModule", function() { return TravelListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _travel_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travel-listing.page */ "./src/app/travel/listing/travel-listing.page.ts");
/* harmony import */ var _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel-listing.resolver */ "./src/app/travel/listing/travel-listing.resolver.ts");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _travel_listing_page__WEBPACK_IMPORTED_MODULE_7__["TravelListingPage"],
        resolve: {
            data: _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["TravelListingResolver"]
        }
    }
];
var TravelListingPageModule = /** @class */ (function () {
    function TravelListingPageModule() {
    }
    TravelListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [_travel_listing_page__WEBPACK_IMPORTED_MODULE_7__["TravelListingPage"]],
            providers: [
                _travel_listing_resolver__WEBPACK_IMPORTED_MODULE_8__["TravelListingResolver"],
                _travel_service__WEBPACK_IMPORTED_MODULE_9__["TravelService"]
            ]
        })
    ], TravelListingPageModule);
    return TravelListingPageModule;
}());



/***/ }),

/***/ "./src/app/travel/listing/travel-listing.page.html":
/*!*********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Travel Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"listing?.items\">\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n      <ion-row class=\"image-row\">\n        <ion-col size=\"12\">\n          <app-image-shell [mode]=\"'cover'\" class=\"add-overlay item-image\" [src]=\"item.image\" [routerLink]=\"['/app/categories/travel/', item.slug]\">\n            <app-aspect-ratio [ratio]=\"{w:3, h:2}\">\n              <div class=\"content-inside-item-image\">\n                <div class=\"item-icon\">\n                  <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                    <app-image-shell [src]=\"item.icon\" class=\"icon-image\"></app-image-shell>\n                  </app-aspect-ratio>\n                </div>\n                <div class=\"item-cta\">\n                  <span>Explore</span>\n                  <ion-icon class=\"cta-icon\" name=\"arrow-round-forward\"></ion-icon>\n                </div>\n              </div>\n            </app-aspect-ratio>\n          </app-image-shell>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"info-row\">\n        <ion-col class=\"main-info-col\">\n          <h3 class=\"item-name\">\n            <a class=\"name-anchor\" [routerLink]=\"['/app/categories/travel/', item.slug]\">\n              <app-text-shell animation=\"bouncing\" [data]=\"(item?.name && item?.category) ? (item.name + ' - ' + item.category) : (item.name)\"></app-text-shell>\n            </a>\n          </h3>\n          <p class=\"item-description\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.description\" lines=\"3\"></app-text-shell>\n          </p>\n          <p class=\"item-address\">\n            <app-text-shell animation=\"bouncing\" [data]=\"item.address\"></app-text-shell>\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"stats-row\">\n        <ion-col size=\"2\" class=\"item-rating\">\n          <span class=\"rating-value\">\n            <app-text-shell [data]=\"item.rating\"></app-text-shell>\n          </span>\n          <ion-icon class=\"stats-icon\" src=\"./assets/sample-icons/travel/star.svg\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"2\" class=\"item-reviews\">\n          <span class=\"reviews-count\">\n            <app-text-shell [data]=\"item.reviewsCount\"></app-text-shell>\n          </span>\n          <ion-icon class=\"stats-icon\" src=\"./assets/sample-icons/travel/comments.svg\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/travel/listing/travel-listing.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.page.ts ***!
  \*******************************************************/
/*! exports provided: TravelListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingPage", function() { return TravelListingPage; });
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


var TravelListingPage = /** @class */ (function () {
    function TravelListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(TravelListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    TravelListingPage.prototype.ngOnInit = function () {
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
    ], TravelListingPage.prototype, "isShell", null);
    TravelListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-listing',
            template: __webpack_require__(/*! ./travel-listing.page.html */ "./src/app/travel/listing/travel-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/travel-listing.page.scss */ "./src/app/travel/listing/styles/travel-listing.page.scss"), __webpack_require__(/*! ./styles/travel-listing.shell.scss */ "./src/app/travel/listing/styles/travel-listing.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TravelListingPage);
    return TravelListingPage;
}());



/***/ }),

/***/ "./src/app/travel/listing/travel-listing.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.resolver.ts ***!
  \***********************************************************/
/*! exports provided: TravelListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingResolver", function() { return TravelListingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travel.service */ "./src/app/travel/travel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelListingResolver = /** @class */ (function () {
    function TravelListingResolver(travelService) {
        this.travelService = travelService;
    }
    TravelListingResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.travelService.getListingDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    TravelListingResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]])
    ], TravelListingResolver);
    return TravelListingResolver;
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
//# sourceMappingURL=travel-listing-travel-listing-module.js.map