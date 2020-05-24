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

/***/ "./src/client/app/app.component.ts":
/*!*****************************************!*\
  !*** ./src/client/app/app.component.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ./components/header/header.component */ "./src/client/app/components/header/header.component.ts");
const i2 = __webpack_require__(/*! ./components/main/main.component */ "./src/client/app/components/main/main.component.ts");
const i3 = __webpack_require__(/*! ./components/footer/footer.component */ "./src/client/app/components/footer/footer.component.ts");
class AppComponent {
    constructor() {
        this.showSidebar = false;
    }
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-header");
        i0.ɵɵelement(1, "app-main");
        i0.ɵɵelement(2, "app-footer");
    } }, directives: [i1.HeaderComponent, i2.MainComponent, i3.FooterComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvYXBwL0M6XFxzb3VyY2VzLXdvcmtcXE5lc3RKUy1XaXRoLUFuZ3VsYXIvc3JjXFxjbGllbnRcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2NsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvY2xpZW50L2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59Il19 */"] });
(function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/client/app/app.module.ts":
/*!**************************************!*\
  !*** ./src/client/app/app.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const components_module_1 = __webpack_require__(/*! ./components/components.module */ "./src/client/app/components/components.module.ts");
const services_module_1 = __webpack_require__(/*! ./services/services.module */ "./src/client/app/services/services.module.ts");
const app_routes_1 = __webpack_require__(/*! ./app.routes */ "./src/client/app/app.routes.ts");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/client/app/app.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
class AppModule {
}
exports.AppModule = AppModule;
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES),
            http_1.HttpClientModule,
            animations_1.BrowserAnimationsModule,
            flex_layout_1.FlexLayoutModule,
            components_module_1.ComponentsModule,
            services_module_1.ServicesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent], imports: [platform_browser_1.BrowserModule, i1.RouterModule, http_1.HttpClientModule,
        animations_1.BrowserAnimationsModule,
        flex_layout_1.FlexLayoutModule,
        components_module_1.ComponentsModule,
        services_module_1.ServicesModule] }); })();
(function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [app_component_1.AppComponent],
                imports: [
                    platform_browser_1.BrowserModule,
                    router_1.RouterModule.forRoot(app_routes_1.ROUTES),
                    http_1.HttpClientModule,
                    animations_1.BrowserAnimationsModule,
                    flex_layout_1.FlexLayoutModule,
                    components_module_1.ComponentsModule,
                    services_module_1.ServicesModule
                ],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/client/app/app.routes.ts":
/*!**************************************!*\
  !*** ./src/client/app/app.routes.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const auth_component_1 = __webpack_require__(/*! ./components/main/auth/auth.component */ "./src/client/app/components/main/auth/auth.component.ts");
const welcome_component_1 = __webpack_require__(/*! ./components/main/welcome/welcome.component */ "./src/client/app/components/main/welcome/welcome.component.ts");
exports.ROUTES = [
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: 'auth', component: auth_component_1.AuthComponent }
];


/***/ }),

/***/ "./src/client/app/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/client/app/components/components.module.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
const divider_1 = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
const toolbar_1 = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
const sidenav_1 = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
const menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
const icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
const button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
const input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
const expansion_1 = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
const header_component_1 = __webpack_require__(/*! ./header/header.component */ "./src/client/app/components/header/header.component.ts");
const main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/client/app/components/main/main.component.ts");
const footer_component_1 = __webpack_require__(/*! ./footer/footer.component */ "./src/client/app/components/footer/footer.component.ts");
const welcome_component_1 = __webpack_require__(/*! ./main/welcome/welcome.component */ "./src/client/app/components/main/welcome/welcome.component.ts");
const auth_component_1 = __webpack_require__(/*! ./main/auth/auth.component */ "./src/client/app/components/main/auth/auth.component.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class ComponentsModule {
}
exports.ComponentsModule = ComponentsModule;
ComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ComponentsModule });
ComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            flex_layout_1.FlexLayoutModule,
            divider_1.MatDividerModule,
            toolbar_1.MatToolbarModule,
            sidenav_1.MatSidenavModule,
            menu_1.MatMenuModule,
            icon_1.MatIconModule,
            button_1.MatButtonModule,
            input_1.MatInputModule,
            expansion_1.MatExpansionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ComponentsModule, { declarations: [header_component_1.HeaderComponent,
        footer_component_1.FooterComponent,
        main_component_1.MainComponent,
        auth_component_1.AuthComponent,
        welcome_component_1.WelcomeComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        router_1.RouterModule,
        flex_layout_1.FlexLayoutModule,
        divider_1.MatDividerModule,
        toolbar_1.MatToolbarModule,
        sidenav_1.MatSidenavModule,
        menu_1.MatMenuModule,
        icon_1.MatIconModule,
        button_1.MatButtonModule,
        input_1.MatInputModule,
        expansion_1.MatExpansionModule], exports: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, main_component_1.MainComponent] }); })();
