(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-details-travel-details-module"],{

/***/ "./src/app/travel/details/styles/travel-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/travel/details/styles/travel-details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-tags-vertical-gutter: 2px;\n  --page-tags-horizontal-gutter: 4px;\n  --page-places-gutter: 5px;\n  --page-color: #00AFFF; }\n\n.travel-details-content {\n  --background: var(--page-background); }\n\n.travel-details-content .image-row {\n    --ion-grid-column-padding: 0px; }\n\n.travel-details-content .image-row .icon-wrapper {\n      margin: 0px 15%;\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      align-items: center; }\n\n.travel-details-content .description-row {\n    --ion-grid-column-padding: 0px;\n    padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2); }\n\n.travel-details-content .description-row .details-name {\n      margin: 0px;\n      font-size: 20px; }\n\n.travel-details-content .description-row .details-short-description {\n      margin-top: calc(var(--page-margin) / 2);\n      margin-bottom: var(--page-margin);\n      font-size: 14px; }\n\n.travel-details-content .description-row .details-score {\n      display: flex;\n      justify-content: flex-start;\n      margin-bottom: var(--page-margin); }\n\n.travel-details-content .description-row .details-score .score-item {\n        display: flex;\n        align-items: center; }\n\n.travel-details-content .description-row .details-score .score-item:not(:last-child) {\n          padding-right: var(--page-margin); }\n\n.travel-details-content .description-row .details-score .score-item .score-icon {\n          font-size: 24px;\n          color: var(--ion-color-dark-tint); }\n\n.travel-details-content .description-row .details-score .score-item .score-value {\n          font-size: 16px;\n          margin-left: 4px; }\n\n.travel-details-content .description-row .details-tags {\n      --ion-grid-column-padding: 0px;\n      justify-content: center;\n      margin-top: calc(var(--page-tags-vertical-gutter) * -1); }\n\n.travel-details-content .description-row .details-tags .tag-wrapper {\n        padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter) var(--page-tags-vertical-gutter) 0px;\n        flex-grow: 0;\n        min-width: -webkit-fit-content;\n        min-width: -moz-fit-content;\n        min-width: fit-content; }\n\n.travel-details-content .description-row .details-tags .tag-wrapper:last-child {\n          padding-right: 0px; }\n\n.travel-details-content .description-row .details-tags .item-tag {\n        display: block;\n        border-radius: var(--app-narrow-radius);\n        border: 1px solid var(--ion-color-light-shade);\n        padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.travel-details-content .description-row .details-description {\n      margin: calc(var(--page-margin) * 2) 0px 0px;\n      line-height: 1.3;\n      font-size: 14px; }\n\n.travel-details-content .detail-title {\n    font-size: 16px;\n    font-weight: 600;\n    color: var(--ion-color-dark-tint);\n    margin: 0px 0px var(--page-margin); }\n\n.travel-details-content .open-hours-wrapper {\n    padding: 0px var(--page-margin) calc(var(--page-margin) * 2); }\n\n.travel-details-content .open-hours-wrapper .schedules-list {\n      list-style: none;\n      margin: 0px;\n      padding: 0px; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item {\n        font-size: 14px;\n        color: var(--ion-color-medium-tint); }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item + .open-hour-item {\n          margin-top: calc(var(--page-margin) / 2); }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          width: 75%; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-day {\n            display: block;\n            padding-right: var(--page-margin);\n            width: 40%;\n            font-size: 14px; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours {\n            flex: 1;\n            display: flex;\n            justify-content: flex-end;\n            align-items: center; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-separator {\n              margin: 0px var(--page-margin);\n              line-height: 1; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value {\n              flex: 0 1 25%;\n              font-weight: 500; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:first-child {\n                text-align: start; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:last-child {\n                text-align: end; }\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-closed {\n              text-transform: uppercase;\n              font-size: 12px; }\n\n.travel-details-content .location-wrapper {\n    padding: 0px 0px calc(var(--page-margin) * 2); }\n\n.travel-details-content .location-wrapper .location-header {\n      padding: 0px var(--page-margin) 0px;\n      margin-bottom: calc(var(--page-margin) / 2); }\n\n.travel-details-content .location-wrapper .detail-title {\n      margin-bottom: 5px; }\n\n.travel-details-content .location-wrapper .location-address {\n      display: block;\n      font-size: 14px;\n      color: var(--ion-color-medium-tint); }\n\n.travel-details-content .detail-alt-title {\n    text-align: center;\n    font-size: 18px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: var(--ion-color-dark-shade);\n    margin: 0px 0px var(--page-margin); }\n\n.travel-details-content .suggested-places-wrapper {\n    padding: 0px var(--page-margin) calc(var(--page-margin) * 2); }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row {\n      --ion-grid-column-padding: var(--page-places-gutter);\n      margin-left: calc(var(--page-places-gutter) * -1);\n      margin-right: calc(var(--page-places-gutter) * -1); }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place {\n        display: flex;\n        flex-direction: column;\n        padding-top: 0px;\n        padding-bottom: 0px; }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between; }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-name {\n            font-size: 12px;\n            font-weight: 400;\n            margin: calc(var(--page-margin) / 2) 0px 5px;\n            text-align: center; }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating {\n            display: flex;\n            justify-content: center;\n            align-items: center; }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-icon {\n              color: var(--page-color); }\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-value {\n              color: var(--page-color);\n              font-size: 14px;\n              margin-left: 4px; }\n\n.travel-details-content .related-activities-wrapper {\n    padding: 0px 0px calc(var(--page-margin) * 2); }\n\n.travel-details-content .related-activities-wrapper .related-activity {\n      --ion-grid-column-padding: 0px; }\n\n.travel-details-content .related-activities-wrapper .related-activity:not(:last-child) {\n        margin-bottom: var(--page-margin); }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details {\n        text-align: center;\n        position: relative; }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-name {\n          margin: 0px;\n          margin-top: 5px;\n          font-size: 14px; }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-category {\n          display: block;\n          margin-top: 2px;\n          font-size: 12px; }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating {\n          position: absolute;\n          top: 0;\n          right: 0;\n          margin-top: 5px;\n          margin-right: var(--page-margin);\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-icon {\n            color: var(--page-color); }\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-value {\n            color: var(--page-color);\n            font-size: 14px;\n            margin-left: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvdHJhdmVsL2RldGFpbHMvc3R5bGVzL3RyYXZlbC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFjO0VBQ2Qsd0NBQWtCO0VBRWxCLGdDQUE0QjtFQUM1QixrQ0FBOEI7RUFDOUIseUJBQXFCO0VBRXJCLHFCQUFhLEVBQUE7O0FBSWY7RUFDRSxvQ0FBYSxFQUFBOztBQURmO0lBSUksOEJBQTBCLEVBQUE7O0FBSjlCO01BT00sZUFBZTtNQUNmLGFBQWE7TUFDYixZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLG1CQUFtQixFQUFBOztBQVh6QjtJQWdCSSw4QkFBMEI7SUFFMUIsMkVBQTJFLEVBQUE7O0FBbEIvRTtNQXFCTSxXQUFXO01BQ1gsZUFBZSxFQUFBOztBQXRCckI7TUEwQk0sd0NBQXdDO01BQ3hDLGlDQUFpQztNQUNqQyxlQUFlLEVBQUE7O0FBNUJyQjtNQWdDTSxhQUFhO01BQ2IsMkJBQTJCO01BQzNCLGlDQUFpQyxFQUFBOztBQWxDdkM7UUFxQ1EsYUFBYTtRQUNiLG1CQUFtQixFQUFBOztBQXRDM0I7VUF5Q1UsaUNBQWlDLEVBQUE7O0FBekMzQztVQTZDVSxlQUFlO1VBQ2YsaUNBQWlDLEVBQUE7O0FBOUMzQztVQWtEVSxlQUFlO1VBQ2YsZ0JBQWdCLEVBQUE7O0FBbkQxQjtNQXlETSw4QkFBMEI7TUFFMUIsdUJBQXVCO01BQ3ZCLHVEQUF1RCxFQUFBOztBQTVEN0Q7UUErRFEsaUhBQWlIO1FBQ2pILFlBQVk7UUFDWiw4QkFBc0I7UUFBdEIsMkJBQXNCO1FBQXRCLHNCQUFzQixFQUFBOztBQWpFOUI7VUFvRVUsa0JBQWtCLEVBQUE7O0FBcEU1QjtRQXlFUSxjQUFjO1FBQ2QsdUNBQXVDO1FBQ3ZDLDhDQUE4QztRQUM5Qyw0RUFBNEU7UUFDNUUsZUFBZTtRQUNmLG1DQUFtQyxFQUFBOztBQTlFM0M7TUFtRk0sNENBQTRDO01BQzVDLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7O0FBckZyQjtJQTBGSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxrQ0FBa0MsRUFBQTs7QUE3RnRDO0lBaUdJLDREQUE0RCxFQUFBOztBQWpHaEU7TUFvR00sZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBdEdsQjtRQXlHUSxlQUFlO1FBQ2YsbUNBQW1DLEVBQUE7O0FBMUczQztVQTZHVSx3Q0FBd0MsRUFBQTs7QUE3R2xEO1VBaUhVLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsOEJBQThCO1VBQzlCLFVBQVUsRUFBQTs7QUFwSHBCO1lBdUhZLGNBQWM7WUFDZCxpQ0FBaUM7WUFDakMsVUFBVTtZQUNWLGVBQWUsRUFBQTs7QUExSDNCO1lBOEhZLE9BQU87WUFDUCxhQUFhO1lBQ2IseUJBQXlCO1lBQ3pCLG1CQUFtQixFQUFBOztBQWpJL0I7Y0FvSWMsOEJBQThCO2NBQzlCLGNBQWMsRUFBQTs7QUFySTVCO2NBeUljLGFBQWE7Y0FDYixnQkFBZ0IsRUFBQTs7QUExSTlCO2dCQTZJZ0IsaUJBQWlCLEVBQUE7O0FBN0lqQztnQkFnSmdCLGVBQWUsRUFBQTs7QUFoSi9CO2NBcUpjLHlCQUF5QjtjQUN6QixlQUFlLEVBQUE7O0FBdEo3QjtJQStKSSw2Q0FBNkMsRUFBQTs7QUEvSmpEO01Ba0tNLG1DQUFtQztNQUNuQywyQ0FBMkMsRUFBQTs7QUFuS2pEO01BdUtNLGtCQUFrQixFQUFBOztBQXZLeEI7TUEyS00sY0FBYztNQUNkLGVBQWU7TUFDZixtQ0FBbUMsRUFBQTs7QUE3S3pDO0lBa0xJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsa0NBQWtDLEVBQUE7O0FBdkx0QztJQTJMSSw0REFBNEQsRUFBQTs7QUEzTGhFO01BOExNLG9EQUEwQjtNQUUxQixpREFBaUQ7TUFDakQsa0RBQWtELEVBQUE7O0FBak14RDtRQW9NUSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixtQkFBbUIsRUFBQTs7QUF2TTNCO1VBME1VLE9BQU87VUFDUCxhQUFhO1VBQ2Isc0JBQXNCO1VBQ3RCLDhCQUE4QixFQUFBOztBQTdNeEM7WUFnTlksZUFBZTtZQUNmLGdCQUFnQjtZQUNoQiw0Q0FBNEM7WUFDNUMsa0JBQWtCLEVBQUE7O0FBbk45QjtZQXVOWSxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG1CQUFtQixFQUFBOztBQXpOL0I7Y0E0TmMsd0JBQXdCLEVBQUE7O0FBNU50QztjQWdPYyx3QkFBd0I7Y0FDeEIsZUFBZTtjQUNmLGdCQUFnQixFQUFBOztBQWxPOUI7SUEyT0ksNkNBQTZDLEVBQUE7O0FBM09qRDtNQThPTSw4QkFBMEIsRUFBQTs7QUE5T2hDO1FBaVBRLGlDQUFpQyxFQUFBOztBQWpQekM7UUFxUFEsa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBOztBQXRQMUI7VUF5UFUsV0FBVztVQUNYLGVBQWU7VUFDZixlQUFlLEVBQUE7O0FBM1B6QjtVQStQVSxjQUFjO1VBQ2QsZUFBZTtVQUNmLGVBQWUsRUFBQTs7QUFqUXpCO1VBcVFVLGtCQUFrQjtVQUNsQixNQUFNO1VBQ04sUUFBUTtVQUNSLGVBQWU7VUFDZixnQ0FBZ0M7VUFFaEMsYUFBYTtVQUNiLHVCQUF1QjtVQUN2QixtQkFBbUIsRUFBQTs7QUE3UTdCO1lBZ1JZLHdCQUF3QixFQUFBOztBQWhScEM7WUFvUlksd0JBQXdCO1lBQ3hCLGVBQWU7WUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC9kZXRhaWxzL3N0eWxlcy90cmF2ZWwtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXI6IDJweDtcbiAgLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcbiAgLS1wYWdlLXBsYWNlcy1ndXR0ZXI6IDVweDtcblxuICAtLXBhZ2UtY29sb3I6ICMwMEFGRkY7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLmltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLmljb24td3JhcHBlciB7XG4gICAgICBtYXJnaW46IDBweCAxNSU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5kZXRhaWxzLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtc2hvcnQtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1zY29yZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuc2NvcmUtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NvcmUtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY29yZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy10YWdzIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogLTEpO1xuXG4gICAgICAudGFnLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIDBweDtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLXRhZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweCAwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLm9wZW4taG91cnMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnNjaGVkdWxlcy1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuICAgICAgICAmICsgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjaGVkdWxlLW91dGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG5cbiAgICAgICAgICAuc2NoZWR1bGUtZGF5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NoZWR1bGUtaG91cnMge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnNjaGVkdWxlLXNlcGFyYXRvciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS12YWx1ZSB7XG4gICAgICAgICAgICAgIGZsZXg6IDAgMSAyNSU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjaGVkdWxlLWNsb3NlZCB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmxvY2F0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLmRldGFpbC10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsLWFsdC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcik7XG5cbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcikgKiAtMSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1wbGFjZXMtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgLnN1Z2dlc3RlZC1wbGFjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgICAgLnBsYWNlLWRldGFpbHMge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgIC5wbGFjZS1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGxhY2UtcmF0aW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5yYXRpbmctaWNvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJhdGluZy12YWx1ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnJlbGF0ZWQtYWN0aXZpdHkge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpdml0eS1kZXRhaWxzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmFjdGl2aXR5LW5hbWUge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktY2F0ZWdvcnkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktcmF0aW5nIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5yYXRpbmctaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJhdGluZy12YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/travel/details/styles/travel-details.shell.scss":
/*!*****************************************************************!*\
  !*** ./src/app/travel/details/styles/travel-details.shell.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255; }\n\napp-image-shell.details-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .40);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\napp-image-shell.details-icon {\n  --image-shell-loading-background: transparent; }\n\n.details-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 20px; }\n\n.details-short-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 80%; }\n\n.details-short-description > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.score-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.score-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px; }\n\n.item-tag > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px; }\n\n.schedule-day > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%; }\n\n.schedule-day > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.schedule-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%; }\n\n.schedule-value > app-text-shell.text-loaded {\n    max-width: inherit; }\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%; }\n\n.location-address > app-text-shell.text-loaded {\n    max-width: inherit; }\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25); }\n\napp-image-shell.place-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15); }\n\n.place-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px; }\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.rating-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\napp-image-shell.related-activity-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15); }\n\n.activity-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 25%;\n  margin: 0px auto; }\n\n.activity-name > app-text-shell.text-loaded {\n    max-width: inherit;\n    margin: 0px; }\n\n.activity-category > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n  max-width: 45%;\n  margin: 0px auto; }\n\n.activity-category > app-text-shell.text-loaded {\n    max-width: inherit;\n    margin: 0px; }\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px; }\n\n.rating-value > app-text-shell.text-loaded {\n    min-width: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWVyZ2xlbWFzL0RvY3VtZW50cy9ndWlkZUFPVFcvaW9uaWM0LWZ1bGwtc3RhcnRlci1hcHAtMS4yL3NyYy9hcHAvdHJhdmVsL2RldGFpbHMvc3R5bGVzL3RyYXZlbC1kZXRhaWxzLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQkFBYztFQUNkLDRCQUFrQixFQUFBOztBQVVwQjtFQUNFLG1FQUFpQztFQUNqQyxzRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNkNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QixFQUFBOztBQUczQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUhoQjtJQU1JLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGNBQWMsRUFBQTs7QUFJbEI7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QixFQUFBOztBQUczQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUhoQjtJQU1JLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUhoQjtJQU1JLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLG1FQUFpQztFQUNqQyw4REFBNEIsRUFBQTs7QUFHOUI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QixFQUFBOztBQUczQjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGNBQWMsRUFBQTs7QUFJbEI7RUFDRSxtRUFBaUM7RUFDakMsOERBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsMERBQXdCO0VBQ3hCLDhCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBSmxCO0lBT0ksa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTs7QUFJZjtFQUNFLDBEQUF3QjtFQUN4Qiw4QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUpsQjtJQU9JLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBSWY7RUFDRSwwREFBd0I7RUFDeEIsOEJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvZGV0YWlscy9zdHlsZXMvdHJhdmVsLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuNDApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmRldGFpbHMtaWNvbiB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGV0YWlscy1zaG9ydC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5zY2hlZHVsZS1kYXkgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5zY2hlZHVsZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBsYWNlLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLnBsYWNlLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtYWN0aXZpdHktcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNDUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/travel/details/travel-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel/details/travel-details.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsPageModule", function() { return TravelDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _travel_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travel-details.page */ "./src/app/travel/details/travel-details.page.ts");
