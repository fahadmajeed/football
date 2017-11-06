webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\n<form   (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-6\">\n      <div class=\"panel panel-default\" ngModelGroup=\"clientData\" #cd>\n        <div class=\"panel-heading\" >Client Data </div>\n        <div class=\"panel-body\">\n          <label for=\"nifvat\"> NIF / VAT</label>\n          <input type=\"text\"\n                 ngModel\n                 name=\"nifvat\"\n                 class=\"form-control\" id=\"nifvat\" aria-describedby=\"nifvat\" placeholder=\"NIF/VAT\">\n\n          <label for=\"company\">Company</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"company\"\n                 class=\"form-control\" id=\"company\" aria-describedby=\"company\" placeholder=\"Company\">\n\n          <label for=\"name\">Name</label>\n          <input type=\"text\"\n                 ngModel\n                 name=\"name\"\n                 class=\"form-control\" id=\"name\" aria-describedby=\"name\" placeholder=\"Name\">\n\n          <label for=\"surname\">Surname</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"surname\"\n                 class=\"form-control\" id=\"surname\" aria-describedby=\"surname\" placeholder=\"Surname\">\n\n          <label for=\"address1\"> Address</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"address1\"\n                 class=\"form-control\" id=\"address1\" aria-describedby=\"address1\" placeholder=\"Address1\">\n          <br />\n\n          <input type=\"text\"\n                 ngModel\n                 name=\"address2\"\n                 class=\"form-control\" id=\"address2\" aria-describedby=\"address2\" placeholder=\"Address2\">\n\n          <label for=\"postcode\"> Postcode</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"postcode\"\n                 class=\"form-control\" id=\"postcode\" aria-describedby=\"postcode\" placeholder=\"Postcode\">\n\n          <label for=\"city\"> City</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"city\"\n                 class=\"form-control\" id=\"city\" aria-describedby=\"city\" placeholder=\"City\">\n\n          <label for=\"county\"> County</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"county\"\n                 class=\"form-control\" id=\"county\" aria-describedby=\"county\" placeholder=\"County\">\n\n          <label for=\"country\"> Country</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"country\"\n                 class=\"form-control\" id=\"country\" aria-describedby=\"country\" placeholder=\"Country\">\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <div class=\"panel panel-default\" ngModelGroup=\"billingData\">\n        <div class=\"panel-heading\" >Billing Data <button class=\"pull-right\" type=\"button\" (click)=\"copyClient()\">Copy Client Data</button></div>\n        <div class=\"panel-body\">\n\n          <label for=\"nifvat\">NIF / VAT</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"nifvat\"\n                 class=\"form-control\" id=\"nifvat\" aria-describedby=\"nifvat\" placeholder=\"NIF/VAT\">\n\n          <label for=\"company\">Company</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"company\"\n                 class=\"form-control\" id=\"company\" aria-describedby=\"company\" placeholder=\"Company\">\n\n          <label for=\"name\">Name</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"name\"\n                 class=\"form-control\" id=\"name\" aria-describedby=\"name\" placeholder=\"Name\">\n\n          <label for=\"surname\">Surname</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"surname\"\n                 class=\"form-control\" id=\"surname\" aria-describedby=\"surname\" placeholder=\"Surname\">\n\n          <label for=\"address1\">Address</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"address1\"\n                 class=\"form-control\" id=\"address1\" aria-describedby=\"address1\" placeholder=\"Address1\">\n          <br />\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"address2\"\n                 class=\"form-control\" id=\"address2\" aria-describedby=\"address2\" placeholder=\"Address2\">\n\n          <label for=\"postcode\">Postcode</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"postcode\"\n                 class=\"form-control\" id=\"postcode\" aria-describedby=\"postcode\" placeholder=\"Postcode\">\n\n          <label for=\"city\">City</label>\n          <input type=\"text\"\n\n                 ngModel\n                 name=\"city\"\n                 class=\"form-control\" id=\"city\" aria-describedby=\"city\" placeholder=\"City\">\n\n          <label for=\"county\">County</label>\n          <input type=\"text\"\n                 ngModel\n                 name=\"county\"\n                 class=\"form-control\" id=\"county\" aria-describedby=\"county\" placeholder=\"County\">\n\n          <label for=\"country\">Country</label>\n          <input type=\"text\"\n                 ngModel\n                 name=\"country\"\n                 class=\"form-control\" id=\"country\" aria-describedby=\"country\" placeholder=\"Country\">\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n\n      <div class=\"panel panel-default\" ngModelGroup=\"clientInfo\">\n        <div class=\"panel-heading\">Client Info</div>\n        <div class=\"panel-body\">\n\n          <label for=\"login\">Login</label>\n          <input type=\"text\"\n                 ngModel\n                 name=\"login\"\n                 class=\"form-control\" id=\"login\" aria-describedby=\"login\" placeholder=\"NIF/VAT\">\n\n          <label for=\"tel\">Telephone</label>\n          <input type=\"text\" class=\"form-control\"\n                 ngModel\n                 name=\"tel\"\n                 id=\"tel\" aria-describedby=\"tel\" placeholder=\"Company\">\n          <label for=\"email\">E-mail</label>\n          <input type=\"email\" class=\"form-control\"\n                 ngModel\n                 name=\"email\"\n                 id=\"email\" aria-describedby=\"email\" placeholder=\"Email\">\n\n          <label for=\"emailbill\">E-mail Bill</label>\n          <input type=\"email\" class=\"form-control\"\n                 ngModel\n                 name=\"emailbill\"\n                 id=\"emailbill\" aria-describedby=\"emailbill\" placeholder=\"Email Bill\">\n          <label for=\"comments\">Comments</label>\n          <textarea class=\"form-control\"\n                    ngModel\n                    name=\"comments\"\n                    rows=\"5\" id=\"comments\">\n          </textarea>\n\n          <label for=\"password\">Password</label>\n          <input type=\"text\" class=\"form-control\"\n                 id=\"password\"\n                 ngModel\n                 name=\"password\"\n                 aria-describedby=\"password\" placeholder=\"Postcode\">\n\n          <label for=\"mobile\">Mobile Phone</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 ngModel\n                 name=\"mobile\"\n                 id=\"mobile\" aria-describedby=\"mobile\" placeholder=\"City\">\n\n          <label for=\"sendingdate\">Sending Date</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 id=\"sendingdate\"\n                 ngModel\n                 name=\"sendingdate\"\n                 aria-describedby=\"sendingdate\"\n                 placeholder=\"County\">\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <button  class=\"btn btn-primary\" type=\"submit\" > Save</button>\n    </div>\n  </div>\n</div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.copyClient = function () {
        var client = this.clientForm.value.clientData;
        this.clientForm.form.patchValue({
            billingData: client
        });
    };
    AppComponent.prototype.onSubmit = function () {
        console.log(this.clientForm);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], AppComponent.prototype, "clientForm", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map