(function () { i0.ɵsetClassMetadata(ComponentsModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    header_component_1.HeaderComponent,
                    footer_component_1.FooterComponent,
                    main_component_1.MainComponent,
                    auth_component_1.AuthComponent,
                    welcome_component_1.WelcomeComponent
                ],
                exports: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, main_component_1.MainComponent],
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    router_1.RouterModule,
                    flex_layout_1.FlexLayoutModule,
                    divider_1.MatDividerModule,
                    toolbar_1.MatToolbarModule,
                    sidenav_1.MatSidenavModule,
                    menu_1.MatMenuModule,
                    icon_1.MatIconModule,
                    button_1.MatButtonModule,
                    input_1.MatInputModule,
                    expansion_1.MatExpansionModule
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/client/app/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/client/app/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
exports.FooterComponent = FooterComponent;
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [["href", "mailto:anton.stephanyak@gmail.com"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "footer");
        i0.ɵɵtext(1, " Copyright 2020 \u00A9 ");
        i0.ɵɵelementStart(2, "a", 0);
        i0.ɵɵtext(3, "Anton Stephanyak");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4, " (Ant0nRocket)\n");
        i0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%] {\n  flex-shrink: 0;\n}\n\nfooter[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxzb3VyY2VzLXdvcmtcXE5lc3RKUy1XaXRoLUFuZ3VsYXIvc3JjXFxjbGllbnRcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY2xpZW50L2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0FDQ0Q7O0FERUE7RUFDQywyQkFBQTtFQUNBLGVBQUE7QUNDRCIsImZpbGUiOiJzcmMvY2xpZW50L2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdGZsZXgtc2hyaW5rOiAwO1xufVxuXG5mb290ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG5cdHBhZGRpbmc6IDAuNXJlbTtcbn1cbiIsIjpob3N0IHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgcGFkZGluZzogMC41cmVtO1xufSJdfQ== */"] });
(function () { i0.ɵsetClassMetadata(FooterComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/client/app/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/client/app/components/header/header.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const auth_service_1 = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/client/app/services/auth/auth.service.ts");
const sidebar_toggle_service_1 = __webpack_require__(/*! ../../services/components/sidebar-toggle.service */ "./src/client/app/services/components/sidebar-toggle.service.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/client/app/services/auth/auth.service.ts");
const i2 = __webpack_require__(/*! ../../services/components/sidebar-toggle.service */ "./src/client/app/services/components/sidebar-toggle.service.ts");
const i3 = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
const i4 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
const i5 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
const i6 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i7 = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
const i8 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i9 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
const _c0 = function () { return ["/auth"]; };
function HeaderComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " LOG IN ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
} }
function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-menu", null, 7);
    i0.ɵɵelementStart(3, "button", 8);
    i0.ɵɵlistener("click", function HeaderComponent_div_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.authService.logout(); });
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "exit_to_app");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " Exit ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 9);
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("matMenuTriggerFor", _r2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.authService.user.username || ctx_r1.authService.user.email || ctx_r1.authService.user.phone, " ");
} }
class HeaderComponent {
    constructor(authService, sidebarService) {
        this.authService = authService;
        this.sidebarService = sidebarService;
    }
    ngOnInit() { }
}
exports.HeaderComponent = HeaderComponent;
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.SidebarService)); };
HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 2, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], ["routerLink", "/", 1, "app-name"], ["fxFlex", ""], ["mat-raised-button", "", "color", "warn", "routerLinkActive", "invisible", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "warn", "routerLinkActive", "invisible", 3, "routerLink"], ["appMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-raised-button", "", 3, "matMenuTriggerFor"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar", 0);
        i0.ɵɵelementStart(1, "mat-toolbar-row");
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵlistener("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.sidebarService.toggleSidebar.emit(); });
        i0.ɵɵelementStart(3, "mat-icon");
        i0.ɵɵtext(4, "menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "h1");
        i0.ɵɵelementStart(6, "a", 2);
        i0.ɵɵtext(7, "Lists");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "span", 3);
        i0.ɵɵtemplate(9, HeaderComponent_button_9_Template, 4, 2, "button", 4);
        i0.ɵɵtemplate(10, HeaderComponent_div_10_Template, 11, 2, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", !ctx.authService.authToken);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.authService.authToken);
    } }, directives: [i3.MatToolbar, i3.MatToolbarRow, i4.MatButton, i5.MatIcon, i6.RouterLinkWithHref, i7.DefaultFlexDirective, i8.NgIf, i6.RouterLinkActive, i6.RouterLink, i9._MatMenu, i9.MatMenuItem, i9.MatMenuTrigger], styles: ["a.app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  text-decoration: none;\n  color: white;\n}\n\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxzb3VyY2VzLXdvcmtcXE5lc3RKUy1XaXRoLUFuZ3VsYXIvc3JjXFxjbGllbnRcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvY2xpZW50L2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvY2xpZW50L2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLmFwcC1uYW1lIHtcblx0bWFyZ2luLWxlZnQ6IDhweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZpc2libGUge1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iLCJhLmFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */"] });
(function () { i0.ɵsetClassMetadata(HeaderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.SidebarService }]; }, null); })();


/***/ }),