/* harmony import */ var _travel_details_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel-details.resolver */ "./src/app/travel/details/travel-details.resolver.ts");
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
        component: _travel_details_page__WEBPACK_IMPORTED_MODULE_7__["TravelDetailsPage"],
        resolve: {
            data: _travel_details_resolver__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsResolver"]
        }
    }
];
var TravelDetailsPageModule = /** @class */ (function () {
    function TravelDetailsPageModule() {
    }
    TravelDetailsPageModule = __decorate([
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
                _travel_details_page__WEBPACK_IMPORTED_MODULE_7__["TravelDetailsPage"]
            ],
            providers: [
                _travel_details_resolver__WEBPACK_IMPORTED_MODULE_8__["TravelDetailsResolver"],
                _travel_service__WEBPACK_IMPORTED_MODULE_9__["TravelService"]
            ]
        })
    ], TravelDetailsPageModule);
    return TravelDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/travel/details/travel-details.page.html":
/*!*********************************************************!*\
  !*** ./src/app/travel/details/travel-details.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/travel\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Travel Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"travel-details-content\">\n  <ion-row class=\"image-row\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay details-image\" [src]=\"details?.image\">\n        <app-aspect-ratio [ratio]=\"{w:64, h:50}\">\n          <div class=\"icon-wrapper\">\n            <app-aspect-ratio [ratio]=\"{w: 47, h: 25}\">\n              <app-image-shell [src]=\"details?.icon\" class=\"details-icon\"></app-image-shell>\n            </app-aspect-ratio>\n          </div>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"description-row\">\n    <ion-col size=\"12\">\n      <h3 class=\"details-name\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.name?.concat(' - ', details?.category)\"></app-text-shell>\n      </h3>\n      <p class=\"details-short-description\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details?.shortDescription\"></app-text-shell>\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <div class=\"details-score\">\n        <div class=\"score-item\">\n          <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/travel/star.svg\"></ion-icon>\n          <div class=\"score-value\">\n            <app-text-shell [data]=\"details?.rating\"></app-text-shell>\n          </div>\n        </div>\n        <div class=\"score-item\">\n          <ion-icon class=\"score-icon\" src=\"./assets/sample-icons/travel/comments.svg\"></ion-icon>\n          <div class=\"score-value\">\n            <app-text-shell [data]=\"details?.reviewsCount\"></app-text-shell>\n          </div>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-row class=\"details-tags\">\n        <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of details?.tags\">\n          <span class=\"item-tag\">\n            <app-text-shell [data]=\"tag\"></app-text-shell>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"details-description\">\n        <app-text-shell animation=\"bouncing\" lines=\"6\" [data]=\"details?.fullDescription\"></app-text-shell>\n      </p>\n    </ion-col>\n  </ion-row>\n  <div class=\"open-hours-wrapper\">\n    <h3 class=\"detail-title\">When?</h3>\n    <ul class=\"schedules-list\">\n      <li class=\"open-hour-item\" *ngFor=\"let schedule of details?.openHours\">\n        <div class=\"schedule-outer\">\n          <span class=\"schedule-day\">\n            <app-text-shell [data]=\"schedule.day\"></app-text-shell>\n          </span>\n          <div class=\"schedule-hours\">\n            <ng-container *ngIf=\"schedule.open\">\n              <span class=\"schedule-value\">\n                <app-text-shell [data]=\"schedule.hourFrom\"></app-text-shell>\n              </span>\n              <span class=\"schedule-separator\">to</span>\n              <span class=\"schedule-value\">\n                <app-text-shell [data]=\"schedule.hourTo\"></app-text-shell>\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!schedule.open\">\n              <ion-badge class=\"schedule-closed\" color=\"medium\">closed</ion-badge>\n            </ng-container>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"location-wrapper\">\n    <div class=\"location-header\">\n      <h3 class=\"detail-title\">Where?</h3>\n      <span class=\"location-address\">\n        <app-text-shell [data]=\"details.location?.address\"></app-text-shell>\n      </span>\n    </div>\n    <!-- <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\n      <app-image-shell [src]=\"'https://maps.googleapis.com/maps/api/staticmap?center=' + details.location?.latlng + '&zoom=15&size=640x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xd9453a%7C' + details.location?.latlng + '&key=YOUR_KEY_HERE'\">\n      </app-image-shell>\n    </app-aspect-ratio> -->\n    <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\n      <app-image-shell class=\"location-image\" animation=\"spinner\" [src]=\"details.location?.mapImage\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"suggested-places-wrapper\" *ngIf=\"details?.whereToStay && details.whereToStay.length > 0\">\n    <h3 class=\"detail-alt-title\">Need a place to stay?</h3>\n    <ion-row class=\"suggested-places-row\">\n      <ion-col size=\"4\" class=\"suggested-place\" *ngFor=\"let placeToStay of details?.whereToStay\">\n        <app-aspect-ratio [ratio]=\"{w: 18, h: 23}\">\n          <app-image-shell class=\"place-picture\" animation=\"spinner\" [src]=\"placeToStay.picture\"></app-image-shell>\n        </app-aspect-ratio>\n        <div class=\"place-details\">\n          <h5 class=\"place-name\">\n            <app-text-shell [data]=\"placeToStay.name\"></app-text-shell>\n          </h5>\n          <div class=\"place-rating\">\n            <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\n            <div class=\"rating-value\">\n              <app-text-shell [data]=\"placeToStay.rating\"></app-text-shell>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"suggested-places-wrapper\" *ngIf=\"details?.whereToEat && details.whereToEat.length > 0\">\n    <h3 class=\"detail-alt-title\">Grab a bite?</h3>\n    <ion-row class=\"suggested-places-row\">\n      <ion-col size=\"4\" class=\"suggested-place\" *ngFor=\"let placeToEat of details?.whereToEat\">\n        <app-aspect-ratio [ratio]=\"{w: 18, h: 23}\">\n          <app-image-shell class=\"place-picture\" animation=\"spinner\" [src]=\"placeToEat.picture\"></app-image-shell>\n        </app-aspect-ratio>\n        <div class=\"place-details\">\n          <h5 class=\"place-name\">\n            <app-text-shell [data]=\"placeToEat.name\"></app-text-shell>\n          </h5>\n          <div class=\"place-rating\">\n            <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\n            <div class=\"rating-value\">\n              <app-text-shell [data]=\"placeToEat.rating\"></app-text-shell>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"related-activities-wrapper\" *ngIf=\"details?.relatedActivities && details.relatedActivities.length > 0\">\n    <h3 class=\"detail-alt-title\">More activities?</h3>\n    <ion-row class=\"related-activity\" *ngFor=\"let relatedActivity of details?.relatedActivities\">\n      <ion-col size=\"12\">\n        <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"related-activity-picture\" [src]=\"relatedActivity.picture\">\n          <app-aspect-ratio [ratio]=\"{w:64, h:23}\">\n          </app-aspect-ratio>\n        </app-image-shell>\n      </ion-col>\n      <ion-col size=\"12\" class=\"activity-details\">\n        <h5 class=\"activity-name\">\n          <app-text-shell [data]=\"relatedActivity.name\"></app-text-shell>\n        </h5>\n        <span class=\"activity-category\">\n          <app-text-shell [data]=\"relatedActivity.category\"></app-text-shell>\n        </span>\n        <div class=\"activity-rating\">\n          <ion-icon class=\"rating-icon\" name=\"star-outline\"></ion-icon>\n          <div class=\"rating-value\">\n            <app-text-shell [data]=\"relatedActivity.rating\"></app-text-shell>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/travel/details/travel-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel/details/travel-details.page.ts ***!
  \*******************************************************/
