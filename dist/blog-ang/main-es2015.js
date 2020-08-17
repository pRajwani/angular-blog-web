(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-post/single-post.component */ "./src/app/single-post/single-post.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/create-post/create-post.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-post/update-post.component */ "./src/app/update-post/update-post.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");













const routes = [
    { path: 'home', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'post/:postId', component: _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_4__["SinglePostComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'newpost', component: _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
    { path: 'update/:postId', component: _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePostComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
    { path: 'category/:categoryName', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"] }
];
class AppRoutingModule {
    constructor() {
        this.hide = true;
    }
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_timeout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/timeout.service */ "./src/app/services/timeout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(timeout) {
        this.timeout = timeout;
        this.title = 'blog-ang';
        this.timeoutF();
    }
    timeoutF() {
        this.timeout.checkTime();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timeout_service__WEBPACK_IMPORTED_MODULE_1__["TimeoutService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaGVpZ2h0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_timeout_service__WEBPACK_IMPORTED_MODULE_1__["TimeoutService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single-post/single-post.component */ "./src/app/single-post/single-post.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _services_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/process-httpmsg-service.service */ "./src/app/services/process-httpmsg-service.service.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/create-post/create-post.component.ts");
/* harmony import */ var _services_create_post_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/create-post.service */ "./src/app/services/create-post.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./update-post/update-post.component */ "./src/app/update-post/update-post.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");

























//Comment for fun
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
        _services_post_service__WEBPACK_IMPORTED_MODULE_11__["PostService"],
        _services_comment_service__WEBPACK_IMPORTED_MODULE_12__["CommentService"],
        _services_create_post_service__WEBPACK_IMPORTED_MODULE_17__["CreatePostService"],
        _services_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_13__["ProcessHTTPMsgServiceService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["UnauthorizedInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
        _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_9__["SinglePostComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
        _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_16__["CreatePostComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
        _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_19__["UpdatePostComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_22__["CategoriesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
                    _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_9__["SinglePostComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                    _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_16__["CreatePostComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                    _update_post_update_post_component__WEBPACK_IMPORTED_MODULE_19__["UpdatePostComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                    _categories_categories_component__WEBPACK_IMPORTED_MODULE_22__["CategoriesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                providers: [
                    _services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
                    _services_post_service__WEBPACK_IMPORTED_MODULE_11__["PostService"],
                    _services_comment_service__WEBPACK_IMPORTED_MODULE_12__["CommentService"],
                    _services_create_post_service__WEBPACK_IMPORTED_MODULE_17__["CreatePostService"],
                    _services_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_13__["ProcessHTTPMsgServiceService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["UnauthorizedInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/baseUrl */ "./src/app/shared/baseUrl.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_timeout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/timeout.service */ "./src/app/services/timeout.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");









const _c0 = function (a1) { return ["/post", a1]; };
function CategoriesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Find Out More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.baseImageUrl + post_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, post_r1._id));
} }
//import { url } from 'inspector';
//import { HttpParams } from '@angular/common/http';
class CategoriesComponent {
    constructor(postService, route, timeoutService) {
        this.postService = postService;
        this.route = route;
        this.timeoutService = timeoutService;
        this.categoryPosts = [];
        this.baseImageUrl = _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__["baseImageUrl"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.category = params.get('categoryName');
            this.displayPost();
        });
    }
    displayPost() {
        this.postService.getPosts().subscribe((data) => {
            this.categoryPosts = data.filter(o => { return o.Category == this.category; });
        });
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timeout_service__WEBPACK_IMPORTED_MODULE_4__["TimeoutService"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 12, vars: 2, consts: [[2, "border-top", "3px double #8c8b8b"], [1, "align-items-center"], [1, "row", "text-center", "margin", "container"], ["class", "col-lg-3 col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "mb-4"], [1, "card", "h-100"], ["height", "300", "width", "200", "alt", "", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text", 2, "height", "70px", "overflow", "hidden"], [1, "card-footer"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoriesComponent_div_10_Template, 11, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryPosts);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".margin[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './categories.component.html',
                styleUrls: ['./categories.component.scss']
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_timeout_service__WEBPACK_IMPORTED_MODULE_4__["TimeoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/create-post/create-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-post/create-post.component.ts ***!
  \******************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_create_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/create-post.service */ "./src/app/services/create-post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/image-upload.service */ "./src/app/services/image-upload.service.ts");
/* harmony import */ var _services_timeout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/timeout.service */ "./src/app/services/timeout.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");











const _c0 = ["pform"];
function CreatePostComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formErrors.Title);
} }
function CreatePostComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.formErrors.Category);
} }
function CreatePostComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.formErrors.Description);
} }
class CreatePostComponent {
    constructor(fb, createPostService, router, imageUploadService, timeoutService) {
        this.fb = fb;
        this.createPostService = createPostService;
        this.router = router;
        this.imageUploadService = imageUploadService;
        this.timeoutService = timeoutService;
        this.formErrors = {
            Title: "",
            Description: "",
            Category: ""
        };
        this.validationMessages = {
            Title: {
                required: "Title is required",
                minlength: "Title must be atleast 2 characters long",
                maxlength: "Title can't be of more than 100 characters"
            },
            Category: {
                required: "Category is required"
            },
            Description: {
                required: "Description is required",
                minlength: "Description must be atleast 10 characters long",
            }
        };
    }
    ngOnInit() {
        if (localStorage.getItem('JWT')) {
            this.createForm();
        }
    }
    createForm() {
        this.postForm = this.fb.group({
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            Description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            Category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            image: []
        });
        this.postForm.valueChanges
            .subscribe((data) => {
            this.onValueChanges(data);
        });
        this.onValueChanges();
    }
    ;
    onValueChanges(Data) {
        if (!this.postForm)
            return;
        const form = this.postForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + " ";
                        }
                    }
                }
            }
        }
    }
    onFileChange(event) {
        this.selectedFile = event.target.files[0];
    }
    OnSubmit() {
        this.post = this.postForm.value;
        this.post.image = this.selectedFile.name;
        const uploadData = new FormData();
        uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
        this.createPostService.createPost(this.post).subscribe(() => {
            this.imageUploadService.uploadImage(uploadData).subscribe();
            this.router.navigate(['home']);
        });
        console.log(this.post);
        this.postForm.reset({
            Title: '',
            Description: '',
            Category: ''
        });
        this.postFormDirective.resetForm();
    }
    ;
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_create_post_service__WEBPACK_IMPORTED_MODULE_2__["CreatePostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timeout_service__WEBPACK_IMPORTED_MODULE_5__["TimeoutService"])); };
CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], viewQuery: function CreatePostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.postFormDirective = _t.first);
    } }, decls: 40, vars: 5, consts: [[1, "container", "contact-form"], ["enctype", "multipart/form-data", "novalidate", "", 3, "formGroup", "ngSubmit"], ["pform", "ngForm"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "formControlName", "Title", "name", "Title", "placeholder", "Enter the Title", "required", "", 1, "form-control"], [4, "ngIf"], ["formControlName", "Category", "id", "Category", "name", "Category", "required", "", 1, "form-control"], ["selected", "", "hidden", "", "value", "", 1, ""], ["value", "Sports", 1, ""], ["value", "Education", 1, ""], ["value", "Fashion", 1, ""], ["for", "fileupload", 1, "form-control", "file-upload", "btn", "btn-primary"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019zM13 13h3l-4-5-4 5h3v4h2v-4z", "fill", "rgba(255,255,255,1)"], ["type", "file", "name", "image", "id", "fileupload", "formControlName", "image", 3, "change"], [1, "form-group", "buttons"], ["type", "submit", "name", "btnSubmit", 1, "btn", "btn-primary", "btnContact", 3, "disabled"], ["type", "submit", "name", "btncancel", "routerLink", "/profile", "value", "Cancel", 1, "btn", "btn-primary", "btnContact"], ["name", "Description", "formControlName", "Description", "placeholder", "Enter the Description", "required", "", 1, "form-control", 2, "width", "100%", "height", "150px"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreatePostComponent_Template_form_ngSubmit_2_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreatePostComponent_small_10_Template, 2, 1, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select a Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreatePostComponent_small_21_Template, 2, 1, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0Upload Post's Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatePostComponent_Template_input_change_29_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CreatePostComponent_small_38_Template, 2, 1, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.Category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.postForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.Description);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(left, #0072ff, #00c6ff);\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-top: 8.45%;\n  width: 70%;\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n\n.contact-image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.contact-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 6rem;\n  width: 11%;\n  margin-top: -3%;\n  transform: rotate(29deg);\n}\n\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 14%;\n}\n\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: -7%;\n}\n\n.contact-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 8%;\n  margin-top: -10%;\n  text-align: center;\n  color: #5b72a5;\n  font-weight: bolder;\n}\n\n.contact-form[_ngcontent-%COMP%]   .btnContact[_ngcontent-%COMP%] {\n  width: 30%;\n  border: none;\n  border-radius: 1rem;\n  padding: 1.5%;\n  background: #0275d8;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n}\n\n.btnContactSubmit[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 1rem;\n  padding: 1.5%;\n  color: #fff;\n  background-color: #0062cc;\n  border: none;\n  cursor: pointer;\n}\n\n.file-upload[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyREFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUxBO0VBRUksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBT0o7O0FBSkE7RUFDSSxhQUFBO0FBT0o7O0FBSkE7RUFDSSxnQkFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwNzJmZiwgIzAwYzZmZik7XHJcbn1cclxuLmNvbnRhY3QtZm9ybXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA4LjQ1JTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4uY29udGFjdC1mb3JtIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItcmFkaXVzOjFyZW07XHJcbn1cclxuLmNvbnRhY3QtaW1hZ2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhY3QtaW1hZ2UgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnJlbTtcclxuICAgIHdpZHRoOiAxMSU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyOWRlZyk7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBmb3Jte1xyXG4gICAgcGFkZGluZzogMTQlO1xyXG59XHJcbi5jb250YWN0LWZvcm0gZm9ybSAucm93e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTclO1xyXG5cclxufVxyXG4uY29udGFjdC1mb3JtIGgye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1YjcyYTU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5jb250YWN0LWZvcm0gLmJ0bkNvbnRhY3Qge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgYmFja2dyb3VuZDogIzAyNzVkODtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYnRuQ29udGFjdFN1Ym1pdFxyXG57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDEuNSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZCBpbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4uYnV0dG9uc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-post',
                templateUrl: './create-post.component.html',
                styleUrls: ['./create-post.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_create_post_service__WEBPACK_IMPORTED_MODULE_2__["CreatePostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"] }, { type: _services_timeout_service__WEBPACK_IMPORTED_MODULE_5__["TimeoutService"] }]; }, { postFormDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["pform"]
        }] }); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "py-5", "bg-dark"], [1, "container"], [1, "m-0", "text-center", "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 Blog - Web 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".margin[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2lue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





function HeaderComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_30_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.loggingOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi, ", ctx_r2.username, "");
} }
class HeaderComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.flag = false;
    }
    ngOnInit() {
        if (localStorage.getItem('JWT')) {
            this.flag = true;
            this.username = JSON.parse(localStorage.getItem('JWT')).username;
        }
    }
    loggingOut() {
        this.loginService.logOut();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 32, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top"], ["href", "#", 1, "navbar-brand"], [1, "text-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["routerLink", "/home", 1, "nav-link"], [1, "sr-only"], [1, "nav-link"], [1, "dropdown"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/category/Education", 1, "dropdown-item"], ["routerLink", "/category/Sports", 1, "dropdown-item"], ["routerLink", "/category/Fashion", 1, "dropdown-item"], ["class", "nav-item", 4, "ngIf", "ngIfElse"], ["logout", ""], [1, "nav-item"], ["routerLink", "/login", 1, "nav-link", "active"], ["width", "2em", "height", "2em", "viewBox", "0 0 16 16", "fill", "#ffffff", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-person-circle"], ["d", "M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"], ["fill-rule", "evenodd", "d", "M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], ["fill-rule", "evenodd", "d", "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"], [1, "dropdown-item"], ["routerLink", "/profile", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Blog-Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to the Blog World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Category \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_li_29_Template, 3, 0, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HeaderComponent_ng_template_30_Template, 14, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".is-right[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLXJpZ2h0e1xyXG4gICAgcmlnaHQ6MCAhaW1wb3J0YW50XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/baseUrl */ "./src/app/shared/baseUrl.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_timeout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/timeout.service */ "./src/app/services/timeout.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");









function IndexComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/post", a1]; };
function IndexComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Find Out More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.baseImageUrl + post_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", post_r2.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, post_r2._id));
} }
class IndexComponent {
    constructor(postService, router, timeoutService) {
        this.postService = postService;
        this.router = router;
        this.timeoutService = timeoutService;
        this.baseImageUrl = _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__["baseImageUrl"];
    }
    ngOnInit() {
        this.route = this.router;
        if (localStorage.getItem('JWT')) {
            this.name = JSON.parse(localStorage.getItem('JWT')).username;
        }
        this.postService.getPosts().subscribe((posts) => {
            this.posts = posts.sort((a, b) => { return a.Views - b.View; });
            this.featuredPosts = posts.filter((o) => { return o.featured == true; });
        });
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timeout_service__WEBPACK_IMPORTED_MODULE_4__["TimeoutService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 40, vars: 9, consts: [[1, "container"], [1, "row", "mt-4"], [1, "col", "mt-4"], ["id", "carouselExampleCaptions", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "1"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["height", "320", 1, "w-100", 3, "src", "alt"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["height", "320", "alt", "...", 1, "w-100", 3, "src"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "row", "justify-content-center", "mt-2"], ["routerLink", "/newpost", "class", "border-3 rounded mb-2", 4, "ngIf"], [1, "row", "text-center"], ["class", "col-lg-3 col-md-6 mb-4", 4, "ngFor", "ngForOf"], ["routerLink", "/newpost", 1, "border-3", "rounded", "mb-2"], ["width", "2em", "height", "2em", "viewBox", "0 0 16 16", "fill", "blue", "xmlns", "http://www.w3.org/2000/svg", 1, "hover", "bi", "bi-plus-circle-fill"], ["fill-rule", "evenodd", "d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"], [1, "col-lg-3", "col-md-6", "mb-4"], [1, "card", "h-100"], ["height", "300", "width", "200", 1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text", 2, "height", "70px", "overflow", "hidden"], [1, "card-footer"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, IndexComponent_div_36_Template, 5, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, IndexComponent_div_38_Template, 11, 7, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.baseImageUrl + ctx.featuredPosts[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.featuredPosts[0].image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featuredPosts[0].Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.baseImageUrl + ctx.featuredPosts[1].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featuredPosts[1].Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.baseImageUrl + ctx.featuredPosts[2].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.featuredPosts[2].Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".border-3[_ngcontent-%COMP%] {\n  border-width: 3px !important;\n}\n\n.hover[_ngcontent-%COMP%]:hover {\n  fill: darkred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLTN7XHJcbiAgICBib3JkZXItd2lkdGg6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLmhvdmVyOmhvdmVye1xyXG4gICAgZmlsbDpkYXJrcmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss']
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_timeout_service__WEBPACK_IMPORTED_MODULE_4__["TimeoutService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/baseUrl */ "./src/app/shared/baseUrl.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");









function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login Unsuccessfull");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.loginError, " ");
} }
class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.baseImageUrl = _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__["baseImageUrl"];
        this.loginData = {
            username: null,
            password: null
        };
    }
    ngOnInit() { }
    OnSubmit() {
        this.loginService.login(this.loginData).subscribe(userData => {
            this.userData = userData;
            console.log(userData);
            if (userData.success == true)
                this.router.navigate(['/', 'home']);
            else {
                console.log(userData.err);
                this.loginError = userData.err.name;
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 3, consts: [[1, "container-fluid"], [1, "row", "main-content", "bg-success", "text-center"], [1, "col-md-4", "text-center", "company__info"], [1, "col-md-8", "col-xs-12", "col-sm-12", "login_form"], [1, "row", "justify-content-center"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "row"], [1, "form-group", "justify-content-center", 3, "ngSubmit"], ["type", "text", "name", "first", "id", "username", "placeholder", "Username", 1, "form__input", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", 1, "form__input", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "btn"], ["routerLink", "/signup"], ["role", "alert", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.loginData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.loginData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginData.password);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".c[_ngcontent-%COMP%] {\n  width: 100vh;\n  height: 100vh;\n}\n\n.px[_ngcontent-%COMP%] {\n  width: 20vw !important;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 20px;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);\n  margin: 5em auto;\n  display: flex;\n}\n\n.company__info[_ngcontent-%COMP%] {\n  background-color: #282829;\n  background-image: linear-gradient(213deg, #282829 9%, #8c8c8c 46%, #160e0e 100%);\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n}\n\n.fa-android[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n@media screen and (max-width: 640px) {\n  .main-content[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .company__info[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .login_form[_ngcontent-%COMP%] {\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n  }\n}\n\n@media screen and (min-width: 642px) and (max-width: 800px) {\n  .main-content[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n\n.row[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  color: #160e0e;\n  font-weight: bolder;\n}\n\n.row[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: dimgray;\n}\n\n.row[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n}\n\n.login_form[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-top: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n}\n\nform[_ngcontent-%COMP%] {\n  padding: 0 2em;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.form__input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid transparent;\n  border-radius: 0;\n  border-bottom: 1px solid #aaa;\n  padding: 1em 0.5em 0.5em;\n  padding-left: 2em;\n  outline: none;\n  margin: 1.5em auto;\n  transition: all 0.5s ease;\n  align-self: center !important;\n}\n\n.form__input[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #008080;\n  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n  width: 70%;\n  border-radius: 30px;\n  color: #160e0e;\n  font-weight: 600;\n  background-color: #fff;\n  border: 1px solid #2d3535;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\n  background: linear-gradient(213deg, #282829 9%, #8c8c8c 46%, #160e0e 100%);\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFLQTtFQUNDLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBRkQ7O0FBSUE7RUFDQyx5QkFBQTtFQUNBLGdGQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUREOztBQUdBO0VBQ0MsY0FBQTtBQUFEOztBQUVBO0VBQ0M7SUFBYyxVQUFBO0VBRWI7O0VBREQ7SUFDQyxhQUFBO0VBSUE7O0VBRkQ7SUFDQyw0QkFBQTtJQUNBLCtCQUFBO0VBS0E7QUFDRjs7QUFIQTtFQUNDO0lBQWMsVUFBQTtFQU1iO0FBQ0Y7O0FBTEE7RUFDQywyQkFBQTtBQU9EOztBQUxBO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0FBUUQ7O0FBTkE7RUFDQyxjQUFBO0FBU0Q7O0FBUEE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7QUFVRDs7QUFSQTtFQUNDLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFXRDs7QUFUQTtFQUNDLGNBQUE7QUFZRDs7QUFWQTtFQUNDLGtDQUFBO0FBYUQ7O0FBWEE7RUFDQyxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFjRDs7QUFaQTtFQUNDLDRCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQWVEOztBQWJBO0VBQ0MseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWdCRDs7QUFkQTtFQUNDLDBFQUFBO0VBQ0EsV0FBQTtBQWlCRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN7XHJcbiAgICB3aWR0aDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ucHh7XHJcbiAgICB3aWR0aDogMjB2dyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy9UZW1wbGF0ZVxyXG5cclxuLm1haW4tY29udGVudHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Ym94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsLjQpO1xyXG5cdG1hcmdpbjogNWVtIGF1dG87XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG4uY29tcGFueV9faW5mb3tcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI5O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMTNkZWcsICMyODI4MjkgOSUsICM4YzhjOGMgNDYlLCAjMTYwZTBlIDEwMCUpO1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuLmZhLWFuZHJvaWR7XHJcblx0Zm9udC1zaXplOjNlbTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG5cdC5tYWluLWNvbnRlbnR7d2lkdGg6IDkwJTt9XHJcblx0LmNvbXBhbnlfX2luZm97XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQubG9naW5fZm9ybXtcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MjBweDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MjBweDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQycHgpIGFuZCAobWF4LXdpZHRoOjgwMHB4KXtcclxuXHQubWFpbi1jb250ZW50e3dpZHRoOiA3MCU7fVxyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcblx0bWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5yb3cgPiBoMntcclxuXHRjb2xvcjojMTYwZTBlO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLnJvdz5we1xyXG5cdGNvbG9yOiBkaW1ncmF5O1xyXG59XHJcbi5yb3c+cD5he1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubG9naW5fZm9ybXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjIwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MjBweDtcclxuXHRib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO1xyXG5cdGJvcmRlci1yaWdodDoxcHggc29saWQgI2NjYztcclxufVxyXG5mb3Jte1xyXG5cdHBhZGRpbmc6IDAgMmVtO1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm1fX2lucHV0e1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlcjowcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcclxuXHRwYWRkaW5nOiAxZW0gLjVlbSAuNWVtO1xyXG5cdHBhZGRpbmctbGVmdDogMmVtO1xyXG5cdG91dGxpbmU6bm9uZTtcclxuXHRtYXJnaW46MS41ZW0gYXV0bztcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcblx0YWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm1fX2lucHV0OmZvY3Vze1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDgwODA7XHJcblx0Ym94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsODAsODAsLjQpOyBcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmJ0bntcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcblx0d2lkdGg6IDcwJTtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdGNvbG9yOiMxNjBlMGU7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyZDM1MzU7XHJcblx0bWFyZ2luLXRvcDogMS41ZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbi5idG46aG92ZXIsIC5idG46Zm9jdXN7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxM2RlZywgIzI4MjgyOSA5JSwgIzhjOGM4YyA0NiUsICMxNjBlMGUgMTAwJSk7XHJcblx0Y29sb3I6I2ZmZjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/baseUrl */ "./src/app/shared/baseUrl.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_timeout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/timeout.service */ "./src/app/services/timeout.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









const _c0 = function (a1) { return ["/update", a1]; };
const _c1 = function (a1) { return ["/post", a1]; };
function ProfileComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_23_div_1_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const post_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.delete(post_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Find Out More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.baseImageUrl + post_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", post_r4.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, post_r4._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r4.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r4.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, post_r4._id));
} }
function ProfileComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_23_div_1_Template, 50, 10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.myPosts);
} }
function ProfileComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have not posted anything yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(postService, timeoutService) {
        this.postService = postService;
        this.timeoutService = timeoutService;
        this.baseImageUrl = _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__["baseImageUrl"];
    }
    ngOnInit() {
        if (localStorage.getItem('JWT')) {
            this.username = JSON.parse(localStorage.getItem('JWT')).username;
            this.postService.getPosts().subscribe((posts) => {
                this.myPosts = posts.filter(o => { return o.postAuthor.username == this.username; });
                if (this.myPosts.length > 0) {
                    this.name = this.myPosts[0].postAuthor.name;
                }
                else {
                    this.myPosts = null;
                }
            });
        }
    }
    delete(post_id) {
        this.postService.deletePost(post_id).subscribe();
        this.myPosts = this.myPosts.filter(o => { return o._id != post_id; });
        if (this.myPosts.length == 0)
            window.location.href = 'http://localhost:4200/profile';
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timeout_service__WEBPACK_IMPORTED_MODULE_3__["TimeoutService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 27, vars: 4, consts: [[1, "adjust"], [1, "row", "mt-5", "ml-2"], [1, "col-2"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "100", "height", "100", "viewBox", "0 0 48 48", 2, "fill", "#000000"], ["fill", "#fcbf95", "d", "M37.975,19.867c0.284,1.696,0.514,3.776-0.164,5.357c-0.678,1.581-1.519,3.108-1.92,4.781 c-0.378,1.578-0.35,3.237-0.796,4.797c-0.372,1.299-1.058,2.481-1.738,3.648c-0.811,1.393-1.623,2.785-2.434,4.178 c-0.605,1.039-1.239,2.109-2.214,2.813c-1.287,0.928-2.967,1.077-4.553,1.086c-1.093,0.006-2.256-0.06-3.152-0.686 c-0.445-0.311-0.792-0.739-1.132-1.162c-0.981-1.218-1.962-2.435-2.944-3.653c-0.469-0.583-0.941-1.169-1.309-1.821 c-0.669-1.188-0.965-2.544-1.252-3.877c-0.27-1.256-0.652-2.736-0.923-3.992c-0.968-1.07-1.66-2.649-2.223-3.978 c-0.821-1.938-1.659-4.041-1.18-6.091L24,20.965C24,20.965,36.399,18.363,37.975,19.867z"], ["fill", "#513620", "d", "M27.988,45.434c-2.586,1.813-6.099,0.588-5.789,0.77c-1.752-0.083-4.65-4.406-4.65-4.406 c-0.065-0.812-0.103-1.486-0.168-2.298c-0.045-0.562-0.088-1.143,0.093-1.677c0.25-0.738,0.901-1.282,1.613-1.598 c0.825-0.367,3.91-0.2,4.81-0.271c0.735-0.058,3.933-0.406,4.666-0.329c0.606,0.064,1.232,0.162,1.741,0.497 c0.577,0.38,0.935,1.028,1.105,1.697c0.17,0.669,0.173,1.369,0.175,2.059c0.002,0.85,0.004,0.629,0.006,1.478 C31.59,41.356,30.016,45.25,27.988,45.434z M20.512,38.034c-0.426,0.697-0.608,1.545-0.453,2.347 c0.095,0.493,0.378,1.025,0.872,1.113c0.392,0.07,0.767-0.163,1.102-0.378c0.591-0.378,1.208-0.731,1.882-0.927 c0.674-0.196,1.415-0.226,2.066,0.034c0.413,0.165,0.777,0.44,1.193,0.597c0.416,0.157,0.938,0.169,1.254-0.144 c0.367-0.363,0.293-0.964,0.186-1.468c-0.1-0.473-0.225-0.956-0.477-1.368C25.634,38.244,23.034,38.303,20.512,38.034z"], ["fill", "#010101", "d", "M21.051,25.413c-0.12-0.254-0.325-0.466-0.575-0.595c-0.474-0.244-0.982-0.155-1.454-0.07 c-0.455,0.08-0.92,0.123-1.383,0.127l-0.176,0.001c-0.66,0.001-1.481,0.004-2.074,0.551c-0.202,0.188-0.215,0.504-0.027,0.707 c0.099,0.106,0.232,0.16,0.367,0.16c0.121,0,0.243-0.044,0.34-0.133c0.281-0.259,0.773-0.281,1.267-0.283 c-0.003,0.021-0.019,0.045-0.019,0.065c-0.001,0.211,0.105,0.415,0.276,0.531c0.162,0.112,0.337,0.129,0.456,0.129 c0.028,0,0.054-0.001,0.075-0.002c0.352-0.016,0.939-0.042,1.324-0.479c0.038-0.043,0.072-0.089,0.145-0.188 c0.065-0.081,0.092-0.175,0.1-0.271c0.125-0.007,0.24,0.001,0.324,0.044c0.057,0.029,0.104,0.078,0.132,0.136 c0.117,0.249,0.416,0.354,0.666,0.236C21.063,25.961,21.17,25.663,21.051,25.413z"], ["fill", "#010101", "d", "M32.226,24.931c-1.428-0.209-2.915-0.421-4.388-0.372c-0.276,0.01-0.492,0.242-0.482,0.518 s0.235,0.479,0.518,0.482c0.368-0.015,0.74-0.008,1.114,0.01c-0.057,0.214,0.025,0.447,0.226,0.562 c0.288,0.164,0.614,0.246,0.941,0.246c0.299,0,0.598-0.069,0.868-0.208c0.146-0.075,0.23-0.213,0.255-0.363 c0.217,0.03,0.435,0.061,0.65,0.092c0.064,0.022,0.134,0.034,0.203,0.034c0.081,0,0.162-0.016,0.235-0.049 c0.203-0.091,0.317-0.305,0.287-0.525C32.623,25.138,32.446,24.963,32.226,24.931z"], ["fill", "#010101", "d", "M24,34.54c-0.122,0-0.254-0.009-0.39-0.037c-0.436-0.092-0.752-0.355-1.031-0.587 c-0.179-0.149-0.348-0.29-0.517-0.357c-0.18-0.072-0.392-0.068-0.567,0.011c-0.15,0.068-0.386,0.051-0.526-0.036 c-0.215-0.135-0.299-0.378-0.306-0.562c-0.016-0.565,0.22-1.13,0.631-1.513c-0.006,0.003,0.02-0.046,0.08-0.104 c0.2-0.189,0.517-0.18,0.707,0.021c0.181,0.192,0.18,0.49,0.004,0.681c-0.028,0.038-0.086,0.111-0.107,0.131 c-0.095,0.089-0.172,0.199-0.226,0.319c0.233-0.002,0.466,0.036,0.684,0.123c0.314,0.126,0.563,0.333,0.782,0.516 c0.218,0.181,0.405,0.337,0.599,0.378c0.107,0.023,0.244,0.016,0.38,0.009l0.827-0.041c0.091-0.005,0.194-0.011,0.239-0.031 c0.044-0.02,0.111-0.088,0.177-0.153c0.089-0.089,0.179-0.176,0.28-0.248c0.163-0.116,0.341-0.189,0.498-0.253 c0.103-0.042,0.273-0.112,0.302-0.154c0.007-0.051-0.077-0.22-0.128-0.32c-0.09-0.179-0.192-0.381-0.23-0.62 c-0.045-0.272,0.141-0.529,0.413-0.573c0.266-0.05,0.529,0.139,0.573,0.413c0.015,0.087,0.077,0.211,0.138,0.331 c0.144,0.287,0.341,0.68,0.168,1.129c-0.169,0.439-0.566,0.602-0.857,0.721c-0.116,0.047-0.227,0.092-0.296,0.142 c-0.057,0.041-0.104,0.091-0.152,0.14c-0.116,0.117-0.262,0.263-0.472,0.358c-0.215,0.098-0.428,0.109-0.599,0.118l-0.831,0.041 C24.172,34.535,24.089,34.54,24,34.54z"], ["fill", "#010101", "d", "M21.079,42.007c-0.077,0-0.156-0.006-0.236-0.021c-0.75-0.135-1.15-0.868-1.275-1.51 c-0.173-0.896,0.016-1.882,0.518-2.703c0.101-0.165,0.287-0.258,0.479-0.236c2.525,0.27,5.046,0.204,7.493-0.191 c0.205-0.037,0.401,0.059,0.507,0.232c0.29,0.474,0.431,1.013,0.54,1.524c0.084,0.397,0.282,1.328-0.322,1.928 c-0.504,0.496-1.253,0.457-1.784,0.257c-0.238-0.09-0.463-0.213-0.688-0.339c-0.168-0.094-0.336-0.189-0.516-0.262 c-0.489-0.195-1.107-0.202-1.74-0.017c-0.638,0.186-1.244,0.543-1.752,0.868C21.987,41.74,21.57,42.007,21.079,42.007z M20.792,38.565c-0.263,0.548-0.351,1.16-0.242,1.721c0.061,0.314,0.234,0.674,0.47,0.716c0.201,0.036,0.504-0.153,0.744-0.307 c0.568-0.363,1.252-0.765,2.012-0.986c0.597-0.175,1.498-0.307,2.392,0.049c0.22,0.089,0.427,0.203,0.633,0.318 c0.18,0.101,0.358,0.203,0.551,0.275c0.243,0.092,0.574,0.121,0.728-0.031c0.194-0.193,0.12-0.668,0.048-1.009 c-0.075-0.354-0.154-0.659-0.267-0.924C25.545,38.732,23.17,38.791,20.792,38.565z"], ["fill", "#231f20", "d", "M44.969,14.726c-0.45-0.369-1.039-0.512-1.608-0.632c-1.686-0.354-4.012-0.594-5.731-0.717 l-27.423,1.031c-1.842,0.344-4.507,0.579-6.379,0.515c-0.339-0.012-0.704-0.022-0.984,0.169c-0.354,0.244-0.444,0.752-0.313,1.162 s0.434,0.739,0.746,1.036c1.894,1.806,4.361,2.921,6.899,3.561c2.537,0.639,5.164,0.831,7.775,0.999 c4.6,0.296,9.258,0.52,13.784-0.351c2.335-0.45,4.604-1.185,6.865-1.919c2.138-0.694,4.307-1.403,6.169-2.662 c0.255-0.172,0.513-0.365,0.651-0.64C45.683,15.757,45.419,15.095,44.969,14.726z"], ["fill", "#373837", "d", "M10.377,12.643c0,0-0.925,5.42,2.487,6.01s16.244,1.455,22.673-1.039 c1.762-0.62,2.112-0.821,2.28-2.361s-0.187-3.004-0.187-3.004S31.668,14.533,24,14.408C16.332,14.283,12.12,13.48,10.377,12.643z"], ["fill", "#231f20", "d", "M11.524,4.009c0,0-1.815,7.569-0.707,8.626c2.77,0.967,9.459,2.11,14.141,1.754 c4.682-0.355,8.635-0.426,12.548-2.57c-0.559-5.73-1.4-8.829-1.4-8.829s-7.542-1.613-12.939-1.435 C17.817,2.496,12.104,3.25,11.524,4.009z"], ["fill", "#010101", "d", "M45.287,14.34c-0.532-0.436-1.192-0.603-1.823-0.735c-1.824-0.383-4.173-0.601-5.409-0.697 c-0.143-3.044-0.488-6.373-1.054-9.959c-0.036-0.228-0.224-0.401-0.453-0.42c-1.695-0.141-3.444-0.417-5.136-0.685 c-3.813-0.604-7.761-1.229-11.565-0.395c-0.588,0.129-1.171,0.29-1.753,0.452c-1.185,0.329-2.304,0.64-3.466,0.678l-0.372,0.01 c-1.071,0.025-2.284,0.054-3.205,0.75c-0.099,0.074-0.166,0.184-0.189,0.306C10.214,7.07,9.901,10.59,9.902,13.953 c-1.871,0.331-4.37,0.528-6.055,0.469c-0.365-0.013-0.868-0.029-1.284,0.258c-0.511,0.351-0.719,1.061-0.507,1.727 c0.165,0.516,0.519,0.902,0.877,1.245c1.684,1.605,3.912,2.791,6.615,3.541c-0.515,2.279,0.482,4.637,1.212,6.361 c0.61,1.439,1.283,2.933,2.223,4.016c0.131,0.598,0.284,1.24,0.437,1.883c0.162,0.68,0.324,1.358,0.458,1.981 c0.292,1.353,0.593,2.751,1.306,4.017c0.389,0.689,0.88,1.299,1.354,1.889l2.944,3.654c0.359,0.444,0.73,0.904,1.235,1.258 c0.958,0.669,2.152,0.775,3.312,0.775c0.043,0,0.086,0,0.129,0c1.599-0.009,3.424-0.156,4.843-1.181 c1.078-0.776,1.756-1.939,2.354-2.966l2.435-4.179c0.688-1.18,1.397-2.399,1.787-3.762c0.252-0.881,0.359-1.787,0.463-2.664 c0.089-0.749,0.172-1.457,0.339-2.155c0.28-1.172,0.782-2.26,1.313-3.411c0.197-0.429,0.395-0.857,0.58-1.289 c0.681-1.591,0.514-3.618,0.252-5.29c0.078-0.025,0.156-0.05,0.234-0.075c2.146-0.696,4.363-1.417,6.295-2.724 c0.294-0.199,0.623-0.444,0.818-0.831C46.261,15.719,45.873,14.821,45.287,14.34z M37.053,12.855 c0.031,0.634,0.063,1.269,0.075,1.876c0.012,0.647-0.003,1.263-0.312,1.678c-0.335,0.452-0.983,0.63-1.673,0.786 c-6.093,1.372-14.085,2.73-21.876,1.039c-0.836-0.182-1.738-0.457-2.103-1.121c-0.196-0.358-0.229-0.813-0.248-1.326 c-0.031-0.815-0.032-1.649-0.021-2.487c0,0,0,0,0.001,0c0.181,0.111,0.373,0.202,0.57,0.285c0.033,0.014,0.066,0.028,0.099,0.041 c0.395,0.155,0.809,0.264,1.223,0.345c0.047,0.009,0.094,0.018,0.141,0.027c0.197,0.036,0.392,0.07,0.584,0.099 c3.573,0.542,6.918,0.813,10.059,0.813c0.629,0,1.25-0.011,1.863-0.033c0.341-0.012,0.674-0.035,1.01-0.054 c0.264-0.015,0.532-0.025,0.793-0.044c0.452-0.033,0.896-0.078,1.339-0.123c0.134-0.014,0.272-0.023,0.406-0.038 c0.511-0.057,1.014-0.126,1.514-0.2c0.06-0.009,0.121-0.016,0.181-0.025c0.542-0.083,1.075-0.177,1.604-0.279 c0.015-0.003,0.03-0.005,0.045-0.008c1.637-0.32,3.21-0.737,4.726-1.249C37.052,12.855,37.053,12.855,37.053,12.855z M11.806,4.033 c0.658-0.402,1.58-0.424,2.473-0.444l0.383-0.01c1.281-0.042,2.511-0.384,3.701-0.715c0.563-0.156,1.128-0.313,1.698-0.438 c3.62-0.792,7.474-0.184,11.195,0.405c1.581,0.25,3.211,0.508,4.817,0.659c0.458,2.961,0.764,5.745,0.927,8.328 c-4.068,1.41-8.573,2.104-13.625,2.087c-0.138,0-0.283-0.011-0.422-0.013c-0.877-0.01-1.763-0.031-2.674-0.083 c-0.373-0.021-0.764-0.065-1.143-0.094c-0.693-0.052-1.38-0.096-2.092-0.172c-1.104-0.117-2.231-0.263-3.383-0.437 c-1.034-0.156-2.089-0.373-2.727-1.058c0,0-0.001-0.001-0.002-0.001C11.031,9.403,11.314,6.691,11.806,4.033z M30.49,42.377 c-0.548,0.94-1.169,2.007-2.075,2.659c-1.19,0.859-2.823,0.983-4.264,0.991c-0.971,0.002-2.06-0.035-2.862-0.596 c-0.388-0.271-0.699-0.657-1.029-1.065l-2.224-2.76c-0.026-0.343-0.05-0.671-0.072-0.991c-0.026-0.373-0.052-0.747-0.085-1.154 c-0.04-0.507-0.082-1.032,0.069-1.478c0.179-0.527,0.668-1.002,1.343-1.302c0.475-0.21,2.233-0.204,3.286-0.208 c0.57,0.001,1.074,0.001,1.359-0.022c0.168-0.013,0.463-0.041,0.827-0.075c1.129-0.108,3.224-0.304,3.748-0.254 c0.509,0.054,1.089,0.134,1.519,0.418c0.416,0.274,0.734,0.772,0.896,1.402c0.156,0.616,0.157,1.287,0.158,1.937l0.007,1.467 L30.49,42.377z M37.351,25.026c-0.182,0.424-0.375,0.845-0.568,1.265c-0.528,1.146-1.074,2.329-1.378,3.598 c-0.181,0.755-0.271,1.525-0.359,2.271c-0.104,0.876-0.201,1.702-0.431,2.506c-0.355,1.242-1.034,2.407-1.689,3.533l-0.842,1.446 c-0.003-0.618-0.021-1.294-0.188-1.949c-0.223-0.872-0.689-1.579-1.314-1.99c-0.617-0.407-1.338-0.512-1.964-0.577 c-0.571-0.064-2.264,0.092-3.948,0.252c-0.356,0.034-0.646,0.062-0.81,0.075c-0.269,0.021-0.737,0.02-1.28,0.019 c-1.729,0.002-3.074,0.019-3.693,0.294c-0.942,0.419-1.611,1.092-1.884,1.895c-0.218,0.641-0.165,1.298-0.118,1.879 c0.019,0.241,0.034,0.458,0.05,0.682c-0.319-0.407-0.631-0.823-0.879-1.262c-0.638-1.134-0.923-2.457-1.198-3.737 c-0.136-0.63-0.3-1.315-0.463-2.002c-0.163-0.682-0.325-1.363-0.46-1.99c-0.019-0.086-0.06-0.165-0.118-0.23 c-0.883-0.975-1.538-2.43-2.134-3.837c-0.875-2.065-1.563-3.922-1.16-5.731c0.331,0.076,0.662,0.147,0.995,0.211 c0.001,0.002,0,0.005,0.001,0.007c0.196,0.497,0.484,1.016,0.764,1.518c0.376,0.677,0.766,1.376,0.919,2.005 c0.017,0.068,0.071,0.21,0.19,0.335l0.142,2.125c0.043,0.654,0.114,1.75,0.872,2.408c0.532,0.463,1.219,0.569,1.882,0.615 c0.384,0.026,0.77,0.039,1.157,0.039c0.463,0,0.927-0.019,1.388-0.057c0.842-0.068,1.806-0.219,2.572-0.813 c0.962-0.744,1.329-1.985,1.597-2.892c0.118-0.401,0.331-1.13,0.273-1.86c0.417-0.103,0.883-0.128,1.359-0.071 c0.255,0.032,0.507,0.093,0.756,0.168c-0.032,0.697,0.163,1.38,0.276,1.763c0.267,0.905,0.632,2.146,1.595,2.892 c0.768,0.594,1.731,0.744,2.573,0.813c0.461,0.038,0.925,0.057,1.388,0.057c0.388,0,0.773-0.013,1.157-0.039 c0.663-0.046,1.35-0.152,1.882-0.615c0.758-0.658,0.829-1.754,0.872-2.407l0.142-2.126c0.119-0.125,0.173-0.267,0.19-0.338 c0.251-1.025,1.458-3.493,2.111-4.642C37.791,22.013,37.904,23.737,37.351,25.026z M33.578,23.245 c-0.436-0.061-0.704-0.052-0.989-0.046c-0.179,0.005-0.373,0.01-0.638-0.004c-0.487-0.027-0.917-0.077-1.33-0.124 c-0.785-0.09-1.532-0.174-2.484-0.099c-0.809,0.063-1.646,0.178-2.219,0.8c-0.123,0.133-0.216,0.278-0.293,0.429 c-0.287-0.083-0.577-0.152-0.871-0.189c-0.625-0.078-1.208-0.024-1.756,0.118c-0.07-0.125-0.151-0.246-0.255-0.358 c-0.573-0.622-1.41-0.736-2.219-0.8c-0.958-0.076-1.698,0.009-2.484,0.099c-0.413,0.047-0.843,0.097-1.33,0.124 c-0.265,0.015-0.458,0.01-0.638,0.004c-0.285-0.006-0.553-0.015-0.988,0.046c-0.402,0.055-0.945,0.193-1.317,0.603 c-0.185-0.393-0.399-0.783-0.612-1.166c-0.161-0.29-0.311-0.568-0.447-0.838c1.665,0.248,3.375,0.387,5.212,0.505 c2.216,0.142,4.407,0.262,6.57,0.262c2.485,0,4.934-0.158,7.342-0.621c1.498-0.288,2.974-0.7,4.431-1.146 c-0.472,0.905-1.016,2.046-1.389,2.981C34.501,23.434,33.972,23.299,33.578,23.245z M34.282,25.314l-0.15,2.255 c-0.044,0.674-0.121,1.363-0.53,1.719c-0.31,0.269-0.805,0.338-1.294,0.371c-0.793,0.056-1.598,0.049-2.395-0.016 c-0.696-0.057-1.482-0.174-2.043-0.607c-0.654-0.506-0.952-1.379-1.248-2.384c-0.24-0.812-0.424-1.707,0.032-2.202 c0.327-0.356,0.925-0.431,1.561-0.481c0.231-0.018,0.448-0.025,0.657-0.025c0.567,0,1.074,0.058,1.636,0.122 c0.431,0.049,0.879,0.1,1.387,0.128c0.303,0.018,0.52,0.012,0.722,0.006c0.263-0.01,0.471-0.013,0.825,0.036 c0.406,0.057,0.655,0.159,0.76,0.314C34.312,24.716,34.303,25.006,34.282,25.314z M22.04,26.652 c-0.297,1.005-0.597,1.878-1.25,2.384c-0.56,0.434-1.346,0.551-2.042,0.607c-0.797,0.063-1.602,0.07-2.395,0.016 c-0.489-0.033-0.984-0.103-1.294-0.371c-0.409-0.355-0.486-1.045-0.53-1.72l-0.15-2.254c-0.021-0.309-0.029-0.599,0.081-0.765 c0.104-0.155,0.354-0.258,0.761-0.314c0.234-0.032,0.404-0.041,0.568-0.041c0.084,0,0.167,0.002,0.256,0.005 c0.203,0.006,0.42,0.012,0.722-0.006c0.508-0.028,0.956-0.079,1.387-0.128c0.77-0.089,1.434-0.163,2.293-0.097 c0.636,0.051,1.233,0.125,1.561,0.481C22.463,24.944,22.279,25.841,22.04,26.652z M44.976,16.053 c-0.087,0.171-0.287,0.317-0.485,0.451c-1.814,1.228-3.964,1.926-6.059,2.605c-2.208,0.716-4.49,1.456-6.79,1.898 c-4.386,0.845-8.964,0.646-13.658,0.344c-2.772-0.179-5.264-0.376-7.685-0.986c-2.768-0.696-5.014-1.853-6.676-3.437 c-0.262-0.251-0.518-0.524-0.614-0.826c-0.074-0.232-0.021-0.501,0.121-0.599c0.146-0.101,0.433-0.091,0.682-0.081 c1.726,0.058,4.166-0.128,6.099-0.457c0.006,0.285-0.004,0.578,0.007,0.859c0.024,0.618,0.07,1.219,0.371,1.768 c0.557,1.017,1.711,1.389,2.767,1.617c2.666,0.579,5.347,0.811,7.968,0.811c5.229,0,10.216-0.922,14.341-1.852 c0.847-0.191,1.718-0.438,2.256-1.164c0.496-0.668,0.523-1.499,0.509-2.293c-0.005-0.258-0.024-0.535-0.032-0.797 c1.997,0.158,3.899,0.403,5.162,0.668c0.531,0.112,1.037,0.236,1.395,0.53C44.923,15.335,45.123,15.758,44.976,16.053z"], [1, "col-8"], ["class", "row text-center ml-2", 4, "ngIf", "ngIfElse"], ["class", "empty"], ["noPosts", ""], [1, "row", "text-center", "ml-2"], ["class", "col-lg-3 col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "mb-4"], [1, "card", "h-100"], ["id", "image"], ["width", "200", "height", "300", 1, "image", "card-img-top", 3, "src", "alt"], [1, "edit"], [3, "routerLink"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "40", "height", "40", "viewBox", "0 0 172 172", 2, "fill", "#000000"], ["transform", "translate(25.8,25.8) scale(0.7,0.7)"], ["fill", "none", "fill-rule", "nonzero", "stroke", "none", "stroke-width", "1", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke-miterlimit", "10", "stroke-dasharray", "", "stroke-dashoffset", "0", "font-family", "none", "font-weight", "none", "font-size", "none", "text-anchor", "none", 2, "mix-blend-mode", "normal"], ["d", "M0,172v-172h172v172z", "fill", "none"], ["d", "M9.675,13.975h152.65v144.05h-152.65z", "fill", "#34495e"], ["d", "M161.25,15.05v141.9h-150.5v-141.9h150.5M163.4,12.9h-154.8v146.2h154.8v-146.2z", "fill", "#788b9c"], ["d", "M8.6,12.9h154.8v25.8h-154.8z", "fill", "#788b9c"], ["d", "M55.9,70.95h77.4v2.15h-77.4zM38.7,70.95h6.45v2.15h-6.45zM55.9,88.15h77.4v2.15h-77.4zM38.7,88.15h6.45v2.15h-6.45zM55.9,105.35h77.4v2.15h-77.4zM38.7,105.35h6.45v2.15h-6.45zM55.9,122.55h77.4v2.15h-77.4zM38.7,122.55h6.45v2.15h-6.45z", "fill", "#8bb7f0"], ["d", "M161.25,86v70.95h-70.735l-0.645,2.15h73.53v-72.885c-0.645,-0.215 -1.29,-0.215 -2.15,-0.215z", "fill", "#c8d1db"], ["d", "M118.68,122.55l-2.15,2.15h16.77v-2.15z", "fill", "#c2e8ff"], ["d", "M102.555,150.5l7.31,-7.31l14.62,12.47l-8.385,8.385l-19.78,6.235z", "fill", "#f5ce85"], ["d", "M110.08,144.48l12.9,11.18l-7.31,7.31l-17.63,5.59l5.59,-17.63l6.45,-6.45M109.865,141.685l-8.385,8.385l-6.88,21.93l22.145,-6.88l9.245,-9.245l-16.125,-14.19z", "fill", "#967a44"], ["d", "M98.47,159.745l-3.87,12.255l12.255,-3.87z", "fill", "#36404d"], ["d", "M150.285,102.77l4.085,-4.085c1.72,-1.72 4.3,-2.795 6.88,-2.795c2.58,0 4.945,1.075 6.88,2.795c3.655,3.655 3.655,9.89 0,13.545l-4.085,4.085z", "fill", "#f78f8f"], ["d", "M161.25,96.75c2.365,0 4.515,0.86 6.02,2.58c3.225,3.225 3.225,8.815 0,12.04l-3.44,3.44l-12.04,-12.04l3.44,-3.44c1.72,-1.72 3.87,-2.58 6.02,-2.58M161.25,94.6c-2.795,0 -5.375,1.075 -7.525,3.225l-4.945,4.945l15.05,15.05l4.945,-4.945c4.085,-4.085 4.085,-10.965 0,-15.05v0c-1.935,-2.15 -4.73,-3.225 -7.525,-3.225z", "fill", "#c74343"], ["d", "M117.605,162.755c-0.215,-0.645 -0.43,-1.075 -0.86,-1.72c-0.86,-1.075 -2.15,-1.505 -3.655,-1.72c-0.43,-3.655 -3.44,-5.16 -5.59,-5.375c-0.43,-2.58 -1.935,-3.87 -3.655,-4.515l41.495,-41.495l13.545,13.545z", "fill", "#ffeea3"], ["d", "M145.125,109.22l12.04,12.04l-39.345,39.56c-0.215,-0.215 -0.215,-0.43 -0.43,-0.43c-0.645,-0.86 -1.72,-1.72 -3.655,-1.935c-0.645,-3.225 -3.225,-4.73 -5.59,-5.375c-0.43,-1.72 -1.505,-3.225 -2.795,-3.87l39.775,-39.99M145.125,106.21l-43.43,43.645v0c0.645,0 4.73,0.215 4.73,4.73c0,0 5.59,0.215 5.59,5.59c5.59,0 4.73,4.73 4.73,4.73l43.645,-43.645l-15.265,-15.05z", "fill", "#ba9b48"], ["d", "M141.255,111.8l11.395,-11.395l13.545,13.545l-11.395,11.395z", "fill", "#d9e7f5"], ["d", "M152.65,101.91l12.04,12.04l-9.89,9.89l-12.04,-12.04l9.89,-9.89M152.65,98.9l-12.9,12.9l15.05,15.05l12.9,-12.9l-15.05,-15.05z", "fill", "#788b9c"], ["d", "M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z", "fill", "none"], ["d", "M86,168.56c-45.59663,0 -82.56,-36.96337 -82.56,-82.56v0c0,-45.59663 36.96337,-82.56 82.56,-82.56v0c45.59663,0 82.56,36.96337 82.56,82.56v0c0,45.59663 -36.96337,82.56 -82.56,82.56z", "fill", "none"], ["d", "", "fill", "none"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "30", "height", "30", "viewBox", "0 0 172 172", 2, "fill", "#000000"], ["d", "M121.83333,39.41667l-21.5,-21.5h-28.66667l-21.5,21.5h-10.75v100.33333c0,7.88333 6.45,14.33333 14.33333,14.33333h64.5c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-100.33333z", "fill", "#e30000"], ["d", "M39.41667,25.08333h93.16667c3.94167,0 7.16667,3.225 7.16667,7.16667v7.16667h-107.5v-7.16667c0,-3.94167 3.225,-7.16667 7.16667,-7.16667z", "fill", "#fd5858"], ["d", "M59.4334,113.18215l43.00036,-43.00186l10.13537,10.13502l-43.00036,43.00186z", "fill", "#fafafa"], ["d", "M59.43283,80.31878l10.13502,-10.13537l43.00186,43.00036l-10.13502,10.13537z", "fill", "#fafafa"], [1, "card-body"], [1, "card-title"], [1, "card-text", 2, "height", "70px", "overflow", "hidden"], [1, "card-footer"], [1, "btn", "btn-primary", 3, "routerLink"], [2, "height", "49vh"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileComponent_div_23_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_ng_template_24_Template, 3, 0, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myPosts)("ngIfElse", _r1);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: ["#image[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n#image[_ngcontent-%COMP%]:hover   .edit[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.edit[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-right: 4px;\n  position: absolute;\n  right: -4px;\n  top: -4px;\n  display: none;\n}\n\n.edit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.adjust[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.empty[_ngcontent-%COMP%] {\n  height: 75%;\n  width: 100%;\n  justify-content: center;\n}\n\n.foot[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0 !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtBQUNEOztBQUdBO0VBQ0MsY0FBQTtBQUFEOztBQUdBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBQUQ7O0FBRUE7RUFDQyxXQUFBO0FBQ0Q7O0FBRUE7RUFDQyxzQkFBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDRyxvQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWFnZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbiNpbWFnZTpob3ZlciAuZWRpdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuXHRwYWRkaW5nLXRvcDogNHB4O1x0XHJcblx0cGFkZGluZy1yaWdodDogNHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogLTRweDtcclxuXHR0b3A6IC00cHg7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG4uZWRpdCBhIHtcclxuXHRjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmFkanVzdHtcclxuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZW1wdHl7XHJcblx0aGVpZ2h0OiA3NSU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _services_timeout_service__WEBPACK_IMPORTED_MODULE_3__["TimeoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate() {
        if (this.loginService.isLoggedIn())
            return true;
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, UnauthorizedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedInterceptor", function() { return UnauthorizedInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class AuthInterceptor {
    constructor(inj) {
        this.inj = inj;
    }
    intercept(req, next) {
        const authService = this.inj.get(_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]);
        // Get the auth header from the service.
        const authToken = authService.getToken();
        // console.log("Interceptor: " + authToken);
        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set('Authorization', 'bearer ' + authToken) });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();
class UnauthorizedInterceptor {
    constructor(inj) {
        this.inj = inj;
    }
    intercept(req, next) {
        const authService = this.inj.get(_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]);
        const authToken = authService.getToken();
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            // do nothing
        }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401 && authToken) {
                    console.log('Unauthorized Interceptor: ', err);
                    authService.checkJWTtoken();
                }
            }
        }));
    }
}
UnauthorizedInterceptor.ɵfac = function UnauthorizedInterceptor_Factory(t) { return new (t || UnauthorizedInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
UnauthorizedInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnauthorizedInterceptor, factory: UnauthorizedInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorizedInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg-service.service */ "./src/app/services/process-httpmsg-service.service.ts");





class CommentService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    getComment(postId) {
        return this.http.get('post/' + postId + '/comment')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
    postComment(postId, comment) {
        return this.http.post('post/' + postId + '/comment', comment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
    deleteComment(postId, commentId) {
        return this.http.delete('post/' + postId + '/comment/' + commentId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/create-post.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/create-post.service.ts ***!
  \*************************************************/
/*! exports provided: CreatePostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostService", function() { return CreatePostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg-service.service */ "./src/app/services/process-httpmsg-service.service.ts");





class CreatePostService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    createPost(postData) {
        return this.http.post('post', postData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
}
CreatePostService.ɵfac = function CreatePostService_Factory(t) { return new (t || CreatePostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"])); };
CreatePostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreatePostService, factory: CreatePostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/image-upload.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/image-upload.service.ts ***!
  \**************************************************/
/*! exports provided: ImageUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadService", function() { return ImageUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ImageUploadService {
    constructor(http) {
        this.http = http;
    }
    uploadImage(imageData) {
        return this.http.post('upload', imageData);
    }
}
ImageUploadService.ɵfac = function ImageUploadService_Factory(t) { return new (t || ImageUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ImageUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageUploadService, factory: ImageUploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/like.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/like.service.ts ***!
  \******************************************/
/*! exports provided: LikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeService", function() { return LikeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/process-httpmsg-service.service */ "./src/app/services/process-httpmsg-service.service.ts");





class LikeService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    postlike(postId) {
        return this.http.post('post/' + postId + '/like', postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
}
LikeService.ɵfac = function LikeService_Factory(t) { return new (t || LikeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"])); };
LikeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LikeService, factory: LikeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseUrl */ "./src/app/shared/baseUrl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg-service.service */ "./src/app/services/process-httpmsg-service.service.ts");







class LoginService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.tokenKey = 'JWT';
        this.isAuthenticated = false;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.authToken = undefined;
    }
    checkJWTtoken() {
        this.http.get(_shared_baseUrl__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + 'users/checkJWTtoken')
            .subscribe(res => {
            console.log('JWT Token Valid: ', res);
            this.sendUsername(res.user.username);
        }, err => {
            console.log('JWT Token invalid: ', err);
            this.destroyUserCredentials();
        });
    }
    sendUsername(name) {
        this.username.next(name);
    }
    clearUsername() {
        this.username.next(undefined);
    }
    loadUserCredentials() {
        const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
        console.log('loadUserCredentials ', credentials);
        if (credentials && credentials.username !== undefined) {
            this.useCredentials(credentials);
            if (this.authToken) {
                this.checkJWTtoken();
            }
        }
    }
    storeUserCredentials(credentials) {
        console.log('storeUserCredentials ', credentials);
        localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
        this.useCredentials(credentials);
    }
    useCredentials(credentials) {
        this.isAuthenticated = true;
        this.sendUsername(credentials.username);
        this.authToken = credentials.token;
    }
    destroyUserCredentials() {
        this.authToken = undefined;
        this.clearUsername();
        this.isAuthenticated = false;
        localStorage.removeItem(this.tokenKey);
    }
    signUp() { }
    login(loginData) {
        return this.http.post('users/login', loginData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            if (res.success == true) {
                this.storeUserCredentials({ username: loginData.username, token: res.token });
                return { 'success': true, 'username': loginData.username };
            }
            else {
                return { 'success': false, 'err': res.err };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => this.processHTTPMsgService.handleError(error)));
    }
    logOut() {
        this.destroyUserCredentials();
    }
    isLoggedIn() {
        if (JSON.parse(localStorage.getItem(this.tokenKey)))
            return true;
        else
            false;
    }
    getUsername() {
        return this.username.asObservable();
    }
    getToken() {
        if (JSON.parse(localStorage.getItem(this.tokenKey))) {
            return this.authToken = JSON.parse(localStorage.getItem(this.tokenKey)).token;
        }
        else
            return this.authToken = undefined;
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgServiceService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg-service.service */ "./src/app/services/process-httpmsg-service.service.ts");





class PostService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    getPost(postId) {
        return this.http.get("post/" + postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
    getPosts() {
        return this.http.get("post")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
    deletePost(post_id) {
        return this.http.delete('post/' + post_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => this.processHTTPMsgService.handleError(error)));
    }
    updatePost(post_id, data) {
        return this.http.put('post/' + post_id, data);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/process-httpmsg-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/process-httpmsg-service.service.ts ***!
  \*************************************************************/
/*! exports provided: ProcessHTTPMsgServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgServiceService", function() { return ProcessHTTPMsgServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ProcessHTTPMsgServiceService {
    constructor() { }
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    }
}
ProcessHTTPMsgServiceService.ɵfac = function ProcessHTTPMsgServiceService_Factory(t) { return new (t || ProcessHTTPMsgServiceService)(); };
ProcessHTTPMsgServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProcessHTTPMsgServiceService, factory: ProcessHTTPMsgServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessHTTPMsgServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/signup.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signup.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg-service.service */ "./src/app/services/process-httpmsg-service.service.ts");





class SignupService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    onSubmit(SubmitData) {
        return this.http.post('users/register', SubmitData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            this.processHTTPMsgService.handleError(error);
            alert('Username already exists');
            return error;
        }));
    }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"])); };
SignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/timeout.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/timeout.service.ts ***!
  \*********************************************/
/*! exports provided: TimeoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutService", function() { return TimeoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class TimeoutService {
    constructor() { }
    checkTime() {
        let timer, currSeconds = 0;
        function resetTimer() {
            /* Clear the previous interval */
            clearInterval(timer);
            /* Reset the seconds of the timer */
            currSeconds = 0;
            /* Set a new interval */
            timer = setInterval(startIdleTimer, 1000);
        }
        // Define the events that would reset the timer 
        window.onload = resetTimer;
        window.onmousemove = resetTimer;
        window.onmousedown = resetTimer;
        window.ontouchstart = resetTimer;
        window.onclick = resetTimer;
        window.onkeypress = resetTimer;
        function startIdleTimer() {
            /* Increment the timer seconds */
            if (currSeconds == 600) {
                if (localStorage.getItem('JWT')) {
                    alert('Session has been Expired');
                    localStorage.removeItem('JWT');
                    window.location.href = '/';
                }
            }
            currSeconds++;
        }
    }
}
TimeoutService.ɵfac = function TimeoutService_Factory(t) { return new (t || TimeoutService)(); };
TimeoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimeoutService, factory: TimeoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/baseUrl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseUrl.ts ***!
  \***********************************/
/*! exports provided: baseUrl, baseImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseImageUrl", function() { return baseImageUrl; });
const baseUrl = 'http://localhost:3000/';
const baseImageUrl = "assets/images/";


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/signup.service */ "./src/app/services/signup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");









const _c0 = ["signupForm"];
function SignupComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formErrors.username);
} }
function SignupComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.formErrors.name);
} }
function SignupComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.formErrors.password);
} }
class SignupComponent {
    constructor(signupService, router, fb) {
        this.signupService = signupService;
        this.router = router;
        this.fb = fb;
        this.formErrors = {
            username: "",
            name: "",
            password: ""
        };
        this.validationMessages = {
            username: {
                required: "Username is required",
                minlength: "Username must be atleast 5 characters long",
                maxlength: "Username can't be of more than 30 characters"
            },
            name: {
                required: "Name is required"
            },
            password: {
                required: "Password is required",
                minlength: "Password must be atleast 8 characters long",
                maxlength: "Password can't be of more than 20 characters"
            }
        };
        this.SignupData = {
            username: null,
            name: null,
            password: null
        };
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.signupForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.signupForm.valueChanges
            .subscribe((data) => {
            this.onValueChanges(data);
        });
        this.onValueChanges();
    }
    ;
    onValueChanges(Data) {
        if (!this.signupForm)
            return;
        const form = this.signupForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + " ";
                        }
                    }
                }
            }
        }
    }
    OnSubmit() {
        this.credentials = this.signupForm.value;
        this.signupService.onSubmit(this.credentials).subscribe((resp) => {
            if (resp.success == true)
                this.router.navigate(['login']);
            else
                this.router.navigate(['signup']);
        });
        this.signupForm.reset({
            Title: '',
            Description: '',
            Category: ''
        });
        this.signupFormDirective.resetForm();
    }
    ;
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], viewQuery: function SignupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signupFormDirective = _t.first);
    } }, decls: 30, vars: 4, consts: [[1, "container-fluid"], [1, "row", "main-content", "bg-success", "text-center"], [1, "col-md-4", "text-center", "company__info"], [1, "col-md-8", "col-xs-12", "col-sm-12", "login_form"], [1, "row", "justify-content-center"], [1, "row"], ["novalidate", "", 1, "form-group", "justify-content-center", 3, "formGroup", "ngSubmit"], ["pform", "ngForm"], ["formControlName", "username", "type", "text", "name", "username", "id", "username", "placeholder", "Username", 1, "form__input"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "name", "type", "text", "name", "name", "id", "name", "placeholder", "Name", 1, "form__input"], ["type", "password", "name", "password", "id", "password", "formControlName", "password", "placeholder", "Password", 1, "form__input"], ["type", "submit", "value", "Submit", 1, "btn"], ["routerLink", "/login"], [1, "text-danger"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Join the Blog-World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_small_15_Template, 2, 1, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignupComponent_small_18_Template, 2, 1, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_small_21_Template, 2, 1, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Already have an account! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.password);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".c[_ngcontent-%COMP%] {\n  width: 100vh;\n  height: 100vh;\n}\n\n.px[_ngcontent-%COMP%] {\n  width: 20vw !important;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 20px;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);\n  margin: 5em auto;\n  display: flex;\n}\n\n.company__info[_ngcontent-%COMP%] {\n  background-color: #282829;\n  background-image: linear-gradient(213deg, #282829 9%, #8c8c8c 46%, #160e0e 100%);\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n}\n\n.fa-android[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n@media screen and (max-width: 640px) {\n  .main-content[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .company__info[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .login_form[_ngcontent-%COMP%] {\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n  }\n}\n\n@media screen and (min-width: 642px) and (max-width: 800px) {\n  .main-content[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n\n.row[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  color: #160e0e;\n  font-weight: bolder;\n}\n\n.row[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: dimgray;\n}\n\n.row[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n}\n\n.login_form[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-top: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n}\n\nform[_ngcontent-%COMP%] {\n  padding: 0 2em;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.form__input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid transparent;\n  border-radius: 0;\n  border-bottom: 1px solid #aaa;\n  padding: 1em 0.5em 0.5em;\n  padding-left: 2em;\n  outline: none;\n  margin: 1.5em auto;\n  transition: all 0.5s ease;\n  align-self: center !important;\n}\n\n.form__input[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #008080;\n  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n  width: 70%;\n  border-radius: 30px;\n  color: #160e0e;\n  font-weight: 600;\n  background-color: #fff;\n  border: 1px solid #2d3535;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\n  background: linear-gradient(213deg, #282829 9%, #8c8c8c 46%, #160e0e 100%);\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUtBO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFGRDs7QUFJQTtFQUNDLHlCQUFBO0VBQ0EsZ0ZBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBREQ7O0FBR0E7RUFDQyxjQUFBO0FBQUQ7O0FBRUE7RUFDQztJQUFjLFVBQUE7RUFFYjs7RUFERDtJQUNDLGFBQUE7RUFJQTs7RUFGRDtJQUNDLDRCQUFBO0lBQ0EsK0JBQUE7RUFLQTtBQUNGOztBQUhBO0VBQ0M7SUFBYyxVQUFBO0VBTWI7QUFDRjs7QUFMQTtFQUNDLDJCQUFBO0FBT0Q7O0FBTEE7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUFRRDs7QUFOQTtFQUNDLGNBQUE7QUFTRDs7QUFQQTtFQUNDLFlBQUE7RUFDQSxpQkFBQTtBQVVEOztBQVJBO0VBQ0Msc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQVdEOztBQVRBO0VBQ0MsY0FBQTtBQVlEOztBQVZBO0VBQ0Msa0NBQUE7QUFhRDs7QUFYQTtFQUNDLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQWNEOztBQVpBO0VBQ0MsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBZUQ7O0FBYkE7RUFDQyx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZ0JEOztBQWRBO0VBQ0MsMEVBQUE7RUFDQSxXQUFBO0FBaUJEIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5je1xyXG4gICAgd2lkdGg6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnB4e1xyXG4gICAgd2lkdGg6IDIwdncgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8vVGVtcGxhdGVcclxuXHJcbi5tYWluLWNvbnRlbnR7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLC40KTtcclxuXHRtYXJnaW46IDVlbSBhdXRvO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNvbXBhbnlfX2luZm97XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4MjgyOTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjEzZGVnLCAjMjgyODI5IDklLCAjOGM4YzhjIDQ2JSwgIzE2MGUwZSAxMDAlKTtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5mYS1hbmRyb2lke1xyXG5cdGZvbnQtc2l6ZTozZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuXHQubWFpbi1jb250ZW50e3dpZHRoOiA5MCU7fVxyXG5cdC5jb21wYW55X19pbmZve1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LmxvZ2luX2Zvcm17XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOjIwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjIwcHg7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MnB4KSBhbmQgKG1heC13aWR0aDo4MDBweCl7XHJcblx0Lm1haW4tY29udGVudHt3aWR0aDogNzAlO31cclxufVxyXG4uY29udGFpbmVyLWZsdWlke1xyXG5cdG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4ucm93ID4gaDJ7XHJcblx0Y29sb3I6IzE2MGUwZTtcclxuXHRmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5yb3c+cHtcclxuXHRjb2xvcjogZGltZ3JheTtcclxufVxyXG4ucm93PnA+YXtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxvZ2luX2Zvcm17XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoyMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjIwcHg7XHJcblx0Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztcclxuXHRib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjY2M7XHJcbn1cclxuZm9ybXtcclxuXHRwYWRkaW5nOiAwIDJlbTtcclxufVxyXG4uZm9ybS1ncm91cHtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtX19pbnB1dHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXI6MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDA7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XHJcblx0cGFkZGluZzogMWVtIC41ZW0gLjVlbTtcclxuXHRwYWRkaW5nLWxlZnQ6IDJlbTtcclxuXHRvdXRsaW5lOm5vbmU7XHJcblx0bWFyZ2luOjEuNWVtIGF1dG87XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtX19pbnB1dDpmb2N1c3tcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjMDA4MDgwO1xyXG5cdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDgwLDgwLC40KTsgXHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5idG57XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG5cdHdpZHRoOiA3MCU7XHJcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRjb2xvcjojMTYwZTBlO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMmQzNTM1O1xyXG5cdG1hcmdpbi10b3A6IDEuNWVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4uYnRuOmhvdmVyLCAuYnRuOmZvY3Vze1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTNkZWcsICMyODI4MjkgOSUsICM4YzhjOGMgNDYlLCAjMTYwZTBlIDEwMCUpO1xyXG5cdGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _services_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { signupFormDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["signupForm"]
        }] }); })();