/***/ "./src/client/app/components/main/auth/auth.component.ts":
/*!***************************************************************!*\
  !*** ./src/client/app/components/main/auth/auth.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const auth_service_1 = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/client/app/services/auth/auth.service.ts");
const signup_login_credentials_1 = __webpack_require__(/*! ../../../services/auth/signup-login-credentials */ "./src/client/app/services/auth/signup-login-credentials.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/client/app/services/auth/auth.service.ts");
const i2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i3 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
const i4 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i5 = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
const i6 = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
const i7 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
const i8 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
function AuthComponent_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(error_r6);
} }
function AuthComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, AuthComponent_div_2_p_1_Template, 2, 1, "p", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.authErrors);
} }
function AuthComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Don't have an account? ");
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵlistener("click", function AuthComponent_div_3_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.toggleMode(); });
    i0.ɵɵtext(3, "Register");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " now! ");
    i0.ɵɵelementEnd();
} }
function AuthComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Already have an account? ");
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵlistener("click", function AuthComponent_div_4_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.toggleMode(); });
    i0.ɵɵtext(3, "Log-in");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " now! ");
    i0.ɵɵelementEnd();
} }
function AuthComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Password confirmation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 10);
    i0.ɵɵlistener("ngModelChange", function AuthComponent_mat_form_field_14_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.credentials.password2 = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r4.credentials.password2);
} }
class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.mode = 'log-in';
        this.isLoginMode = () => this.mode === 'log-in';
        this.isSignupMode = () => !this.isLoginMode();
        this.toggleMode = () => {
            this.mode = this.isLoginMode() ? 'sign-up' : 'log-in';
            this.authErrors = [];
        };
        this.credentials = new signup_login_credentials_1.SignupLoginCredentials();
        this.authErrors = [];
        this.isAuthErrors = () => this.authErrors.length > 0;
    }
    ngOnInit() {
        this.authStateChanged$ = this.authService.onAuthStateChanged$.subscribe((state) => {
            if (state)
                this.router.navigate(['']);
        });
        this.authErrors$ = this.authService.onAuthError$.subscribe((err) => {
            this.authErrors.push(err);
        });
    }
    ngOnDestroy() {
        this.authErrors$.unsubscribe();
        this.authStateChanged$.unsubscribe();
    }
    submit(event) {
        this.authErrors = [];
        if (this.isLoginMode()) {
            this.authService.login(this.credentials);
        }
        else {
            if (!this.credentials.isPasswordsEqual()) {
                event.preventDefault();
                this.authErrors.push('Passwords must be equal.');
            }
            else {
                this.authService.signUp(this.credentials);
            }
        }
    }
}
exports.AuthComponent = AuthComponent;
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
AuthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AuthComponent, selectors: [["app-auth"]], decls: 18, vars: 10, consts: [[3, "ngSubmit"], ["form", "ngForm"], ["class", "auth-errors", 4, "ngIf"], [4, "ngIf"], ["matInput", "", "placeholder", "login, email or mobile", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Any non-empty string", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "warn", 3, "disabled"], [1, "auth-errors"], [4, "ngFor", "ngForOf"], [1, "like-link", 3, "click"], ["matInput", "", "type", "password", "placeholder", "Same password once again", "name", "password2", "required", "", 3, "ngModel", "ngModelChange"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0, 1);
        i0.ɵɵlistener("ngSubmit", function AuthComponent_Template_form_ngSubmit_0_listener($event) { return ctx.submit($event); });
        i0.ɵɵtemplate(2, AuthComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵtemplate(3, AuthComponent_div_3_Template, 5, 0, "div", 3);
        i0.ɵɵtemplate(4, AuthComponent_div_4_Template, 5, 0, "div", 3);
        i0.ɵɵelement(5, "mat-divider");
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8, "User ID");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "input", 4);
        i0.ɵɵlistener("ngModelChange", function AuthComponent_Template_input_ngModelChange_9_listener($event) { return ctx.credentials.id = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-form-field");
        i0.ɵɵelementStart(11, "mat-label");
        i0.ɵɵtext(12, "Password");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "input", 5);
        i0.ɵɵlistener("ngModelChange", function AuthComponent_Template_input_ngModelChange_13_listener($event) { return ctx.credentials.password = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, AuthComponent_mat_form_field_14_Template, 4, 1, "mat-form-field", 3);
        i0.ɵɵelementStart(15, "button", 6);
        i0.ɵɵtext(16);
        i0.ɵɵpipe(17, "uppercase");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isAuthErrors());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isLoginMode());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSignupMode());
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.credentials.id);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.credentials.password);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSignupMode());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", _r0.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(17, 8, ctx.mode));
    } }, directives: [i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.NgIf, i5.MatDivider, i6.MatFormField, i6.MatLabel, i7.MatInput, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i8.MatButton, i4.NgForOf], pipes: [i4.UpperCasePipe], styles: [".like-link[_ngcontent-%COMP%] {\n\ttext-decoration: underline;\n\tcolor: blue;\n\tcursor: pointer;\n}\n\nform[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n}\n\n.auth-errors[_ngcontent-%COMP%] {\n\tmargin-bottom: 3rem;\n\tborder: 2px dashed red;\n\tpadding: .5rem;\n\tbackground-color: lightgreen;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n\tmargin-top: .5rem;\n\tmargin-bottom: .5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvbWFpbi9hdXRoL2F1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDBCQUEwQjtDQUMxQixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQiIsImZpbGUiOiJzcmMvY2xpZW50L2FwcC9jb21wb25lbnRzL21haW4vYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlrZS1saW5rIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdGNvbG9yOiBibHVlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmF1dGgtZXJyb3JzIHtcblx0bWFyZ2luLWJvdHRvbTogM3JlbTtcblx0Ym9yZGVyOiAycHggZGFzaGVkIHJlZDtcblx0cGFkZGluZzogLjVyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbm1hdC1kaXZpZGVyIHtcblx0bWFyZ2luLXRvcDogLjVyZW07XG5cdG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuIl19 */"] });
