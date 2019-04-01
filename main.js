(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reports/reports.module": [
		"./src/app/reports/reports.module.ts",
		"reports-reports-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HRBenefits';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _authenticated_layout_authenticated_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authenticated-layout/authenticated-layout.component */ "./src/app/authenticated-layout/authenticated-layout.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _authenticated_layout_authenticated_layout_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticatedLayoutComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _app_router__WEBPACK_IMPORTED_MODULE_5__["appRouter"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: router, appRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouter", function() { return appRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _authenticated_layout_authenticated_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticated-layout/authenticated-layout.component */ "./src/app/authenticated-layout/authenticated-layout.component.ts");




var router = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        // canActivate: [AuthGuard, ScopeGuard],
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
    {
        path: 'home',
        // canActivate: [AuthGuard, ScopeGuard],
        component: _authenticated_layout_authenticated_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticatedLayoutComponent"],
        loadChildren: './reports/reports.module#ReportsModule'
    },
    // {
    //     path: 'fad',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/fad/fad.module#FadModule'
    //   },
    //   {
    //     path: 'myclaims',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/myclaims/claims.module#ClaimsModule'
    //   },
    //   {
    //     path: 'member-migration',
    //     // canActivate: [ScopeGuard],
    //     component: AuthCentralLayoutComponent,
    //     loadChildren: 'app/pages/member-migration/member-migration.module#MemberMigrationModule'
    //   },
    //   {
    //     path: 'settings',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/settings/settings.module#SettingsModule'
    //   },
    //   {
    //     path: 'mydoctors',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/doctors/doctors.module#MydoctorsModule'
    //   },
    //   {
    //     path: 'myplans',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/myplans/myplans.module#MyplansModule'
    //   },
    //   {
    //     path: 'secureInq',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthCentralLayoutComponent,
    //     loadChildren: 'app/pages/secureInquiry/secureInquiry.module#SecureInquiryModule'
    //   },
    //   {
    //     path: 'mycards',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/mycards/mycards.module#MycardsModule'
    //   },
    //   {
    //     path: 'mypreferences',
    //     // canActivate: [AuthGuard],
    //     loadChildren: 'app/pages/mypreferences/mypreferences.module#MyPreferencesModule'
    //   },
    //   {
    //     path: 'mydedco',
    //     loadChildren: 'app/pages/myded-co/myded-co.module#MyDedCoModule'
    //   },
    //   {
    //     path: 'orderreplacement',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthCentralLayoutComponent,
    //     loadChildren: 'app/pages/orderreplacement/orderreplacement.module#OrderreplacementModule'
    //   },
    //   {
    //     path: 'mymedications',
    //     // canActivate: [AuthGuard, ScopeGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/medications/medications.module#MyMedicationsModule'
    //   },
    //   {
    //     path: 'register',
    //     loadChildren: 'app/pages/registration/registration.module#RegistrationModule'
    //   },
    //   {
    //     path: 'login',
    //     // canActivate: [AuthGuard],
    //     loadChildren: 'app/pages/login/login.module#LoginModule',
    //   },
    //   {
    //     path: 'account',
    //     // canActivate: [AuthGuard],
    //     loadChildren: 'app/pages/my-account/my-account.module#MyAccountModule',
    //   },
    //   {
    //     path: 'financials',
    //     // canActivate: [AuthGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/financials/financials.module#FinancialsModule'
    //   },
    //   {
    //     path: 'dashboard',
    //     // canActivate: [AuthGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
    //   },
    //   {
    //     path: 'myprofile',
    //     // canActivate: [AuthGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/my-profile/profileHome/profileHome.module#ProfileHomeModule'
    //   },
    //   {
    //     path: 'profile',
    //     // canActivate: [AuthGuard],
    //     component: AuthCentralLayoutComponent,
    //     loadChildren: 'app/pages/my-profile/profileUpdates/profileupdates.module#ProfileupdatesModule'
    //   },
    //   {
    //     path: 'message-center',
    //     // canActivate: [AuthGuard],
    //     component: AuthenticatedLayoutComponent,
    //     loadChildren: 'app/pages/message-center/message-center.module#MessageCenterModule'
    //   },
    //   {
    //     path: 'migration',
    //     // canActivate: [AuthGuard],
    //     component: AuthCentralLayoutComponent,
    //     loadChildren: 'app/pages/member-migration/profile-info-update/info-update-module/info-update-module.module#InfoUpdateModuleModule'
    //   },
    //   {
    //     path: 'landing',
    //     loadChildren: 'app/pages/landing/landing.module#LandingModule'
    //   },
    //   {
    //     path: 'pages',
    //     loadChildren: 'app/pages/static/static.module#StaticModule',
    //   },
    {
        path: '404',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }
];
var appRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router, { onSameUrlNavigation: 'reload' });