/*! exports provided: TravelDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsPage", function() { return TravelDetailsPage; });
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


var TravelDetailsPage = /** @class */ (function () {
    function TravelDetailsPage(route) {
        this.route = route;
    }
    Object.defineProperty(TravelDetailsPage.prototype, "isShell", {
        get: function () {
            return (this.details && this.details.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    TravelDetailsPage.prototype.ngOnInit = function () {
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
    ], TravelDetailsPage.prototype, "isShell", null);
    TravelDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-details',
            template: __webpack_require__(/*! ./travel-details.page.html */ "./src/app/travel/details/travel-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/travel-details.page.scss */ "./src/app/travel/details/styles/travel-details.page.scss"), __webpack_require__(/*! ./styles/travel-details.shell.scss */ "./src/app/travel/details/styles/travel-details.shell.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TravelDetailsPage);
    return TravelDetailsPage;
}());



/***/ }),

/***/ "./src/app/travel/details/travel-details.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/travel/details/travel-details.resolver.ts ***!
  \***********************************************************/
/*! exports provided: TravelDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsResolver", function() { return TravelDetailsResolver; });
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


var TravelDetailsResolver = /** @class */ (function () {
    function TravelDetailsResolver(travelService) {
        this.travelService = travelService;
    }
    TravelDetailsResolver.prototype.resolve = function () {
        // Get the Shell Provider from the service
        var shellProviderObservable = this.travelService.getDetailsDataWithShell();
        // Resolve with Shell Provider
        var observablePromise = new Promise(function (resolve, reject) {
            resolve(shellProviderObservable);
        });
        return observablePromise;
    };
    TravelDetailsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]])
    ], TravelDetailsResolver);
    return TravelDetailsResolver;
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
//# sourceMappingURL=travel-details-travel-details-module.js.map