(function () { i0.ɵsetClassMetadata(AuthComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }]; }, null); })();


/***/ }),

/***/ "./src/client/app/components/main/main.component.ts":
/*!**********************************************************!*\
  !*** ./src/client/app/components/main/main.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const sidenav_1 = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
const sidebar_toggle_service_1 = __webpack_require__(/*! ../../services/components/sidebar-toggle.service */ "./src/client/app/services/components/sidebar-toggle.service.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../../services/components/sidebar-toggle.service */ "./src/client/app/services/components/sidebar-toggle.service.ts");
const i2 = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
const i3 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const _c0 = ["sidebar"];
class MainComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
    }
    ngOnInit() {
        this.sidebarService.toggleSidebar.subscribe(() => this.sidebar.toggle());
    }
}
exports.MainComponent = MainComponent;
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(i0.ɵɵdirectiveInject(i1.SidebarService)); };
MainComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidebar = _t.first);
    } }, decls: 6, vars: 0, consts: [["sidebar", ""]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-sidenav-container");
        i0.ɵɵelementStart(1, "mat-sidenav", null, 0);
        i0.ɵɵtext(3, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, temporibus? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-sidenav-content");
        i0.ɵɵelement(5, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatSidenavContainer, i2.MatSidenav, i2.MatSidenavContent, i3.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  flex: 1 0 auto;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 20%;\n  min-width: 250px;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvbWFpbi9DOlxcc291cmNlcy13b3JrXFxOZXN0SlMtV2l0aC1Bbmd1bGFyL3NyY1xcY2xpZW50XFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvY2xpZW50L2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7QUNDRCIsImZpbGUiOiJzcmMvY2xpZW50L2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0ZmxleDogMSAwIGF1dG87XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG5cdG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcblx0d2lkdGg6IDIwJTtcblx0bWluLXdpZHRoOiAyNTBweDtcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCB7XG5cdHBhZGRpbmc6IDFyZW07XG59XG4iLCI6aG9zdCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyMCU7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtO1xufSJdfQ== */"] });
(function () { i0.ɵsetClassMetadata(MainComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: i1.SidebarService }]; }, { sidebar: [{
            type: core_1.ViewChild,
            args: ['sidebar']
        }] }); })();


/***/ }),