/***/ }),

/***/ "./src/app/single-post/single-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-post/single-post.component.ts ***!
  \******************************************************/
/*! exports provided: SinglePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostComponent", function() { return SinglePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/baseUrl */ "./src/app/shared/baseUrl.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _services_like_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/like.service */ "./src/app/services/like.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_timeout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/timeout.service */ "./src/app/services/timeout.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");













function SinglePostComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SinglePostComponent_span_24_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.like(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SinglePostComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SinglePostComponent_ng_template_25_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.like(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SinglePostComponent_div_37_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SinglePostComponent_div_37_div_6_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const comment_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteComment(comment_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SinglePostComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SinglePostComponent_div_37_div_6_Template, 10, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r8.commentAuthor.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r8.Comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isEditable(comment_r8.commentAuthor.username));
} }
class SinglePostComponent {
    constructor(postService, route, commentService, likeService, loginService, timeoutService) {
        this.postService = postService;
        this.route = route;
        this.commentService = commentService;
        this.likeService = likeService;
        this.loginService = loginService;
        this.timeoutService = timeoutService;
        this.liked = false;
        this.baseImageUrl = _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__["baseImageUrl"];
        this.likesLocal = [];
        this.emptyLikesLocal = [{
                username: '',
                name: '',
                admin: false
            }];
        this.flag = false;
    }
    ngOnInit() {
        if (localStorage.getItem('JWT')) {
            this.username = JSON.parse(localStorage.getItem('JWT')).username;
        }
        this.postService.getPost(this.route.snapshot.paramMap.get('postId'))
            .subscribe((post) => {
            this.post = post;
            this.Comments = post.Comments;
            this.likeCount = post.likes.length;
            if (this.likeCount == 0)
                this.likesLocal = this.emptyLikesLocal;
            else
                this.likesLocal = post.likes;
            for (let like = 0; like < this.likesLocal.length; like++) {
                if (this.likesLocal[like].username == this.username) {
                    this.liked = true;
                    break;
                }
            }
        });
    }
    postComment() {
        if (localStorage.getItem('JWT')) {
            this.commentService.postComment(this.route.snapshot.paramMap.get('postId'), { Comment: this.comment })
                .subscribe((Comment) => {
                this.Comments = Comment;
            });
        }
        else
            alert('Please Login to Comment');
    }
    like() {
        if (localStorage.getItem('JWT')) {
            this.likeService.postlike(this.route.snapshot.paramMap.get('postId'))
                .subscribe((post) => {
                if (post.likes.length == 0)
                    this.likesLocal = this.emptyLikesLocal;
                else
                    this.likesLocal = post.likes;
                if (this.likesLocal[0].username == '')
                    this.likeCount = 0;
                else
                    this.likeCount = this.likesLocal.length;
                for (let like = 0; like < this.likesLocal.length; like++) {
                    if (this.likesLocal[like].username == this.username) {
                        this.liked = true;
                        this.flag = true;
                        return;
                    }
                    else if (this.likesLocal[like].username != this.username) {
                        this.flag = false;
                        continue;
                    }
                }
                if (this.flag == false) {
                    this.liked = false;
                }
            });
        }
        else {
            alert('Login First to Like');
        }
    }
    isEditable(username) {
        if (username == this.username) {
            return true;
        }
    }
    deleteComment(commentId) {
        this.commentService.deleteComment(this.route.snapshot.paramMap.get('postId'), commentId).subscribe();
        this.Comments = this.Comments.filter(o => { return o._id != commentId; });
    }
}
SinglePostComponent.ɵfac = function SinglePostComponent_Factory(t) { return new (t || SinglePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_like_service__WEBPACK_IMPORTED_MODULE_5__["LikeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timeout_service__WEBPACK_IMPORTED_MODULE_7__["TimeoutService"])); };
SinglePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SinglePostComponent, selectors: [["app-single-post"]], decls: 67, vars: 14, consts: [[2, "margin-top", "10vh"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "mt-4"], [1, "lead"], ["href", "#"], ["width", "300", "height", "200", 1, "img-fluid", "rounded", 3, "src", "alt"], ["class", "", 3, "click", 4, "ngIf", "ngIfElse"], ["Liked", ""], [1, "card", "my-4"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], [1, "form-group"], ["name", "comment", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "media mb-4 w-50", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "col-lg-6"], [1, "list-unstyled", "mb-0"], ["routerLink", "/category/Education"], ["routerLink", "/category/Fashion"], ["routerLink", "/category/Sports"], ["routerLink", "/category/Food"], ["routerLink", "/category/Technology"], ["routerLink", "/category/Life-Style"], [1, "", 3, "click"], ["width", "2em", "height", "2em", "viewBox", "0 0 16 16", "fill", "", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-heart-fill", "hover"], ["fill-rule", "evenodd", "d", "M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"], [3, "click"], ["width", "2em", "height", "2em", "viewBox", "0 0 16 16", "fill", "darkred", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-heart-fill"], ["fill-rule", "evenodd", "d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"], [1, "media", "mb-4", "w-50"], ["src", "http://placehold.it/50x50", "alt", "", 1, "d-flex", "mr-3", "rounded-circle"], [1, "media-body"], [1, "mt-0"], ["class", "dropright", 4, "ngIf"], [1, "dropright"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-three-dots-vertical"], ["fill-rule", "evenodd", "d", "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-trash"], ["d", "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"], ["fill-rule", "evenodd", "d", "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"]], template: function SinglePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SinglePostComponent_span_24_Template, 3, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SinglePostComponent_ng_template_25_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Leave a Comment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SinglePostComponent_Template_form_ngSubmit_32_listener() { return ctx.postComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SinglePostComponent_Template_textarea_ngModelChange_34_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SinglePostComponent_div_37_Template, 7, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Life-Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.postAuthor.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, ctx.post.createdAt));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.baseImageUrl + ctx.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.post.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.Category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.likeCount, " Likes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.liked)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Comments);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  padding-top: 56px;\n}\n\n.hover[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .hover[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active   .bi-heart-fill[_ngcontent-%COMP%] {\n  fill: darkred !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXBvc3Qvc2luZ2xlLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBOztFQUVJLHdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcclxufVxyXG5cclxuLmhvdmVyIDpob3ZlciAsXHJcbi5ob3ZlciA6YWN0aXZlIC5iaS1oZWFydC1maWxse1xyXG4gICAgZmlsbDpkYXJrcmVkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinglePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-post',
                templateUrl: './single-post.component.html',
                styleUrls: ['./single-post.component.scss']
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }, { type: _services_like_service__WEBPACK_IMPORTED_MODULE_5__["LikeService"] }, { type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _services_timeout_service__WEBPACK_IMPORTED_MODULE_7__["TimeoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/update-post/update-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-post/update-post.component.ts ***!
  \******************************************************/
/*! exports provided: UpdatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostComponent", function() { return UpdatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/image-upload.service */ "./src/app/services/image-upload.service.ts");
/* harmony import */ var _services_timeout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/timeout.service */ "./src/app/services/timeout.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");











const _c0 = ["uform"];
function UpdatePostComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formErrors.Title);
} }
function UpdatePostComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.formErrors.Title);
} }
function UpdatePostComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.formErrors.Category);
} }
function UpdatePostComponent_small_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.formErrors.Description);
} }
class UpdatePostComponent {
    constructor(router, fb, route, postService, imageUploadService, timeoutService) {
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.postService = postService;
        this.imageUploadService = imageUploadService;
        this.timeoutService = timeoutService;
        this.formErrors = {
            Title: "",
            Description: "",
            Category: ""
        };
        this.validationMessages = {
            Title: {
                required: "Title is required",
                minlength: "Title must be atleast 2 characters long",
                maxlength: "Title can't be of more than 50 characters"
            },
            Category: {
                required: "Category is required"
            },
            Description: {
                required: "Description is required",
                minlength: "Description must be atleast 10 characters long",
            }
        };
    }
    ngOnInit() {
        if (localStorage.getItem('JWT')) {
            this.postService.getPost(this.route.snapshot.paramMap.get('postId')).subscribe((post) => {
                this.post = post;
                this.createForm();
            });
        }
    }
    createForm() {
        this.updateForm = this.fb.group({
            Title: [this.post.Title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            Description: [this.post.Description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]],
            Category: [this.post.Category, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.updateForm.valueChanges
            .subscribe((data) => {
            this.onValueChanges(data);
        });
        this.onValueChanges();
    }
    ;
    onValueChanges(Data) {
        if (!this.updateForm)
            return;
        const form = this.updateForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + " ";
                        }
                    }
                }
            }
        }
    }
    onFileChange(event) {
        this.selectedFile = event.target.files[0];
    }
    updatePost() {
        this.updatedPost = this.updateForm.value;
        this.post.image = this.selectedFile.name;
        const uploadData = new FormData();
        uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
        let post_id = this.route.snapshot.paramMap.get('postId');
        if (this.updatedPost != this.post) {
            this.postService.updatePost(post_id, this.updatedPost).subscribe((post) => {
                this.imageUploadService.uploadImage(uploadData).subscribe();
                this.router.navigate(['profile']);
            });
        }
        else
            this.router.navigate(['profile']);
    }
}
UpdatePostComponent.ɵfac = function UpdatePostComponent_Factory(t) { return new (t || UpdatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timeout_service__WEBPACK_IMPORTED_MODULE_5__["TimeoutService"])); };
UpdatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePostComponent, selectors: [["app-update-post"]], viewQuery: function UpdatePostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.updateFormDirective = _t.first);
    } }, decls: 42, vars: 7, consts: [[1, "container", "contact-form"], ["enctype", "multipart/form-data", "novalidate", "", 3, "formGroup", "ngSubmit"], ["uform", "ngForm"], [1, "row"], [1, "col-md-6"], ["hidden", "", 1, "form-group"], ["type", "text", "formControlName", "Category", "id", "Title", "name", "Title", "placeholder", "Enter the Title", "required", "", 1, "form-control"], [4, "ngIf"], [1, "form-group"], ["type", "text", "formControlName", "Title", "id", "Title", "name", "Title", "placeholder", "Enter the Title", "required", "", 1, "form-control"], ["formControlName", "Category", "id", "Category", "name", "Category", "required", "", 1, "form-control", "show-tick"], ["value", "", "disabled", "", "selected", "", "hidden", "", 1, "form-control"], ["value", "Sports", 1, "form-control"], ["value", "Education", 1, "form-control"], ["value", "Fashion", 1, "form-control"], ["for", "fileupload", 1, "form-control", "file-upload", "btn", "btn-primary"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "none", "d", "M0 0h24v24H0z"], ["d", "M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019zM13 13h3l-4-5-4 5h3v4h2v-4z", "fill", "rgba(255,255,255,1)"], ["type", "file", "name", "image", "id", "fileupload", "formControlName", "image", 3, "change"], [1, "form-group", "buttons"], ["type", "submit", "name", "btnSubmit", "value", "Post", 1, "btn", "btn-primary", "btnContact", 3, "disabled"], ["type", "submit", "name", "btncancel", "routerLink", "/profile", "value", "Cancel", 1, "btn", "btn-primary", "btnContact"], ["name", "Description", "formControlName", "Description", "placeholder", "Enter the Description", "required", "", 1, "form-control", 2, "width", "100%", "height", "150px"]], template: function UpdatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdatePostComponent_Template_form_ngSubmit_2_listener() { return ctx.updatePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Your Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpdatePostComponent_small_10_Template, 2, 1, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UpdatePostComponent_small_13_Template, 2, 1, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UpdatePostComponent_small_24_Template, 2, 1, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u00A0Change Post's Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatePostComponent_Template_input_change_32_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UpdatePostComponent_small_40_Template, 2, 1, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.Category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.Category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.updateForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.Description);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(left, #0072ff, #00c6ff);\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-top: 7.35%;\n  width: 75%;\n}\n\n.contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n\n.contact-image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.contact-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 6rem;\n  width: 11%;\n  margin-top: -3%;\n  transform: rotate(29deg);\n}\n\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 14%;\n}\n\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: -7%;\n}\n\n.contact-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 8%;\n  margin-top: -10%;\n  text-align: center;\n  color: #5b72a5;\n  font-weight: bolder;\n}\n\n.contact-form[_ngcontent-%COMP%]   .btnContact[_ngcontent-%COMP%] {\n  width: 30%;\n  border: none;\n  border-radius: 1rem;\n  padding: 1.5%;\n  background: #0275d8;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n}\n\n.btnContactSubmit[_ngcontent-%COMP%] {\n  width: 30%;\n  border-radius: 1rem;\n  padding: 1.5%;\n  color: #fff;\n  background-color: #0062cc;\n  border: none;\n  cursor: pointer;\n}\n\n.file-upload[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXBvc3QvdXBkYXRlLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyREFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtBQU9KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVFKOztBQUxBO0VBRUksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBT0o7O0FBSkE7RUFDSSxhQUFBO0FBT0o7O0FBTEE7RUFFSSxnQkFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLXBvc3QvdXBkYXRlLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwNzJmZiwgIzAwYzZmZik7XHJcbn1cclxuLmNvbnRhY3QtZm9ybXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA3LjM1JTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSAuZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLXJhZGl1czoxcmVtO1xyXG59XHJcbi5jb250YWN0LWltYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWN0LWltYWdlIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDZyZW07XHJcbiAgICB3aWR0aDogMTElO1xyXG4gICAgbWFyZ2luLXRvcDogLTMlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjlkZWcpO1xyXG59XHJcbi5jb250YWN0LWZvcm0gZm9ybXtcclxuICAgIHBhZGRpbmc6IDE0JTtcclxufVxyXG4uY29udGFjdC1mb3JtIGZvcm0gLnJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IC03JTtcclxuXHJcbn1cclxuLmNvbnRhY3QtZm9ybSBoMntcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNWI3MmE1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uY29udGFjdC1mb3JtIC5idG5Db250YWN0IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41JTtcclxuICAgIGJhY2tncm91bmQ6ICMwMjc1ZDg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG4uYnRuQ29udGFjdFN1Ym1pdFxyXG57XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDEuNSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZCBpbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbi5idXR0b25ze1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-post',
                templateUrl: './update-post.component.html',
                styleUrls: ['./update-post.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }, { type: _services_image_upload_service__WEBPACK_IMPORTED_MODULE_4__["ImageUploadService"] }, { type: _services_timeout_service__WEBPACK_IMPORTED_MODULE_5__["TimeoutService"] }]; }, { updateFormDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["uform"]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asus\Desktop\puneet\blog-web\blog-ang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map