/***/ }),

/***/ "./src/app/authenticated-layout/authenticated-layout.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/authenticated-layout/authenticated-layout.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"authenticated-layout-component\">\r\n  <div class=\"banner\">\r\n    <div class=\"banner-images\">\r\n      <img src=\"assets/images/userIcon.PNG\" class=\"banner-user-icon\">\r\n      <img src=\"assets/images/settingsIcon.PNG\" class=\"banner-settings-icon\">\r\n    </div>\r\n    <div class=\"banner-welcome-text\">Welcome, Vishwa Subburaj</div>\r\n    <div class=\"float-right app-logo\">\r\n      HR Benefits\r\n    </div>\r\n  </div>\r\n  <div class=\"row position-relative\">\r\n    <div class=\"col l2 s12 side-menu-container\">\r\n      <div class=\"col s12 no-desktop\" (click)='displayMobileMenu()'>\r\n        <img src=\"assets/images/mobile-side-menu-indicator.PNG\" class=\"banner-user-icon\">\r\n        <div [innerHTML]=\"screenTitle\" class='side-menu-mobile-segment-title'></div>\r\n      </div>\r\n      <div [class]=\"['col s12 sideMenu', mobileHidden].join(' ')\">\r\n        <div *ngFor=\"let sideMenuItem of sideMenuItems\">\r\n          <div class=\"sideMenuItem\" (click)=\"displayCategoryInSideMenu(sideMenuItem)\">{{sideMenuItem.categoryName}}\r\n          </div>\r\n          <div *ngIf=\"sideMenuItem.active\">\r\n            <div class=\"sideMenuSubItem\" *ngFor=\"let sideMenuSubItem of sideMenuItem.subItems\"\r\n              (click)=openPage(sideMenuSubItem)>\r\n              {{sideMenuSubItem.name}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class='col s12 side-menu-footer'>\r\n          <div class=\"row\">\r\n            <div class=\"col s3\">\r\n              <div>\r\n                <img src='assets/images/side-menu-footer-home-icon.PNG'>\r\n              </div>\r\n            </div>\r\n            <div class=\"col s3\">\r\n              <div>\r\n                <img src='assets/images/side-menu-footer-help-icon.PNG'>\r\n              </div>\r\n            </div>\r\n            <div class=\"col s3\">\r\n              <div>\r\n                <img src='assets/images/side-menu-footer-support-icon.PNG'>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col l10\">\r\n      <div class=\"content-banner\">\r\n        <img src=\"assets/images/breadCrumbSample.PNG\">\r\n      </div>\r\n      <div>\r\n        <router-outlet #o=\"outlet\"></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row app-footer\">\r\n    <div class='col l3'></div>\r\n    <div class='col l2 s12'>\r\n      <img src='assets/images/app-footer-1.png'>\r\n    </div>\r\n    <div class='col l2 s12'>\r\n      <img src='assets/images/app-footer-2.png'>\r\n    </div>\r\n    <div class='col l3 s12'>\r\n      <img src='assets/images/app-footer-3.png'>\r\n    </div>\r\n    <div class='col l2'>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/authenticated-layout/authenticated-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/authenticated-layout/authenticated-layout.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authenticated-layout-component .banner {\n  min-height: 45px;\n  width: 100vw;\n  background-image: linear-gradient(#939393, #a0a0a0, #454545); }\n  .authenticated-layout-component .banner .banner-user-icon {\n    margin-left: 5px;\n    margin-top: 5px; }\n  .authenticated-layout-component .banner .banner-settings-icon {\n    margin-left: 5px;\n    margin-top: 5px; }\n  .authenticated-layout-component .banner .banner-welcome-text {\n    float: left;\n    color: white;\n    font-family: SourceSansPro-Regular;\n    margin-top: 10px;\n    margin-left: 10px; }\n  .authenticated-layout-component .banner .banner-images {\n    float: left; }\n  .authenticated-layout-component .banner .app-logo {\n    margin-right: 34px;\n    margin-top: 10px;\n    color: white;\n    font-family: SourceSansPro-Bold; }\n  .authenticated-layout-component .float-right {\n  float: right; }\n  .authenticated-layout-component .sideMenu {\n  background-color: #cccccc;\n  min-height: 100vh; }\n  .authenticated-layout-component .sideMenu .sideMenuItem {\n    background-color: #606060;\n    color: white;\n    padding: 5px;\n    margin: 5px;\n    font-family: SourceSansPro-Regular;\n    cursor: pointer; }\n  .authenticated-layout-component .sideMenu .sideMenuSubItem {\n    padding: 5px;\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-left: 12px;\n    font-family: SourceSansPro-Regular;\n    cursor: pointer; }\n  .authenticated-layout-component .content-banner {\n  background-color: #F4F5F7;\n  border-bottom: 1px solid #ABAFBC;\n  height: 30px;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .authenticated-layout-component .position-relative {\n  position: relative; }\n  .authenticated-layout-component .side-menu-footer {\n  background-color: #E0E0E3;\n  padding-top: 25px; }\n  .authenticated-layout-component .app-footer {\n  min-height: 84px;\n  width: 100vw;\n  background-repeat: no-repeat;\n  background-color: #373737;\n  border-top: 7px solid #C30630; }\n  @media (min-width: 993px) {\n  .authenticated-layout-component .no-desktop {\n    display: none; } }\n  @media (max-width: 992px) {\n  .authenticated-layout-component .no-desktop {\n    background-color: white; }\n  .authenticated-layout-component .mobile-hidden {\n    display: none; }\n  .authenticated-layout-component .side-menu-container {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    margin-left: -10px;\n    width: 108vw;\n    z-index: 10001; }\n  .authenticated-layout-component .side-menu-mobile-segment-title {\n    position: absolute;\n    top: 10px;\n    left: 50px;\n    font-family: SourceSansPro-Regular;\n    margin-left: 10px;\n    font-size: 16px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC1sYXlvdXQvQzpcXFVzZXJzXFxrYWxhZ2kwMVxcRGVza3RvcFxcZGV2XFxIUkJlbmVmaXRzL3NyY1xcYXBwXFxhdXRoZW50aWNhdGVkLWxheW91dFxcYXV0aGVudGljYXRlZC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZTtFQUNmLFlBQVc7RUFDWCw0REFBMEQsRUFBQTtFQUo5RDtJQU9RLGdCQUFlO0lBQ2YsZUFBYyxFQUFBO0VBUnRCO0lBWVEsZ0JBQWU7SUFDZixlQUFjLEVBQUE7RUFidEI7SUFpQlEsV0FBVTtJQUNWLFlBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsZ0JBQWU7SUFDZixpQkFBZ0IsRUFBQTtFQXJCeEI7SUF5QlEsV0FBVSxFQUFBO0VBekJsQjtJQTZCUSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVc7SUFDWCwrQkFBK0IsRUFBQTtFQWhDdkM7RUFxQ0ksWUFBVyxFQUFBO0VBckNmO0VBeUNJLHlCQUF3QjtFQUV4QixpQkFBZ0IsRUFBQTtFQTNDcEI7SUE4Q1EseUJBQXdCO0lBQ3hCLFlBQVc7SUFDWCxZQUFXO0lBQ1gsV0FBVTtJQUNWLGtDQUFrQztJQUNsQyxlQUFjLEVBQUE7RUFuRHRCO0lBdURRLFlBQVc7SUFDWCxnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWMsRUFBQTtFQTVEdEI7RUFrRUkseUJBQXdCO0VBQ3hCLGdDQUErQjtFQUMvQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBdEV2QjtFQTBFSSxrQkFBaUIsRUFBQTtFQTFFckI7RUE4RUkseUJBQXlCO0VBQ3pCLGlCQUFnQixFQUFBO0VBL0VwQjtFQW1GSSxnQkFBZTtFQUNmLFlBQVc7RUFDWCw0QkFBMkI7RUFDM0IseUJBQXdCO0VBQ3hCLDZCQUE2QixFQUFBO0VBR2pDO0VBMUZBO0lBNEZRLGFBQVksRUFBQSxFQUNmO0VBR0w7RUFoR0E7SUFrR1EsdUJBQXVCLEVBQUE7RUFsRy9CO0lBc0dRLGFBQVksRUFBQTtFQXRHcEI7SUF5R1Esa0JBQWlCO0lBQ2pCLFFBQU87SUFDUCxTQUFRO0lBQ1Isa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCxjQUFhLEVBQUE7RUE5R3JCO0lBa0hRLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsZUFBZSxFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlZC1sYXlvdXQvYXV0aGVudGljYXRlZC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aGVudGljYXRlZC1sYXlvdXQtY29tcG9uZW50e1xyXG4uYmFubmVye1xyXG4gICAgbWluLWhlaWdodDo0NXB4O1xyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgjOTM5MzkzLCNhMGEwYTAsICM0NTQ1NDUpO1xyXG5cclxuICAgIC5iYW5uZXItdXNlci1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFubmVyLXNldHRpbmdzLWljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXItd2VsY29tZS10ZXh0IHtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvLVJlZ3VsYXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXItaW1hZ2VzIHtcclxuICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcHAtbG9nb3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1Cb2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmxvYXQtcmlnaHQge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuXHJcbi5zaWRlTWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjY2NjY2M7XHJcblxyXG4gICAgbWluLWhlaWdodDoxMDB2aDtcclxuXHJcbiAgICAuc2lkZU1lbnVJdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MDYwNjA7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgbWFyZ2luOjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1SZWd1bGFyOyAgICAgICAgXHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlTWVudVN1Ykl0ZW17XHJcbiAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1SZWd1bGFyO1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG4uY29udGVudC1iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjRGNUY3O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0FCQUZCQztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLnNpZGUtbWVudS1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMztcclxuICAgIHBhZGRpbmctdG9wOjI1cHg7XHJcbn1cclxuXHJcbi5hcHAtZm9vdGVyIHsgICAgXHJcbiAgICBtaW4taGVpZ2h0Ojg0cHg7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM3MzczNztcclxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjQzMwNjMwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpIHtcclxuICAgIC5uby1kZXNrdG9wIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7ICAgICAgICBcclxuICAgIH0gICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpIHtcclxuICAgIC5uby1kZXNrdG9wIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubW9iaWxlLWhpZGRlbiB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgLnNpZGUtbWVudS1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgICAgd2lkdGg6MTA4dnc7XHJcbiAgICAgICAgei1pbmRleDoxMDAwMTtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1tZW51LW1vYmlsZS1zZWdtZW50LXRpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1SZWd1bGFyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/authenticated-layout/authenticated-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/authenticated-layout/authenticated-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: AuthenticatedLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedLayoutComponent", function() { return AuthenticatedLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthenticatedLayoutComponent = /** @class */ (function () {
    function AuthenticatedLayoutComponent(router) {
        this.router = router;
        this.mobileHidden = 'mobile-hidden';
        this.screenTitle = 'Home';
        this.sideMenuItems = [
            {
                "categoryName": "View Reports",
                "active": true,
                "subItems": [
                    {
                        "name": "Pay Slip",
                        "url": "/home/view-play-slip"
                    },
                    {
                        "name": "Tax Slip",
                        "url": "/home/view-tax-slip"
                    },
                    {
                        "name": "Mock Tax Slip",
                        "url": "/home"
                    },
                    {
                        "name": "Tax Planner",
                        "url": "/home/view-tax-planner"
                    }
                ]
            },
            {
                "categoryName": "Income Tax Details",
                "active": false,
                "subItems": [
                    {
                        "name": "Tax Calculator",
                        "url": "/home/tax-calculator"
                    },
                    {
                        "name": "Income Tax Details Submission",
                        "url": "/home/income-tax-details-submission"
                    }
                ]
            },
            {
                "categoryName": "Reimbursements",
                "active": false,
                "subItems": [{
                        "name": "Reimbursement Submission",
                        "url": "/home/reimbursment-submission"
                    }, {
                        "name": "Download Reimbursements Slip",
                        "url": "/home/reimbursement-claim"
                    }]
            },
            {
                "categoryName": "Flexi Declarations",
                "active": false,
                "subItems": [{
                        "name": "Submit Flexi Info",
                        "url": "/home/flexi-claim"
                    }]
            },
            {
                "categoryName": "Miscellaneous Items",
                "active": false,
                "subItems": [{
                        "name": "Documents",
                        "url": "/home/misc-items-documents"
                    }]
            },
            {
                "categoryName": "Form 16",
                "active": false,
                "subItems": [{
                        "name": "View Form 16",
                        "url": "/home/view-form-sixteen"
                    }, {
                        "name": "View Details to file ITR 1",
                        "url": "/home"
                    }, {
                        "name": "Click here to file your returns",
                        "url": "/home"
                    }]
            },
        ];
    }
    AuthenticatedLayoutComponent.prototype.openPage = function (sideMenuSubItem) {
        if (sideMenuSubItem.url) {
            this.mobileHidden = 'mobile-hidden';
            this.screenTitle = sideMenuSubItem.name;
            this.router.navigate([sideMenuSubItem.url]);
        }
    };
    AuthenticatedLayoutComponent.prototype.displayCategoryInSideMenu = function (sideMenuItem) {
        this.sideMenuItems.map(function (menuItem) {
            menuItem.active = menuItem.categoryName === sideMenuItem.categoryName;
        });
    };
    AuthenticatedLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthenticatedLayoutComponent.prototype.displayMobileMenu = function () {
        if (this.mobileHidden === 'mobile-hidden') {
            this.mobileHidden = '';
        }
        else {
            this.mobileHidden = 'mobile-hidden';
        }
    };
    AuthenticatedLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authenticated-layout',
            template: __webpack_require__(/*! ./authenticated-layout.component.html */ "./src/app/authenticated-layout/authenticated-layout.component.html"),
            styles: [__webpack_require__(/*! ./authenticated-layout.component.scss */ "./src/app/authenticated-layout/authenticated-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticatedLayoutComponent);
    return AuthenticatedLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-container\">\r\n  <div class=\"overlay\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 l4\"></div>\r\n      <div class=\"col s12 l4 vertical-center-align\">\r\n        <div class=\"wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30\">\r\n\r\n          <span class=\"login100-form-title p-b-37\">\r\n            Benefits Portal\r\n          </span>\r\n\r\n          <div class=\"wrap-input100 validate-input m-b-20\" data-validate=\"Enter username or email\">\r\n            <input class=\"input100\" type=\"text\" name=\"username\" placeholder=\"username or email\">\r\n            <span class=\"focus-input100\"></span>\r\n          </div>\r\n\r\n          <div class=\"wrap-input100 validate-input m-b-25\" data-validate=\"Enter password\">\r\n            <input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"password\">\r\n            <span class=\"focus-input100\"></span>\r\n          </div>\r\n\r\n          <div class=\"container-login100-form-btn\">\r\n            <button (click)=\"login()\" class=\"login100-form-btn\">\r\n              Sign In\r\n            </button>\r\n            <span>\r\n              <a>Forgot password?</a>\r\n            </span>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col s12 l4\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page-container {\n  width: 100%;\n  min-height: 100 vh;\n  background-image: url('loginPageBackground.jpg');\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  z-index: 1;\n  font-family: SourceSansPro-Regular, sans-serif; }\n  .login-page-container .login100-form-title {\n    display: block;\n    font-family: SourceSansPro-Bold;\n    font-size: 30px;\n    color: #4b2354;\n    line-height: 1.2;\n    text-align: center; }\n  .login-page-container .input100 {\n    font-family: SourceSansPro-Bold;\n    font-size: 16px;\n    color: #4b2354 !important;\n    line-height: 1.2;\n    display: block;\n    width: 71%;\n    height: 62px;\n    background: transparent;\n    padding: 0 20px 0 23px;\n    border-radius: 10%; }\n  .login-page-container .wrap-input100 {\n    padding: 10px;\n    padding-left: 55px; }\n  .login-page-container .container-login100-form-btn {\n    margin-bottom: 65px; }\n  .login-page-container .container-login100-form-btn span {\n      margin-left: 131px; }\n  .login-page-container .login100-form-btn {\n    border: 0px;\n    margin-left: 110px;\n    margin-top: 11px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 20px;\n    min-width: 160px;\n    height: 50px;\n    background-color: #bd59d4;\n    border-radius: 25px;\n    font-family: SourceSansPro-SemiBold;\n    font-size: 14px;\n    color: #fff;\n    line-height: 1.2;\n    text-transform: uppercase;\n    transition: all 0.4s;\n    box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\n    -moz-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\n    -webkit-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\n    -o-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\n    -ms-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5); }\n  .login-page-container .overlay {\n    width: 100%;\n    min-height: 99vh;\n    background: -webkit-linear-gradient(left, rgba(0, 167, 129, 0.5), rgba(109, 0, 167, 0.5)); }\n  .login-page-container .overlay .vertical-center-align {\n      position: relative;\n      min-height: 100vh; }\n  .login-page-container .overlay .vertical-center-align .wrap-login100 {\n        margin: 0;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 390px;\n        background: #fff;\n        border-radius: 10px;\n        overflow: hidden;\n        -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\n        opacity: 1;\n        padding-top: 80px; }\n  .login-page-container .overlay .vertical-center-align .login100-form-title {\n        display: block;\n        padding-bottom: 50px;\n        font-family: SourceSansPro-Bold;\n        font-size: 30px;\n        color: #4b2354;\n        line-height: 1.2;\n        text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxrYWxhZ2kwMVxcRGVza3RvcFxcZGV2XFxIUkJlbmVmaXRzL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdEQUE4RDtFQUs5RCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFFbkIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFFViw4Q0FBOEMsRUFBQTtFQW5CbEQ7SUFzQlEsY0FBYztJQUNkLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQTNCMUI7SUErQlEsK0JBQStCO0lBQy9CLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7RUF4QzFCO0lBNENRLGFBQVk7SUFDWixrQkFBa0IsRUFBQTtFQTdDMUI7SUFpRFEsbUJBQW1CLEVBQUE7RUFqRDNCO01BbURZLGtCQUFpQixFQUFBO0VBbkQ3QjtJQXVEUSxXQUFVO0lBQ1Ysa0JBQWtCO0lBQ3RCLGdCQUFnQjtJQUVaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUd6QixvQkFBb0I7SUFDcEIsbURBQW1EO0lBQ25ELHdEQUF3RDtJQUN4RCwyREFBMkQ7SUFDM0Qsc0RBQXNEO0lBQ3RELHVEQUF1RCxFQUFBO0VBL0UvRDtJQW9GUSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlGQUF5RixFQUFBO0VBdEZqRztNQXlGWSxrQkFBaUI7TUFDakIsaUJBQWdCLEVBQUE7RUExRjVCO1FBNkZnQixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1Qsd0NBQWdDO2dCQUFoQyxnQ0FBZ0M7UUFDaEMsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHFEQUFxRDtRQUNyRCxVQUFTO1FBRVQsaUJBQWlCLEVBQUE7RUF6R2pDO1FBNkdnQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLCtCQUErQjtRQUMvQixlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2UtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAgdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvbG9naW5QYWdlQmFja2dyb3VuZC5qcGcnKTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIC8vIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm8tUmVndWxhciwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAubG9naW4xMDAtZm9ybS10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm8tQm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICM0YjIzNTQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0MTAwe1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvLUJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGIyMzU0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogNzElO1xyXG4gICAgICAgIGhlaWdodDogNjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIH1cclxuXHJcbiAgICAud3JhcC1pbnB1dDEwMHtcclxuICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItbG9naW4xMDAtZm9ybS1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDY1cHg7IFxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMzFweDtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgLmxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgICAgICBib3JkZXI6MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDU5ZDQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1TZW1pQm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgICAgICAgXHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuNSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuNSk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuNSk7XHJcbiAgICAgICAgLW8tYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjUpO1xyXG4gICAgICAgIC1tcy1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuNSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDk5dmg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgwLCAxNjcsIDEyOSwgMC41KSwgcmdiYSgxMDksIDAsIDE2NywgMC41KSk7XHJcblxyXG4gICAgICAgIC52ZXJ0aWNhbC1jZW50ZXItYWxpZ24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuXHJcbiAgICAgICAgICAgIC53cmFwLWxvZ2luMTAwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzkwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvLUJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRiMjM1NDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kalagi01\Desktop\dev\HRBenefits\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map