/***/ "./src/client/app/components/main/welcome/welcome.component.ts":
/*!*********************************************************************!*\
  !*** ./src/client/app/components/main/welcome/welcome.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const auth_service_1 = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/client/app/services/auth/auth.service.ts");
const shortid = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
const websockets_service_1 = __webpack_require__(/*! ../../../services/websockets/websockets.service */ "./src/client/app/services/websockets/websockets.service.ts");
const websockets_theme_enum_1 = __webpack_require__(/*! ../../../../../shared/websockets/websockets-theme.enum */ "./src/shared/websockets/websockets-theme.enum.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/client/app/services/auth/auth.service.ts");
const i2 = __webpack_require__(/*! ../../../services/websockets/websockets.service */ "./src/client/app/services/websockets/websockets.service.ts");
const i3 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i4 = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
const i5 = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
const i6 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
function WelcomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, " Hello and welcome to ");
    i0.ɵɵelementStart(3, "b");
    i0.ɵɵtext(4, "NestJS with Angular");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " website. ");
    i0.ɵɵelement(6, "br");
    i0.ɵɵtext(7, " My name is ");
    i0.ɵɵelementStart(8, "a", 1);
    i0.ɵɵtext(9, "Anton Stephanyak");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " (aka Ant0nRocket ");
    i0.ɵɵelementStart(11, "sup");
    i0.ɵɵelementStart(12, "a", 2);
    i0.ɵɵtext(13, "GIT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, ") and I'm glad to see you! ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16, " Main purpose of this resource is to demonstrate my ability of creating websites such as this one. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵtext(18, " In the top-right corner there is a LOG IN button. Please, click it and perform quick registration (provide fake ID, no confirmation required, you will immediately loged-in).");
    i0.ɵɵelement(19, "br");
    i0.ɵɵtext(20, " There are two reasons why you should do that: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "ol");
    i0.ɵɵelementStart(22, "li");
    i0.ɵɵtext(23, " I'll proove my ability of creating auth stuff. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "li");
    i0.ɵɵtext(25, " WebSockets features available only for signed-in users. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function WelcomeComponent_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " Outstanding, ");
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "! ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.authService.user.username || ctx_r2.authService.user.email || ctx_r2.authService.user.phone);
} }
function WelcomeComponent_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " Now you can perform WebSockets test. ");
    i0.ɵɵelementEnd();
} }
function WelcomeComponent_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Let's wait few seconds for connection to be established...");
    i0.ɵɵelementEnd();
} }
function WelcomeComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "Ooops! I'm very sorry, but something goes wrong with back-end. Please, try later :(");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function WelcomeComponent_div_1_div_5_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " Ok! Everything is ready! Our back-end had just accepted our connection. Let's play a ping-pong game with him! ");
    i0.ɵɵelementEnd();
} }
function WelcomeComponent_div_1_div_5_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " See that button with \"TEST\" label? When you will click it, a random string will be generated and sent to the server via WebSocket. Then the server will return us this string and you will see its content in the list below. Go ahead! Click! ");
    i0.ɵɵelementEnd();
} }
function WelcomeComponent_div_1_div_5_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(message_r11);
} }
function WelcomeComponent_div_1_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "And all that messages are not just client generated and added in list. They truly were sent to server and get back. You can easily check this in Network tab of the development tools of your browser. Just select \"/\" websocket connection and look inside the tab \"Messages\".");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function WelcomeComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, WelcomeComponent_div_1_div_5_p_1_Template, 2, 0, "p", 0);
    i0.ɵɵtemplate(2, WelcomeComponent_div_1_div_5_p_2_Template, 2, 0, "p", 0);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵelementStart(4, "button", 3);
    i0.ɵɵlistener("click", function WelcomeComponent_div_1_div_5_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.testWebSockets(); });
    i0.ɵɵtext(5, "TEST");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ol");
    i0.ɵɵtemplate(7, WelcomeComponent_div_1_div_5_li_7_Template, 2, 1, "li", 4);
    i0.ɵɵpipe(8, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, WelcomeComponent_div_1_div_5_div_9_Template, 4, 0, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.hasMessages());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.hasMessages());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 4, ctx_r6.onMessage));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.hasMessages());
} }
function WelcomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, WelcomeComponent_div_1_p_1_Template, 5, 1, "p", 0);
    i0.ɵɵtemplate(2, WelcomeComponent_div_1_p_2_Template, 2, 0, "p", 0);
    i0.ɵɵtemplate(3, WelcomeComponent_div_1_p_3_Template, 2, 0, "p", 0);
    i0.ɵɵtemplate(4, WelcomeComponent_div_1_div_4_Template, 3, 0, "div", 0);
    i0.ɵɵtemplate(5, WelcomeComponent_div_1_div_5_Template, 10, 6, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.hasMessages());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.hasMessages());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.webSocketConnectInProgress);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.webSocketConnectInProgress && !ctx_r1.webSockets.ready);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.webSocketConnectInProgress && ctx_r1.webSockets.ready);
} }
class WelcomeComponent {
    constructor(authService, webSockets) {
        this.authService = authService;
        this.webSockets = webSockets;
        this.webSocketConnectInProgress = true;
        this.onMessage = new core_1.EventEmitter();
        this.hasMessages = () => this.receivedMessages.length > 0;
        this.componentId = shortid.generate();
        this.receivedMessages = [];
        this.message$ = webSockets.onMessageReceived$.subscribe((dto) => {
            if (dto.cid !== this.componentId)
                return;
            if (this.receivedMessages.length > 4)
                this.receivedMessages = [];
            this.receivedMessages.push(dto.content);
            this.onMessage.emit(this.receivedMessages);
        });
    }
    ngOnInit() {
        if (this.authService.authToken) {
            this.webSockets.connect();
            setTimeout(() => (this.webSocketConnectInProgress = false), 3000);
        }
    }
    testWebSockets() {
        const dto = {
            cid: this.componentId,
            content: shortid.generate(),
            theme: websockets_theme_enum_1.WebSocketsTheme.SendBackData
        };
        this.webSockets.send(dto);
    }
}
exports.WelcomeComponent = WelcomeComponent;
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.WebSocketsService)); };
WelcomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 27, vars: 2, consts: [[4, "ngIf"], ["href", "mailto:anton.stephanyak@gmail.com"], ["href", "https://github.com/Ant0nRocket", "target", "_blank"], ["mat-stroked-button", "", "color", "link", 3, "click"], [4, "ngFor", "ngForOf"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, WelcomeComponent_div_0_Template, 26, 0, "div", 0);
        i0.ɵɵtemplate(1, WelcomeComponent_div_1_Template, 6, 5, "div", 0);
        i0.ɵɵelement(2, "mat-divider");
        i0.ɵɵelementStart(3, "mat-expansion-panel");
        i0.ɵɵelementStart(4, "mat-expansion-panel-header");
        i0.ɵɵtext(5, " List of technologies used here ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "ul");
        i0.ɵɵelementStart(7, "li");
        i0.ɵɵtext(8, "Angular (for front-end)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ul");
        i0.ɵɵelementStart(10, "li");
        i0.ɵɵtext(11, "Angular Material components were used for styling");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "li");
        i0.ɵɵtext(13, "NestJS (for back-end)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "li");
        i0.ɵɵtext(15, "TypeScript (both for front and back)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "li");
        i0.ɵɵtext(17, "WebSockets API");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "li");
        i0.ɵɵtext(19, "MongoDB");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "li");
        i0.ɵɵtext(21, "Git");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "li");
        i0.ɵɵtext(23, "Heroku (deploying using one of project's git branches)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "ul");
        i0.ɵɵelementStart(25, "li");
        i0.ɵɵtext(26, "mLab addon for production MongoDB base");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.authService.authToken);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.authService.authToken);
    } }, directives: [i3.NgIf, i4.MatDivider, i5.MatExpansionPanel, i5.MatExpansionPanelHeader, i6.MatButton, i3.NgForOf], pipes: [i3.AsyncPipe], styles: ["mat-divider[_ngcontent-%COMP%] {\r\n\tmargin: 2rem 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvYXBwL2NvbXBvbmVudHMvbWFpbi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvY2xpZW50L2FwcC9jb21wb25lbnRzL21haW4vd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGl2aWRlciB7XHJcblx0bWFyZ2luOiAycmVtIDA7XHJcbn1cclxuIl19 */"] });
(function () { i0.ɵsetClassMetadata(WelcomeComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css']
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.WebSocketsService }]; }, null); })();


/***/ }),

/***/ "./src/client/app/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/client/app/services/auth/auth.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const angular_jwt_1 = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const services_module_1 = __webpack_require__(/*! ../services.module */ "./src/client/app/services/services.module.ts");
const api_config_1 = __webpack_require__(/*! ../../../../shared/api.config */ "./src/shared/api.config.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
const i2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.onAuthStateChanged$ = new rxjs_1.Subject();
        this.onAuthError$ = new rxjs_1.Subject();
        this.user = undefined;
        this._authToken = null;
        this.authToken = localStorage.getItem('authToken');
    }
    get authToken() {
        return this._authToken;
    }
    set authToken(authToken) {
        this._authToken = authToken;
        if (this._authToken) {
            this.writeUserFromToken(authToken);
            localStorage.setItem('authToken', authToken);
            this.onAuthStateChanged$.next(true);
        }
        else {
            localStorage.removeItem('authToken');
            this.onAuthStateChanged$.next(false);
        }
    }
    writeUserFromToken(authToken) {
        const userFromToken = new angular_jwt_1.JwtHelperService().decodeToken(authToken);
        const { _id, email, phone, username } = userFromToken;
        this.user = { _id, email, phone, username };
    }
    signUp(authCredentials) {
        this.http.post(api_config_1.apiConfig.urlSignup, authCredentials).subscribe((dto) => {
            this.authToken = dto.token;
        }, (err) => {
            this.authToken = null;
            if (err.error.statusCode === 409)
                this.onAuthError$.next('User already exists.');
            if (err.error.statucCode === 400)
                this.onAuthError$.next('Some error occured. Check input.');
            if (err.error.statucCode === 500)
                this.onAuthError$.next('Some server side error. Try later.');
        });
    }
    login(authCredentials) {
        this.http.post(api_config_1.apiConfig.urlLogin, authCredentials).subscribe((dto) => {
            this.authToken = dto.token;
        }, (err) => {
            if (err.error.statucCode !== 504) {
                this.authToken = null;
                this.onAuthError$.next('Invalid login or password.');
            }
            else {
                this.onAuthError$.next("Server isn't responding. Try later.");
            }
        });
    }
    checkToken(authTokenDto) {
        if (!authTokenDto)
            authTokenDto = { token: this.authToken };
        this.http.post(api_config_1.apiConfig.urlTokenCheck, authTokenDto).subscribe((dto) => {
            this.authToken = dto.token;
        }, (err) => {
            if (err.error.statucCode < 500) {
                this.authToken = null;
            }
        });
    }
    logout() {
        this.authToken = null;
        this.router.navigate(['']);
    }
}
exports.AuthService = AuthService;
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router)); };
AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: services_module_1.ServicesModule });
(function () { i0.ɵsetClassMetadata(AuthService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: services_module_1.ServicesModule
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Router }]; }, null); })();


/***/ }),

/***/ "./src/client/app/services/auth/signup-login-credentials.ts":
/*!******************************************************************!*\
  !*** ./src/client/app/services/auth/signup-login-credentials.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const auth_credentials_dto_1 = __webpack_require__(/*! ../../../../shared/auth/auth-credentials.dto */ "./src/shared/auth/auth-credentials.dto.ts");
class SignupLoginCredentials extends auth_credentials_dto_1.AuthCredentialsDto {
    constructor() {
        super();
        this.password2 = '';
        this.password = '';
        this.password2 = '';
    }
    isPasswordsEqual() {
        if (!this.password || !this.password2)
            return false;
        return this.password === this.password2;
    }
    isEmpty() {
        if (!this.id || !this.password)
            return true;
        return this.id.trim().length === 0 || this.password.length === 0;
    }
}
exports.SignupLoginCredentials = SignupLoginCredentials;


/***/ }),

/***/ "./src/client/app/services/components/sidebar-toggle.service.ts":
/*!**********************************************************************!*\
  !*** ./src/client/app/services/components/sidebar-toggle.service.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const services_module_1 = __webpack_require__(/*! ../services.module */ "./src/client/app/services/services.module.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class SidebarService {
    constructor() {
        this.toggleSidebar = new core_1.EventEmitter();
    }
}
exports.SidebarService = SidebarService;
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = i0.ɵɵdefineInjectable({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: services_module_1.ServicesModule });
(function () { i0.ɵsetClassMetadata(SidebarService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: services_module_1.ServicesModule
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/client/app/services/services.module.ts":
/*!****************************************************!*\
  !*** ./src/client/app/services/services.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
class ServicesModule {
}
exports.ServicesModule = ServicesModule;
ServicesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ServicesModule });
ServicesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, imports: [[
            common_1.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ServicesModule, { imports: [common_1.CommonModule] }); })();
(function () { i0.ɵsetClassMetadata(ServicesModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule,
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/client/app/services/websockets/websocket.options.ts":
/*!*****************************************************************!*\
  !*** ./src/client/app/services/websockets/websocket.options.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/client/environments/environment.ts");
class WebSocketOptions {
    constructor() {
        this._url = '';
        this.IntervalOfPingPongMs = 20000;
        this.intervalOfRoconnectionOnErrorMs = 5000;
        this.reconnectionAttemptsLimit = 10;
    }
    get url() {
        if (this._url === '') {
            const wsProtocolPrefix = location.protocol.startsWith('https') ? 'wss://' : 'ws://';
            this._url = wsProtocolPrefix + location.host;
            if (!environment_1.environment.production) {
                this._url = this._url.replace('4200', '3000');
            }
        }
        return this._url;
    }
    set url(url) {
        this._url = url;
    }
}
exports.WebSocketOptions = WebSocketOptions;


/***/ }),

/***/ "./src/client/app/services/websockets/websockets.service.ts":
/*!******************************************************************!*\
  !*** ./src/client/app/services/websockets/websockets.service.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const services_module_1 = __webpack_require__(/*! ../services.module */ "./src/client/app/services/services.module.ts");
const websocket_options_1 = __webpack_require__(/*! ./websocket.options */ "./src/client/app/services/websockets/websocket.options.ts");
const auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ "./src/client/app/services/auth/auth.service.ts");
const websockets_theme_enum_1 = __webpack_require__(/*! ../../../../shared/websockets/websockets-theme.enum */ "./src/shared/websockets/websockets-theme.enum.ts");
const i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const i1 = __webpack_require__(/*! ../auth/auth.service */ "./src/client/app/services/auth/auth.service.ts");
class WebSocketsService {
    constructor(authService) {
        this.authService = authService;
        this.options = new websocket_options_1.WebSocketOptions();
        this.reconnectionAttemptsPassed = 0;
        this.onConnectionOpen$ = new core_1.EventEmitter();
        this.onConnectionClose$ = new core_1.EventEmitter();
        this.onMessageReceived$ = new core_1.EventEmitter();
        this.onConnectionError$ = new core_1.EventEmitter();
        authService.onAuthStateChanged$.subscribe((authorized) => {
            if (!authorized)
                this.close();
        });
    }
    get reconnectionAttemptsLimitReached() {
        return this.reconnectionAttemptsPassed >= this.options.reconnectionAttemptsLimit;
    }
    get ready() {
        var _a;
        return ((_a = this.ws) === null || _a === void 0 ? void 0 : _a.readyState) === WebSocket.OPEN;
    }
    connect(options) {
        if (this.ready)
            return;
        if (options)
            this.options = options;
        this.ws = new WebSocket(this.options.url);
        this.ws.onopen = () => {
            this.idOfPingPongInterval =
                window.setInterval(() => { this.send(); }, this.options.IntervalOfPingPongMs);
        };
        this.ws.onmessage = (ev) => {
            try {
                const data = JSON.parse(ev.data);
                if (data.theme === websockets_theme_enum_1.WebSocketsTheme.ClientConnected) {
                    this.sendAuthToken();
                }
                else if (data.theme === websockets_theme_enum_1.WebSocketsTheme.Unauthorized) {
                    this.close();
                }
                else {
                    this.onMessageReceived$.emit(data);
                }
            }
            catch (_a) {
                this.onMessageReceived$.emit({
                    cid: '',
                    theme: websockets_theme_enum_1.WebSocketsTheme.BadDto,
                    content: ev.data
                });
            }
        };
        this.ws.onerror = (ev) => {
            this.onConnectionError$.emit(`Error: ${ev}`);
            setTimeout(() => {
                if (!this.reconnectionAttemptsLimitReached && !this.ready) {
                    this.reconnectionAttemptsPassed++;
                    this.connect();
                }
            }, this.options.intervalOfRoconnectionOnErrorMs);
        };
        this.ws.onclose = () => {
            window.clearInterval(this.idOfPingPongInterval);
        };
    }
    sendAuthToken() {
        const dto = {
            cid: '',
            theme: websockets_theme_enum_1.WebSocketsTheme.AuthenticateWithToken,
            content: this.authService.authToken
        };
        this.send(dto);
    }
    close() {
        var _a;
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.close();
    }
    send(m) {
        if (!this.ready)
            return;
        if (!m)
            m = '';
        const message2send = typeof m === 'string' ? m : JSON.stringify(m);
        this.ws.send(message2send);
    }
}
exports.WebSocketsService = WebSocketsService;
WebSocketsService.ɵfac = function WebSocketsService_Factory(t) { return new (t || WebSocketsService)(i0.ɵɵinject(i1.AuthService)); };
WebSocketsService.ɵprov = i0.ɵɵdefineInjectable({ token: WebSocketsService, factory: WebSocketsService.ɵfac, providedIn: services_module_1.ServicesModule });
(function () { i0.ɵsetClassMetadata(WebSocketsService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: services_module_1.ServicesModule
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();


/***/ }),

/***/ "./src/client/environments/environment.ts":
/*!************************************************!*\
  !*** ./src/client/environments/environment.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/client/main.ts":
/*!****************************!*\
  !*** ./src/client/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/client/environments/environment.ts");
const __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "./src/client/app/app.module.ts");
const __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/api.config.ts":
/*!**********************************!*\
  !*** ./src/shared/api.config.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const urlApiBase = '/api';
exports.apiConfig = {
    urlWebSocket: '/socket',
    urlSignup: urlApiBase + '/signup',
    urlLogin: urlApiBase + '/login',
    urlTokenCheck: urlApiBase + '/check-token',
    minUsernameLen: 1,
    maxUsernameLen: 30,
    minPasswordLen: 1,
    maxPasswordLen: 30,
    usernameRegex: /^[A-Za-zА-Яа-я0-9\s.\-_]+$/,
    passwordRegex: /^[A-Za-zА-Яа-я0-9\s.\-`~!@#$%^&*()_=+|?]+$/,
    socketAuthDelay: 5000,
};


/***/ }),

/***/ "./src/shared/auth/auth-credentials.dto.ts":
/*!*************************************************!*\
  !*** ./src/shared/auth/auth-credentials.dto.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const class_validator_1 = __webpack_require__(/*! class-validator */ "./node_modules/class-validator/esm2015/index.js");
const class_validator_2 = __webpack_require__(/*! class-validator */ "./node_modules/class-validator/esm2015/index.js");
const api_config_1 = __webpack_require__(/*! ../api.config */ "./src/shared/api.config.ts");
class AuthCredentialsDto {
    get hasSomeId() {
        if (!this.username)
            if (!this.email)
                if (!this.phone)
                    return undefined;
        return 1;
    }
    set id(id) {
        this.username = null;
        this.email = null;
        this.phone = null;
        if (class_validator_2.isEmail(id))
            this.email = id;
        else if (class_validator_2.isMobilePhone(id))
            this.phone = id;
        else
            this.username = id;
    }
    get id() {
        const id = this.username || this.email || this.phone;
        return id;
    }
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Matches(api_config_1.apiConfig.usernameRegex, {
        message: `Username doesn't match the rule: ${api_config_1.apiConfig.usernameRegex}`
    }),
    tslib_1.__metadata("design:type", String)
], AuthCredentialsDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], AuthCredentialsDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMobilePhone(),
    tslib_1.__metadata("design:type", String)
], AuthCredentialsDto.prototype, "phone", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber({}, { message: 'no username, email or phone found' }),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [])
], AuthCredentialsDto.prototype, "hasSomeId", null);
tslib_1.__decorate([
    class_validator_1.Matches(api_config_1.apiConfig.passwordRegex, {
        message: `Password doesn't match the rule: ${api_config_1.apiConfig.passwordRegex}`
    }),
    tslib_1.__metadata("design:type", String)
], AuthCredentialsDto.prototype, "password", void 0);
exports.AuthCredentialsDto = AuthCredentialsDto;


/***/ }),

/***/ "./src/shared/websockets/websockets-theme.enum.ts":
/*!********************************************************!*\
  !*** ./src/shared/websockets/websockets-theme.enum.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WebSocketsTheme;
(function (WebSocketsTheme) {
    WebSocketsTheme[WebSocketsTheme["ClientConnected"] = 0] = "ClientConnected";
    WebSocketsTheme[WebSocketsTheme["AuthenticateWithToken"] = 1] = "AuthenticateWithToken";
    WebSocketsTheme[WebSocketsTheme["Unauthorized"] = 2] = "Unauthorized";
    WebSocketsTheme[WebSocketsTheme["BadDto"] = 3] = "BadDto";
    WebSocketsTheme[WebSocketsTheme["EndOfServiceCommands"] = 4] = "EndOfServiceCommands";
    WebSocketsTheme[WebSocketsTheme["SendBackData"] = 5] = "SendBackData";
})(WebSocketsTheme = exports.WebSocketsTheme || (exports.WebSocketsTheme = {}));


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/client/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\sources-work\NestJS-With-Angular\src\client\main.ts */"./src/client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map