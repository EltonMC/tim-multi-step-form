(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan/plan.component */ "./src/app/plan/plan.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workflow/workflow-guard.service */ "./src/app/workflow/workflow-guard.service.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    // 1st Route
    { path: 'location', component: _location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"] },
    // 2nd Route
    { path: 'plan', component: _plan_plan_component__WEBPACK_IMPORTED_MODULE_3__["PlanComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowGuard"]] },
    // 3rd Route
    { path: 'person', component: _person_person_component__WEBPACK_IMPORTED_MODULE_4__["PersonComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowGuard"]] },
    // 4th Route
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowGuard"]] },
    // 5th Route
    { path: '', redirectTo: '/location', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: _location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot()
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"background:#f4f4f4;\">\n  <div class=\"header-tim\">\n    <div class=\"col-xs-2 col-sm-offset-2 col-sm-4\">\n      <a href=\"https://assineliveinternet.com/internet\"><img src=\"https://assineliveinternet.com/wp-content/uploads/2019/01/logo-tim-autorizado-1.png\"></a>\n    </div>\n\n    <div class=\"col-xs-offset-3 col-xs-8 col-sm-6 box-0800\">\n     <span class=\"title\"> Ligue Agora </span>\n     <span class=\"number\"> <a style=\"color: white;\" href=\"tel:08005914055\" onclick=\"return gtag_0800('tel:08005914055')\"> 0800 591 4055 </a></span>\n   </div>\n  </div>\n  <div class=\"container\">\n      <div class=\"board\">\n          <!-- Navigation Area (Circular Tabs) -->\n          <msw-navbar></msw-navbar>\n          <!-- End Navigation Area (Circular Tabs) -->\n\n          <!-- Content Area -->\n          <div class=\"tab-content\">\n              <!-- Nested view  -->\n              <router-outlet></router-outlet>\n          </div>\n          <!-- End Content Area -->\n      </div>\n  </div>\n</section>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/formData.service */ "./src/app/data/formData.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Tim Promoção';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        // console.log(this.title + ' loaded!');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "formData", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'multi-step-wizard-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_data_formData_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"]])
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
/* harmony import */ var _services_cep_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/cep.service */ "./src/app/services/cep.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plan/plan.component */ "./src/app/plan/plan.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-cpf-cnpj */ "./node_modules/ng2-cpf-cnpj/ng2-cpf-cnpj.umd.js");
/* harmony import */ var ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/formData.service */ "./src/app/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workflow/workflow.service */ "./src/app/workflow/workflow.service.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* App Root */


/* Feature Components */






/* Routing Module */

/* Shared Service */






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_11__["CpfCnpjModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_16__["NgxMaskModule"].forRoot(),
                ngx_slick__WEBPACK_IMPORTED_MODULE_12__["SlickModule"].forRoot()
            ],
            providers: [
                { provide: _services_email_service__WEBPACK_IMPORTED_MODULE_17__["EmailService"], useClass: _services_email_service__WEBPACK_IMPORTED_MODULE_17__["EmailService"] },
                { provide: _services_cep_service__WEBPACK_IMPORTED_MODULE_0__["CepService"], useClass: _services_cep_service__WEBPACK_IMPORTED_MODULE_0__["CepService"] },
                { provide: _services_data_service__WEBPACK_IMPORTED_MODULE_19__["DataService"], useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_19__["DataService"] },
                { provide: _data_formData_service__WEBPACK_IMPORTED_MODULE_14__["FormDataService"], useClass: _data_formData_service__WEBPACK_IMPORTED_MODULE_14__["FormDataService"] },
                { provide: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_15__["WorkflowService"], useClass: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_15__["WorkflowService"] }
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _location_location_component__WEBPACK_IMPORTED_MODULE_7__["LocationComponent"], _plan_plan_component__WEBPACK_IMPORTED_MODULE_8__["PlanComponent"], _person_person_component__WEBPACK_IMPORTED_MODULE_9__["PersonComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_18__["PaymentComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/formData.model.ts":
/*!****************************************!*\
  !*** ./src/app/data/formData.model.ts ***!
  \****************************************/
/*! exports provided: FormData, Location, Person, Address, Bank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bank", function() { return Bank; });
var FormData = /** @class */ (function () {
    function FormData() {
        this.state = '';
        this.city = '';
        this.phone = '';
        this.plan = {};
        this.name = '';
        this.cpf = '';
        this.email = '';
        this.birthday = '';
        this.rg = '';
        this.expe_date = '';
        this.expe = '';
        this.uf = '';
        this.nasc = '';
        this.phone_2 = '';
        this.mother = '';
        this.mainAddress = { 'cep': '', 'city': '', 'street': '', 'district': '', 'complement': '', 'number': '', 'ref': '', 'state': '' };
        this.auxAddress = { 'cep': '', 'city': '', 'street': '', 'district': '', 'complement': '', 'number': '', 'ref': '', 'state': '' };
        this.bank = { 'account': '', 'agency': '', 'bank': '', 'cpf': '', 'name': '', 'digit': '' };
    }
    FormData.prototype.clear = function () {
        this.state = '';
        this.city = '';
        this.phone = '';
        this.plan = {};
        this.name = '';
        this.cpf = '';
        this.email = '';
        this.birthday = '';
        this.rg = '';
        this.expe = '';
        this.uf = '';
        this.nasc = '';
        this.phone_2 = '';
        this.mother = '';
        this.mainAddress = { 'cep': '', 'city': '', 'street': '', 'district': '', 'complement': '', 'number': '', 'ref': '', 'state': '' };
        this.auxAddress = { 'cep': '', 'city': '', 'street': '', 'district': '', 'complement': '', 'number': '', 'ref': '', 'state': '' };
    };
    return FormData;
}());

var Location = /** @class */ (function () {
    function Location() {
        this.state = '';
        this.city = '';
        this.phone = '';
    }
    return Location;
}());

var Person = /** @class */ (function () {
    function Person() {
        this.name = '';
        this.cpf = '';
        this.email = '';
        this.birthday = '';
        this.rg = '';
        this.expe_date = '';
        this.expe = '';
        this.uf = '';
        this.nasc = '';
        this.phone = '';
        this.phone_2 = '';
        this.mother = '';
    }
    return Person;
}());

var Address = /** @class */ (function () {
    function Address() {
        this.cep = '';
        this.street = '';
        this.district = '';
        this.city = '';
        this.state = '';
        this.number = '';
        this.complement = '';
        this.ref = '';
    }
    return Address;
}());

var Bank = /** @class */ (function () {
    function Bank() {
        this.name = '';
        this.bank = '';
        this.account = '';
        this.cpf = '';
        this.agency = '';
        this.digit = '';
    }
    return Bank;
}());



/***/ }),

/***/ "./src/app/data/formData.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/formData.service.ts ***!
  \******************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formData.model */ "./src/app/data/formData.model.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/workflow/workflow.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormDataService = /** @class */ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new _formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"]();
        this.isLocationFormValid = false;
        this.isPlanFormValid = false;
        this.isPersonFormValid = false;
        this.isAddressFormValid = false;
    }
    FormDataService.prototype.getLocation = function () {
        // Return the Location data
        var location = {
            state: this.formData.state,
            city: this.formData.city,
            phone: this.formData.phone
        };
        return location;
    };
    FormDataService.prototype.setLocation = function (data) {
        // Update the Location data only when the Location Form had been validated successfully
        this.isLocationFormValid = true;
        this.formData.state = data.state;
        this.formData.city = data.city;
        this.formData.phone = data.phone;
        // Validate Location Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].location);
    };
    FormDataService.prototype.getPlan = function () {
        // Return the plan type
        return this.formData.plan;
    };
    FormDataService.prototype.setPlan = function (data) {
        // Update the plan type only when the Plan Form had been validated successfully
        this.isPlanFormValid = true;
        this.formData.plan = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].plan);
    };
    FormDataService.prototype.getPerson = function () {
        // Return the Person data
        var person = {
            name: this.formData.name,
            cpf: this.formData.cpf,
            email: this.formData.email,
            birthday: this.formData.birthday,
            rg: this.formData.rg,
            expe_date: this.formData.expe_date,
            expe: this.formData.expe,
            uf: this.formData.uf,
            nasc: this.formData.nasc,
            phone: this.formData.phone,
            phone_2: this.formData.phone_2,
            mother: this.formData.mother,
        };
        return person;
    };
    FormDataService.prototype.setPerson = function (data) {
        // Update the Person data only when the Person Form had been validated successfully
        this.isPersonFormValid = true;
        this.formData.name = data.name;
        this.formData.cpf = data.cpf;
        this.formData.email = data.email;
        this.formData.birthday = data.birthday;
        this.formData.rg = data.rg;
        this.formData.expe_date = data.expe_date;
        this.formData.expe = data.expe;
        this.formData.uf = data.uf;
        this.formData.nasc = data.nasc;
        this.formData.phone = data.phone;
        this.formData.phone_2 = data.phone_2;
        this.formData.mother = data.mother;
        // Validate Person Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].person);
    };
    FormDataService.prototype.getMainAddress = function () {
        // Return the Person data
        var mainAddress = {
            cep: this.formData.mainAddress.cep,
            street: this.formData.mainAddress.street,
            district: this.formData.mainAddress.district,
            city: this.formData.mainAddress.city,
            state: this.formData.mainAddress.state,
            number: this.formData.mainAddress.number,
            complement: this.formData.mainAddress.complement,
            ref: this.formData.mainAddress.ref,
        };
        return mainAddress;
    };
    FormDataService.prototype.setMainAddress = function (data) {
        // Update the Person data only when the Person Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.mainAddress.cep = data.cep;
        this.formData.mainAddress.street = data.street;
        this.formData.mainAddress.district = data.district;
        this.formData.mainAddress.city = data.city;
        this.formData.mainAddress.state = data.state;
        this.formData.mainAddress.number = data.number;
        this.formData.mainAddress.complement = data.complement;
        this.formData.mainAddress.ref = data.ref;
        // Validate Person Step in Workflow
        // this.workflowService.validateStep(STEPS.person);
    };
    FormDataService.prototype.getAuxAddress = function () {
        // Return the Person data
        var auxAddress = {
            cep: this.formData.auxAddress.cep,
            street: this.formData.auxAddress.street,
            district: this.formData.auxAddress.district,
            city: this.formData.auxAddress.city,
            state: this.formData.auxAddress.state,
            number: this.formData.auxAddress.number,
            complement: this.formData.auxAddress.complement,
            ref: this.formData.auxAddress.ref,
        };
        return auxAddress;
    };
    FormDataService.prototype.getBank = function () {
        // Return the Person data
        var bank = {
            name: this.formData.bank.name,
            cpf: this.formData.bank.cpf,
            agency: this.formData.bank.agency,
            bank: this.formData.bank.bank,
            account: this.formData.bank.account,
            digit: this.formData.bank.digit,
        };
        return bank;
    };
    FormDataService.prototype.setAuxAddress = function (data) {
        // Update the Person data only when the Person Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.auxAddress.cep = data.cep;
        this.formData.auxAddress.street = data.street;
        this.formData.auxAddress.district = data.district;
        this.formData.auxAddress.city = data.city;
        this.formData.auxAddress.state = data.state;
        this.formData.auxAddress.number = data.number;
        this.formData.auxAddress.complement = data.complement;
        this.formData.auxAddress.ref = data.ref;
        // Validate Person Step in Workflow
        // this.workflowService.validateStep(STEPS.person);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isLocationFormValid = this.isPlanFormValid = this.isPersonFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isLocationFormValid &&
            this.isPlanFormValid &&
            this.isPersonFormValid;
    };
    FormDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"]])
    ], FormDataService);
    return FormDataService;
}());



/***/ }),

/***/ "./src/app/location/Location.component.html":
/*!**************************************************!*\
  !*** ./src/app/location/Location.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #locationForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"firstname\">Estado*</label>\n                            <select class=\"form-control input-md\" #firstname=\"ngModel\" required id=\"state\" name=\"state\" type=\"text\" [(ngModel)]=\"location.state\" (change)=\"onChange($event)\">\n                              <option  value=\"\"> Selecione uma opção </option>\n                              <option *ngFor=\"let state of states\" value=\"{{ state.uf }}\"> {{ state.name }} </option>\n                            </select>\n                            <!-- <div class=\"alert alert-danger\" [hidden]=\"!(location.state.invalid  && (location.state.dirty || location.state.touched))\">Selecione um estado.</div> -->\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"lastname\">Cidade*</label>\n                            <select class=\"form-control input-md\" #lastname=\"ngModel\" required id=\"city\" name=\"city\" type=\"text\" [(ngModel)]=\"location.city\">\n                              <option  value=\"\"> Selecione uma opção </option>\n                              <option *ngFor=\"let city of cities\" value=\"{{ city }}\"> {{ city }} </option>\n                            </select>\n                            <!-- <div class=\"alert alert-danger\" [hidden]=\"!(location.city.invalid  && (location.city.dirty || location.city.touched))\">Selecione uma cidade.</div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Celular*</label>\n                    <input class=\"form-control input-md\" #email=\"ngModel\" required id=\"phone\" name=\"phone\" type=\"text\" minlength=\"10\" [(ngModel)]=\"location.phone\" mask=\"(00) 00000-0000\">\n                    <!-- <div class=\"alert alert-danger\" [hidden]=\"!(location.phone.invalid  && (location.phone.dirty || location.phone.touched))\">Selecione uma cidade.</div> -->\n                </div>\n\n                <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!locationForm.valid\" (click)=\"goToNext(locationForm)\"> Continuar <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n\n                <div class=\"form-group text-center\" [hidden]=\"!flagLocationWarning\">\n                  <div class=\"alert alert-success\"> Ops! Ainda não conseguimos chegar até você =(\n                    <br />\n                    <br />\n                    Mas não se preocupe, vamos avisar quando a TIM Live estiver disponível na sua região.\n                   </div>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/location/location.component.ts":
/*!************************************************!*\
  !*** ./src/app/location/location.component.ts ***!
  \************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/data/formData.service.ts");
/* harmony import */ var _assets_data_brazil_states_cities_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/data/brazil-states-cities.json */ "./src/assets/data/brazil-states-cities.json");
var _assets_data_brazil_states_cities_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/brazil-states-cities.json */ "./src/assets/data/brazil-states-cities.json", 1);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import fourG from '../../assets/data/4g-tim.json';
// import fibra from '../../assets/data/fibra-tim.json';

var LocationComponent = /** @class */ (function () {
    function LocationComponent(router, formDataService, emailService, dataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.emailService = emailService;
        this.dataService = dataService;
        this.title = 'Verifique nossa disponibilidade';
        this.flagLocation = false;
        this.flagLocationWarning = false;
        this.cities = [];
        this.fibra = [];
        this.fourG = [];
        this.states = _assets_data_brazil_states_cities_json__WEBPACK_IMPORTED_MODULE_4__.states;
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData('4g-tim.json').subscribe(function (res) {
            _this.fourG = res;
        });
        this.dataService.getData('fibra-tim.json').subscribe(function (res) {
            _this.fibra = res;
        });
        this.location = this.formDataService.getLocation();
    };
    LocationComponent.prototype.onChange = function (event) {
        var _this = this;
        // tslint:disable-next-line:curly
        this.states.map(function (data) { if (data.uf === _this.location.state)
            _this.cities = data.cities; });
        this.flagLocationWarning = false;
        this.flagLocation = false;
    };
    LocationComponent.prototype.removeAcento = function (text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    };
    LocationComponent.prototype.save = function (form) {
        var _this = this;
        // tslint:disable-next-line:curly
        // tslint:disable-next-line:max-line-length
        this.fourG.map(function (data) { if (_this.removeAcento(data) === _this.removeAcento(_this.location.city.toUpperCase()))
            _this.flagLocation = true; });
        this.fibra.map(function (data) { if (_this.removeAcento(data) === _this.removeAcento(_this.location.city.toUpperCase()))
            _this.flagLocation = true; });
        if (!form.valid) {
            return false;
        }
        else if (!this.flagLocation) {
            this.flagLocationWarning = true;
            return false;
        }
        this.formDataService.setLocation(this.location);
        return true;
    };
    LocationComponent.prototype.goToNext = function (form) {
        var _this = this;
        var body = '<h1> Dados do formulario: </h1>' +
            '<h3> Dados do cliente: </h3>' +
            '<p> Celular: ' + this.location.phone + '<?p>' +
            '<p> Estado: ' + this.location.state + '<?p>' +
            '<p> Cidade: ' + this.location.city + '<?p>';
        if (this.save(form)) {
            this.emailService.send('[TIM] Com Disponibilidade - ' + this.location.phone, body).subscribe(function (res) {
                // Navigate to the plan page
                _this.router.navigate(['/plan']);
            }, function (err) { });
            this.dataService.sendDisponibility(this.location.phone, this.location.city, this.location.state).subscribe(function (res) {
                console.log(res);
            }, function (err) { return console.log(err); });
        }
        else {
            this.emailService.send('[TIM] Sem Disponibilidade - ' + this.location.phone, body).subscribe(function (res) {
            }, function (err) { });
        }
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'mt-wizard-location',
            template: __webpack_require__(/*! ./Location.component.html */ "./src/app/location/Location.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"],
            _services_email_service__WEBPACK_IMPORTED_MODULE_0__["EmailService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n\n        <!-- circular user icon -->\n        <li>\n            <a routerLink=\"/location\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"location\">\n                <span class=\"round-tabs one\">\n                  <i class=\"glyphicon glyphicon-map-marker\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular tasks icon -->\n         <li>\n            <a routerLink=\"/plan\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"plan\">\n                <span class=\"round-tabs two\">\n                  <i class=\"glyphicon glyphicon-plus\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular home icon -->\n        <li>\n            <a routerLink=\"/person\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"person\">\n                <span class=\"round-tabs three\">\n                    <i class=\"glyphicon glyphicon-user\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular ok icon -->\n        <li>\n            <a routerLink=\"/payment\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs four\">\n                  <i class=\"glyphicon glyphicon-ok\"></i>\n                </span>\n            </a>\n        </li>\n\n    </ul>\n    <div class=\"clearfix\"></div>\n</div>\n\n<!-- Close the Splash screen -->\n<script src=\"assets/js/loading-bars.js\"></script>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'msw-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #pamentForm=\"ngForm\" class=\"editForm\" novalidate [hidden]=\"end\">\n  <div class=\"tab-pane fade in active\">\n    <h4 class=\"head text-center\">{{title}}</h4>\n    <br />\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n        <div class=\"row box-radio\">\n          <div class=\"form-group \">\n            <div class=\"radio radio-payment\">\n              <div class='col-xs-4 col-sm-4'>\n                <label>\n                  <img src=\"assets/images/online.jpg\">\n                  <div class=\"radio-button\">\n                      <input type=\"radio\" name=\"radio\" checked required name=\"typePayment\" [(ngModel)]=\"typePayment\" value=\"online\">\n                      <span> Conta Online </span>\n                  </div>\n                </label>\n              </div>\n              <div class='col-xs-4 col-sm-4'>\n                <label>\n                  <img src=\"assets/images/debito.jpg\">\n                  <div class=\"radio-button\">\n                    <input type=\"radio\" required name=\"typePayment\" [(ngModel)]=\"typePayment\" value=\"debito\">\n                    <span> Débito em Conta </span>\n                  </div>\n                </label>\n              </div>\n              <div class='col-xs-4 col-sm-4'>\n                <label>\n                  <img src=\"assets/images/bill.jpg\">\n                  <div class=\"radio-button\">\n                    <input type=\"radio\" required name=\"typePayment\" [(ngModel)]=\"typePayment\" value=\"boleto\">\n                    <span> Boleto Bancário </span>\n                  </div>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"box-debito\" *ngIf=\"typePayment === 'debito'\">\n          <div class=\"row\">\n            <div class='col-xs-12 col-sm-8'>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Nome Completo</label>\n                <input class=\"form-control input-md\" required id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"payment.name\"\n                  placeholder=\"NOME COMPLETO\">\n              </div>\n            </div>\n            <div class='col-xs-12 col-sm-4'>\n              <div class=\"form-group\">\n                <label class=\"control-label\">CPF</label>\n                <input class=\"form-control input-md\"  #cpf=\"ngModel\"  required id=\"cpf\" name=\"cpf\" type=\"text\" placeholder=\"XXX.XXX.XXX-XX\"\n                [(ngModel)]=\"payment.cpf\" [cpf]=\"payment.cpf\" mask=\"000.000.000-00\" minlength=\"11\" (focusout)=\"flagCpf = true\">\n                  <div class=\"alert alert-danger\" [hidden]=\"!(cpf.invalid  && (cpf.dirty || cpf.touched) && flagCpf) \">CPF Incorreto.</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Banco</label>\n                <select class=\"form-control input-md\" required id=\"bank\" name=\"bank\" type=\"text\" [(ngModel)]=\"payment.bank\">\n                  <option  value=\"\"> Selecione uma opção </option>\n                  <option *ngFor=\"let bank of banks\" value=\"{{ bank.type }}\"> {{ bank.name }} </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Agência</label>\n                <input class=\"form-control input-md\" required id=\"agency\" name=\"agency\" type=\"text\" minlength=\"5\"\n                  [(ngModel)]=\"payment.agency\" mask=\"0000-0\" placeholder=\"XXXX-X\">\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Conta</label>\n                <input class=\"form-control input-md\" required id=\"account\" name=\"account\" type=\"text\" minlength=\"3\"\n                  [(ngModel)]=\"payment.account\" placeholder=\"XXXXXXX\">\n                <!-- <div class=\"alert alert-danger\" [hidden]=\"!(location.phone.invalid  && (location.phone.dirty || location.phone.touched))\">Selecione uma cidade.</div> -->\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Digito</label>\n                <input class=\"form-control input-md\" required id=\"digit\" name=\"digit\" type=\"text\" minlength=\"1\"\n                  [(ngModel)]=\"payment.digit\"  placeholder=\"X\">\n                <!-- <div class=\"alert alert-danger\" [hidden]=\"!(location.phone.invalid  && (location.phone.dirty || location.phone.touched))\">Selecione uma cidade.</div> -->\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"box-account\" *ngIf=\"typePayment === 'online'\">\n          <img src=\"assets/images/i.jpg\">\n          Você Receberá o boleto de mensalidade no e-mail cadastrado.\n        </div>\n\n        <div class=\"box-bill\" *ngIf=\"typePayment === 'boleto'\">\n          <img src=\"assets/images/i.jpg\">\n\n          Você Receberá o boleto de mensalidade no endereço cadastrado.\n        </div>\n\n        <div class='row'>\n          <div class='col-xs-12 col-sm-12'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Selecione a data de vencimento da fatura</label>\n              <select class=\"form-control input-md\" required id=\"dateEnd\" name=\"dateEnd\" type=\"text\" [(ngModel)]=\"dateEnd\">\n                <option  value=\"\"> Selecione uma opção </option>\n                <option value=\"07\"> 07 </option>\n                <option value=\"10\"> 10 </option>\n                <option value=\"12\"> 12 </option>\n                <option value=\"15\"> 15 </option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class='col-xs-12 col-sm-8'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Nome Completo</label>\n              <input class=\"form-control input-md\" required id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"name1\"\n                placeholder=\"NOME COMPLETO\">\n            </div>\n          </div>\n          <div class='col-xs-12 col-sm-4'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Telefone</label>\n              <input class=\"form-control input-md\" required id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"(00) 00000-0000\"\n              [(ngModel)]=\"phone1\" minlength=\"11\" mask=\"(00) 00000-0000\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class='col-xs-12 col-sm-8'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Nome Completo</label>\n              <input class=\"form-control input-md\" required id=\"name\" name=\"name\" type=\"text\" [(ngModel)]=\"name2\"\n                placeholder=\"NOME COMPLETO\">\n            </div>\n          </div>\n          <div class='col-xs-12 col-sm-4'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Telefone</label>\n              <input class=\"form-control input-md\" required id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"(00) 00000-0000\"\n              [(ngModel)]=\"phone2\" minlength=\"11\" mask=\"(00) 00000-0000\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class='col-xs-12 col-sm-12'>\n            <label>\n              O modem sera enviado via Fedex para o seu endereço, somente as pessoas acima citadas poderão receber o mesmo.\n            </label>\n          </div>\n        </div>\n        <div class='row'>\n          <div class='col-xs-12 col-sm-12'>\n            <div class=\"form-group\">\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" required name=\"terms\" value=\"false\" [(ngModel)]=\"terms\">\n                  <strong> Li e concordo com o <a target=\"_blank\" href=\"https://assineliveinternet.com/wp-content/uploads/2019/01/REGULAMENTO_TIM_INTERNET_CASA.pdf\"> Contrato de Permanência TIM Live</a>, <a target=\"_blank\" href=\"https://assineliveinternet.com/wp-content/uploads/2019/01/INSTRUMENTO_PARTICULAR_COMODATO_MODEM.pdf\">Instrumento de Comodato TIM Live</a> e\n                    autorizo a TIM entrar em contato comigo nos telefones informados.</strong>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"form-group text-center\">\n          <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!pamentForm.valid || !typePayment || !terms\"\n          (click)=\"goToNext(pamentForm)\" onclick=\"return gtag_end()\">\n            Finalizar <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<div class=\"tab-pane fade in active\" [hidden]=\"!end\">\n    <h3 class=\"head text-center\"> Obrigado pela preferência! </h3>\n    <h4 class=\"text-center\">\n        Olá {{ person.name }},\n    </h4>\n    <p class=\"narrow text-center\">\n        Em breve nossos atendentes vão entrar em contato com você.\n    </p>\n    <br />\n    <br />\n    <br />\n</div>\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/data/formData.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import Banks from '../../assets/data/banks.json';

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(router, formDataService, emailService, dataService) {
        var _this = this;
        this.router = router;
        this.formDataService = formDataService;
        this.emailService = emailService;
        this.dataService = dataService;
        this.title = 'FORMA DE PAGAMENTO';
        this.dateEnd = '';
        this.end = false;
        this.flagCpf = false;
        this.dataService.getData('banks.json').subscribe(function (res) {
            _this.banks = res;
        });
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.payment = this.formDataService.getBank();
        this.plan = this.formDataService.getPlan();
        this.person = this.formDataService.getPerson();
        this.mainAddress = this.formDataService.getMainAddress();
        this.auxAddress = this.formDataService.getAuxAddress();
    };
    PaymentComponent.prototype.save = function (form) {
        // tslint:disable-next-line:curly
        // tslint:disable-next-line:max-line-length
        // this.formDataService.setLocation(this.location);
        return true;
    };
    PaymentComponent.prototype.goToNext = function (form) {
        var _this = this;
        var body = '<h1> Dados do formulario: </h1>' +
            '<h3> Dados do cliente: </h3>' +
            '<p> Nome Completo: ' + this.person.name + '</p>' +
            '<p> CPF: ' + this.person.cpf + '</p>' +
            '<p> Email: ' + this.person.email + '</p>' +
            '<p> Dada de Nascimento: ' + this.person.birthday + '</p>' +
            '<p> RG:' + this.person.rg + '</p>' +
            '<p> Data de expedição:' + this.person.expe_date + '</p>' +
            '<p> Orgão expedidor: ' + this.person.expe + '</p>' +
            '<p> UF expedição:' + this.person.uf + '</p>' +
            '<p> Nascionalidade:' + this.person.nasc + '</p>' +
            '<p> Celular: ' + this.person.phone + '</p>' +
            '<p> Telefone: ' + this.person.phone_2 + '</p>' +
            '<p> Nome da Mãe:' + this.person.mother + '</p>' +
            '<h3> Endereço: </h3>' +
            '<p> CEP:' + this.mainAddress.cep + '</p>' +
            '<p> Rua:' + this.mainAddress.street + '</p>' +
            '<p> Bairro:' + this.mainAddress.district + '</p>' +
            '<p> Cidade:' + this.mainAddress.city + '</p>' +
            '<p> Estado:' + this.mainAddress.state + '</p>' +
            '<p> Número:' + this.mainAddress.number + '</p>' +
            '<p> Complemento:' + this.mainAddress.complement + '</p>' +
            '<p> Referência:' + this.mainAddress.ref + '</p>' +
            '<h3> Endereço de Instalação: </h3>' +
            '<p> CEP:' + this.auxAddress.cep + '</p>' +
            '<p> Rua:' + this.auxAddress.street + '</p>' +
            '<p> Bairro:' + this.auxAddress.district + '</p>' +
            '<p> Cidade:' + this.auxAddress.city + '</p>' +
            '<p> Estado:' + this.auxAddress.state + '</p>' +
            '<p> Número:' + this.auxAddress.number + '</p>' +
            '<p> Complemento:' + this.auxAddress.complement + '</p>' +
            '<p> Referência:' + this.auxAddress.ref + '</p>' +
            '<h3> Plano: </h3>' +
            '<p> ID:' + this.plan.id + '</p>' +
            '<p> Tipo:' + this.plan.type + '</p>' +
            '<p> Plano:' + this.plan.franquia + ' ' + this.plan.franquia_desc + '</p>' +
            '<p> Valor:' + this.plan.valor + ',' + this.plan.centavos + '</p>' +
            '<h3> Forma de Pagamento: </h3>' +
            '<p> Tipo: ' + this.typePayment + '</p>' +
            '<p> Nome Completo: ' + this.payment.name + '</p>' +
            '<p> CPF: ' + this.payment.cpf + '</p>' +
            '<p> Banco: ' + this.payment.bank + '</p>' +
            '<p> Agencia: ' + this.payment.agency + '</p>' +
            '<p> Conta: ' + this.payment.account + '</p>' +
            '<p> Digito: ' + this.payment.digit + '</p>' +
            '<h3> Vencimento da Fatura: ' + this.dateEnd + '</h3>' +
            '<p> Nome Completo: ' + this.name1 + '</p>' +
            '<p> Telefone: ' + this.phone1 + '</p>' +
            '<p> Nome Completo: ' + this.name2 + '</p>' +
            '<p> Telefone: ' + this.phone2 + '</p>';
        if (this.save(form)) {
            this.emailService.send('4 - [TIM] Contrate Agora - ' + this.person.phone, body).subscribe(function (res) {
                _this.end = true;
            }, function (err) { });
        }
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"],
            _services_email_service__WEBPACK_IMPORTED_MODULE_0__["EmailService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #personForm=\"ngForm\" class=\"editForm\" novalidate>\n  <div class=\"tab-pane fade in active\">\n    <h4 class=\"head text-center\"> DADOS PESSOAIS </h4>\n    <br />\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-8'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Nome Completo</label>\n            <input class=\"form-control input-md\" required id=\"name\" name=\"name\" type=\"text\" placeholder=\"Nome Completo\"\n              [(ngModel)]=\"person.name\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-4'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">CPF</label>\n            <input class=\"form-control input-md\"  #cpf=\"ngModel\"  required id=\"cpf\" name=\"cpf\" type=\"text\" placeholder=\"CPF\" [(ngModel)]=\"person.cpf\" [cpf]=\"person.cpf\"\n              mask=\"000.000.000-00\" minlength=\"11\" (focusout)=\"flagCpf = true\">\n            <div class=\"alert alert-danger\" [hidden]=\"!(cpf.invalid  && (cpf.dirty || cpf.touched) && flagCpf) \">CPF Incorreto.</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-8'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Email</label>\n            <input class=\"form-control input-md\" required id=\"email\" name=\"email\" type=\"email\" placeholder=\"Email\"\n              [(ngModel)]=\"person.email\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-4'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Data de Nascimento</label>\n            <input class=\"form-control input-md\" required id=\"birthday\" name=\"birthday\" type=\"text\" placeholder=\"dd/mm/aaaa\"\n              [(ngModel)]=\"person.birthday\" minlength=\"8\" mask=\"00/00/0000\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-3'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">RG</label>\n            <input class=\"form-control input-md\" required id=\"rg\" name=\"rg\" type=\"text\" placeholder=\"RG\" [(ngModel)]=\"person.rg\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-3'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Data de expedição</label>\n            <input class=\"form-control input-md\" required id=\"expe_date\" name=\"expe_date\" type=\"text\" placeholder=\"dd/mm/aaaa\" [(ngModel)]=\"person.expe_date\"\n            minlength=\"8\" mask=\"00/00/0000\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-3'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Órgão expedidor <a target=\"_blank\" href=\"https://www.significados.com.br/orgao-expedidor/\"> <i class=\"glyphicon glyphicon-info-sign\"></i> </a></label>\n            <select class=\"form-control input-md\" required id=\"expe\" name=\"expe\" type=\"text\" placeholder=\"Expedidor\" [(ngModel)]=\"person.expe\">\n                <option  value=\"\" selected> Selecione uma opção </option>\n                <option value=\"ssp\"> Secretaria da Segurança Pública (SSP) </option>\n                <option value=\"CNIg\"> Conselho Nacional de Imigração (CNIg) </option>\n                <option value=\"CGPI\"> Coordenação-Geral de Privilégios e Imunidades (CGPI) </option>\n                <option value=\"DPF\"> Departamento de Polícia Federal (DPF) </option>\n                <option value=\"MAE\"> Ministério da Marinha (MAE) </option>\n                <option value=\"MAE\"> Ministério da Aeronáutica (MAE) </option>\n                <option value=\"MEX\"> Ministério do Exército (MEX) </option>\n                <option value=\"outros\"> Outros </option>\n              </select>\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-3'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Estado*</label>\n            <select class=\"form-control input-md\" required id=\"uf\" name=\"uf\" type=\"text\" [(ngModel)]=\"person.uf\">\n              <option  value=\"\" > Selecione uma opção </option>\n              <option *ngFor=\"let state of states\" value=\"{{ state.uf }}\"> {{ state.name }} </option>\n            </select>\n            <!-- <div class=\"alert alert-danger\" [hidden]=\"!(location.state.invalid  && (location.state.dirty || location.state.touched))\">Selecione um estado.</div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-6'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Nacionalidade</label>\n            <select class=\"form-control input-md\" required id=\"nasc\" name=\"nasc\" type=\"text\" [(ngModel)]=\"person.nasc\">\n              <option  value=\"\" > Selecione uma opção </option>\n              <option value=\"brasileiro\"> Brasileiro </option>\n              <option value=\"estrangeiro\"> Estrangeiro </option>\n            </select>\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-3'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Celular para contato</label>\n            <input class=\"form-control input-md\" required id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"(00) 00000-0000\"\n              [(ngModel)]=\"person.phone\" minlength=\"11\" mask=\"(00) 00000-0000\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-3'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Telefone para contato</label>\n            <input class=\"form-control input-md\" id=\"phone_2\" name=\"phone_2\" type=\"text\" placeholder=\"(00) 0000-0000\"\n              [(ngModel)]=\"person.phone_2\" mask=\"(00) 00000-0000\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-12'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Nome completo da Mãe</label>\n            <input class=\"form-control input-md\" required id=\"mother\" name=\"mother\" type=\"text\" placeholder=\"Nome completo da Mãe\"\n              [(ngModel)]=\"person.mother\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <br />\n    <h4 class=\"head text-center\"> ENDEREÇO </h4>\n    <br />\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-4'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">CEP <a target=\"_blank\" href=\"http://www.buscacep.correios.com.br/sistemas/buscacep/\"> <i class=\"glyphicon glyphicon-info-sign\"></i> </a> </label>\n            <input class=\"form-control input-md\" #cep=\"ngModel\" required name=\"mainCep\" type=\"text\" minlength=\"8\" placeholder=\"00000-000\"\n              mask=\"00000-000\" [(ngModel)]=\"mainAddress.cep\" (focusout)=\"getMainAddress()\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-8'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Rua</label>\n            <input class=\"form-control input-md\" required name=\"mainStreet\" type=\"text\" placeholder=\"Rua\" [(ngModel)]=\"mainAddress.street\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-4'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Bairro</label>\n            <input class=\"form-control input-md\" required name=\"mainDistrict\" type=\"text\" placeholder=\"Bairro\"\n              [(ngModel)]=\"mainAddress.district\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-6'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Cidade</label>\n            <input class=\"form-control input-md\" required name=\"mainCity\" type=\"text\" placeholder=\"Cidade\" [(ngModel)]=\"mainAddress.city\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-2'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Estado</label>\n            <input class=\"form-control input-md\" required type=\"text\" name=\"mainState\" placeholder=\"Estado\" [(ngModel)]=\"mainAddress.state\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-4'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Número</label>\n            <input class=\"form-control input-md\" required name=\"mainNumber\" type=\"text\" placeholder=\"Número\"\n              [(ngModel)]=\"mainAddress.number\">\n          </div>\n        </div>\n        <div class='col-xs-12 col-sm-8'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Complemento</label>\n            <input class=\"form-control input-md\" type=\"text\" name=\"mainComplement\" placeholder=\"Complemento\"\n              [(ngModel)]=\"mainAddress.complement\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-12'>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Ponto de referência</label>\n            <input class=\"form-control input-md\" type=\"text\" name=\"mainRef\" placeholder=\"Ponto de referência\"\n              [(ngModel)]=\"mainAddress.ref\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n        <div class='col-xs-12 col-sm-12'>\n          <div class=\"form-group\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\" name=\"flagAddress\" [(ngModel)]=\"flagAddress\" value=\"false\">\n                <strong> Meu endereço de faturamento é diferente do endereço de instalação.</strong>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"flagAddress\">\n      <br />\n      <h4 class=\"head text-center\"> ENDEREÇO DE INSTALAÇÃO </h4>\n      <br />\n      <div class='row'>\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n          <div class='col-xs-12 col-sm-4'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">CEP <a target=\"_blank\" href=\"http://www.buscacep.correios.com.br/sistemas/buscacep/\"> <i class=\"glyphicon glyphicon-info-sign\"></i> </a></label>\n              <input class=\"form-control input-md\" required name=\"auxCep\" type=\"text\" minlength=\"8\" placeholder=\"00000-000\"\n                mask=\"00000-000\" [(ngModel)]=\"auxAddress.cep\" (focusout)=\"getAuxAddress()\">\n            </div>\n          </div>\n          <div class='col-xs-12 col-sm-8'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Rua</label>\n              <input class=\"form-control input-md\" required name=\"auxStreet\" type=\"text\" placeholder=\"Rua\" [(ngModel)]=\"auxAddress.street\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class='row'>\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n          <div class='col-xs-12 col-sm-4'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Bairro</label>\n              <input class=\"form-control input-md\" required name=\"auxDistrict\" type=\"text\" placeholder=\"Bairro\"\n                [(ngModel)]=\"auxAddress.district\">\n            </div>\n          </div>\n          <div class='col-xs-12 col-sm-6'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Cidade</label>\n              <input class=\"form-control input-md\" required name=\"auxCity\" type=\"text\" placeholder=\"Cidade\"\n                [(ngModel)]=\"auxAddress.city\">\n            </div>\n          </div>\n          <div class='col-xs-12 col-sm-2'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Estado</label>\n              <input class=\"form-control input-md\" required type=\"text\" name=\"auxState\" placeholder=\"Estado\" [(ngModel)]=\"auxAddress.state\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class='row'>\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n          <div class='col-xs-12 col-sm-4'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Número</label>\n              <input class=\"form-control input-md\" required name=\"auxNumber\" type=\"text\" placeholder=\"Número\"\n                [(ngModel)]=\"auxAddress.number\">\n            </div>\n          </div>\n          <div class='col-xs-12 col-sm-8'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Complemento</label>\n              <input class=\"form-control input-md\" type=\"text\" name=\"auxComplement\" placeholder=\"Complemento\"\n                [(ngModel)]=\"auxAddress.complement\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class='row'>\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n          <div class='col-xs-12 col-sm-12'>\n            <div class=\"form-group\">\n              <label class=\"control-label\">Ponto de referência</label>\n              <input class=\"form-control input-md\" type=\"text\" name=\"auxRef\" placeholder=\"Ponto de referência\"\n                [(ngModel)]=\"auxAddress.ref\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class='row'>\n      <div class=\"form-group text-center\">\n        <button class=\"btn btn-outline-rounded btn-success\" (click)=\"goToNext(personForm)\">\n          Continuar <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _services_cep_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/cep.service */ "./src/app/services/cep.service.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/data/formData.service.ts");
/* harmony import */ var _assets_data_brazil_states_cities_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/data/brazil-states-cities.json */ "./src/assets/data/brazil-states-cities.json");
var _assets_data_brazil_states_cities_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/brazil-states-cities.json */ "./src/assets/data/brazil-states-cities.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonComponent = /** @class */ (function () {
    function PersonComponent(router, formDataService, cepService, emailService) {
        this.router = router;
        this.formDataService = formDataService;
        this.cepService = cepService;
        this.emailService = emailService;
        this.flagAddress = false;
        this.flagCpf = false;
        this.dateEnd = '';
        this.states = _assets_data_brazil_states_cities_json__WEBPACK_IMPORTED_MODULE_5__.states;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.person = this.formDataService.getPerson();
        this.mainAddress = this.formDataService.getMainAddress();
        this.auxAddress = this.formDataService.getAuxAddress();
    };
    PersonComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setMainAddress(this.mainAddress);
        this.formDataService.setAuxAddress(this.auxAddress);
        this.formDataService.setPerson(this.person);
        return true;
    };
    PersonComponent.prototype.getMainAddress = function () {
        var _this = this;
        this.cepService.get(this.mainAddress.cep).subscribe(function (res) {
            _this.mainAddress.street = res.logradouro;
            _this.mainAddress.city = res.localidade;
            _this.mainAddress.state = res.uf;
            _this.mainAddress.district = res.bairro;
        });
    };
    PersonComponent.prototype.getAuxAddress = function () {
        var _this = this;
        this.cepService.get(this.auxAddress.cep).subscribe(function (res) {
            _this.auxAddress.street = res.logradouro;
            _this.auxAddress.city = res.localidade;
            _this.auxAddress.state = res.uf;
            _this.auxAddress.district = res.bairro;
        });
    };
    PersonComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the plan page
            this.router.navigate(['/plan']);
        }
    };
    PersonComponent.prototype.goToNext = function (form) {
        var _this = this;
        if (!this.flagAddress) {
            this.auxAddress = this.mainAddress;
        }
        var body = '<h1> Dados do formulario: </h1>' +
            '<h3> Dados do cliente: </h3>' +
            '<p> Nome Completo: ' + this.person.name + '</p>' +
            '<p> CPF: ' + this.person.cpf + '</p>' +
            '<p> Email: ' + this.person.email + '</p>' +
            '<p> Dada de Nascimento: ' + this.person.birthday + '</p>' +
            '<p> RG:' + this.person.rg + '</p>' +
            '<p> Orgão expedidor: ' + this.person.expe + '</p>' +
            '<p> UF expedição:' + this.person.uf + '</p>' +
            '<p> Nascionalidade:' + this.person.nasc + '</p>' +
            '<p> Celular: ' + this.person.phone + '</p>' +
            '<p> Telefone: ' + this.person.phone_2 + '</p>' +
            '<p> Nome da Mãe:' + this.person.mother + '</p>' +
            '<h3> Endereço: </h3>' +
            '<p> CEP:' + this.mainAddress.cep + '</p>' +
            '<p> Rua:' + this.mainAddress.street + '</p>' +
            '<p> Bairro:' + this.mainAddress.district + '</p>' +
            '<p> Cidade:' + this.mainAddress.city + '</p>' +
            '<p> Estado:' + this.mainAddress.state + '</p>' +
            '<p> Número:' + this.mainAddress.number + '</p>' +
            '<p> Complemento:' + this.mainAddress.complement + '</p>' +
            '<p> Referência:' + this.mainAddress.ref + '</p>' +
            '<h3> Endereço de Instalação: </h3>' +
            '<p> CEP:' + this.auxAddress.cep + '</p>' +
            '<p> Rua:' + this.auxAddress.street + '</p>' +
            '<p> Bairro:' + this.auxAddress.district + '</p>' +
            '<p> Cidade:' + this.auxAddress.city + '</p>' +
            '<p> Estado:' + this.auxAddress.state + '</p>' +
            '<p> Número:' + this.auxAddress.number + '</p>' +
            '<p> Complemento:' + this.auxAddress.complement + '</p>' +
            '<p> Referência:' + this.auxAddress.ref + '</p>';
        if (this.save(form)) {
            this.emailService.send('[TIM] Contrate Agora - ' + this.person.phone, body).subscribe(function (res) {
                // Navigate to the result page
                _this.router.navigate(['/payment']);
            }, function (err) { });
        }
    };
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'mt-wizard-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _data_formData_service__WEBPACK_IMPORTED_MODULE_4__["FormDataService"],
            _services_cep_service__WEBPACK_IMPORTED_MODULE_0__["CepService"],
            _services_email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan.component.html":
/*!******************************************!*\
  !*** ./src/app/plan/plan.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #planForm=\"ngForm\" class=\"editForm\" novalidate>\n  <div class=\"form-horizontal\">\n    <div class=\"tab-pane fade in active\">\n      <h4 class=\"head text-center\">{{title}}</h4>\n      <div class='row' *ngIf=\"flagFibra\" style=\"padding-bottom: 20px;\">\n        <h4 class=\"head text-center\"> PLANOS TIM FIBRA </h4>\n\n        <!-- You can now use your library component in app.component.html -->\n        <ngx-slick class=\"carousel col-xs-12 col-sm-offset-2 col-sm-8\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n          <div ngxSlickItem class=\"plan-box\" *ngFor=\"let item of plans?.fibra\">\n            <div class=\"box-header\">\n              <span class=\"title\"> <b>{{ item.franquia }}</b>{{ item.franquia_desc }} </span>\n              <span class=\"description\"> DE VELOCIDADE </span>\n            </div>\n            <div class=\"box-benefits\">\n              <span class=\"title\"> Voz fixo ilimitada Brasil </span>\n              <span class=\"channels\"> {{ item.canais }} </span>\n              <span class=\"tv-partners\"> Parceiros de vídeo </span>\n              <div class=\"tv-partners-img\">\n                <img *ngFor=\"let img of item.imagens\" src=\"{{ img }}\">\n              </div>\n            </div>\n            <div class=\"box-body\">\n              <span *ngIf=\"item.promocao.flag\" class=\"promotion\"> <label>de R$ {{ item.promocao.valor }}</label> por\n              </span>\n              <span class=\"value\">\n                <label class=\"type\">R$</label>\n                <label class=\"price\">{{ item.valor }}</label>\n                <label class=\"cents\">,{{ item.centavos }}</label>\n                <label class=\"month\">/MÊS</label> </span>\n              <span *ngIf=\"item.promocao.flag\" class=\"validate\"> {{ item.promocao.validate }} </span>\n              <span class=\"tax\"> Taxa de Habilitação: {{ item.taxa }} </span>\n              <button (click)=\"goToNext(item)\"> Selecionar <br /> Plano </button>\n              <span class=\"download\"> Velocidade de Download: {{ item.download }} </span>\n              <span class=\"upload\"> Velocidade de upload: {{ item.upload }} </span>\n            </div>\n            <!-- <div class=\"box-footer\">\n                <span class=\"title\"> Mais Beneficios </span>\n              </div> -->\n          </div>\n        </ngx-slick>\n      </div>\n      <div class='row' *ngIf=\"flag4G\" style=\"padding-bottom: 20px;\">\n        <h4 class=\"head text-center\"> PLANOS TIM 4G </h4>\n        <ngx-slick class=\"carousel col-xs-12 col-sm-offset-2 col-sm-8\" #slickModal=\"slick-modal\" [config]=\"slideConfig\">\n          <div ngxSlickItem class=\"plan-box\" *ngFor=\"let item of plans?.fourG\">\n            <div class=\"box-header\">\n              <span class=\"title\"> <b>{{ item.franquia }}</b>{{ item.franquia_desc }} </span>\n            </div>\n            <div class=\"box-benefits\">\n              <span class=\"title\"> Velocidade de Download: {{ item.download }} </span>\n              <span class=\"title\"> Velocidade de upload: {{ item.upload }} </span>\n              <span class=\"title\" style=\"padding-bottom: 20px;\"> Franquia: {{ item.franquia }} {{ item.franquia_desc }} </span>\n              <span class=\"channels\"> MODEM EM COMODADATO </span>\n              <div class=\"tv-partners-img\" >\n                <img style=\"width: 100px;\" src=\"https://assineliveinternet.com/wp-content/uploads/2019/01/tim-protect-modal.png\">\n                <img style=\"width: 100px;\" src=\"https://assineliveinternet.com/wp-content/uploads/2019/01/plugueenavegue.png\">\n              </div>\n            </div>\n            <div class=\"box-body\">\n              <span *ngIf=\"item.promocao.flag\" class=\"promotion\"> <label>de R$ {{ item.promocao.valor }}</label> por\n              </span>\n              <span class=\"value\">\n                <label class=\"type\">R$</label>\n                <label class=\"price\">{{ item.valor }}</label>\n                <label class=\"cents\">,{{ item.centavos }}</label>\n                <label class=\"month\">/MÊS</label>\n              </span>\n              <!-- <span *ngIf=\"item.promocao.flag\" class=\"validate\"> {{ item.promocao.validade }} </span> -->\n              <span class=\"tax\"> {{ item.taxa }} </span>\n              <button (click)=\"goToNext(item)\"> Selecionar <br /> Plano </button>\n            </div>\n            <!-- <div class=\"box-footer\">\n                <span class=\"title\"> Mais Beneficios </span>\n              </div> -->\n          </div>\n        </ngx-slick>\n\n      </div>\n\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/plan/plan.component.ts":
/*!****************************************!*\
  !*** ./src/app/plan/plan.component.ts ***!
  \****************************************/
/*! exports provided: PlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanComponent", function() { return PlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/data/formData.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanComponent = /** @class */ (function () {
    function PlanComponent(router, formDataService, dataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.dataService = dataService;
        this.title = 'SELECIONE UM PLANO';
        this.flag4G = false;
        this.flagFibra = false;
        this.fourG = [];
        this.fibra = [];
        this.plan = {};
        this.slideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
        };
    }
    PlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plan = this.formDataService.getPlan();
        this.location = this.formDataService.getLocation();
        this.dataService.getData('plans.json').subscribe(function (res) {
            _this.plans = res;
        });
        this.dataService.getData('4g-tim.json').subscribe(function (res) {
            _this.fourG = res;
            // tslint:disable-next-line:max-line-length
            _this.fourG.map(function (data) { if (_this.removeAcento(data) === _this.removeAcento(_this.location.city.toUpperCase()))
                _this.flag4G = true; });
        });
        this.dataService.getData('fibra-tim.json').subscribe(function (res) {
            _this.fibra = res;
            // tslint:disable-next-line:max-line-length
            _this.fibra.map(function (data) { if (_this.removeAcento(data) === _this.removeAcento(_this.location.city.toUpperCase()))
                _this.flagFibra = true; });
        });
    };
    PlanComponent.prototype.removeAcento = function (text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    };
    PlanComponent.prototype.save = function (form) {
        // if (!form.valid) {
        //     return false;
        // }
        this.formDataService.setPlan(form);
        return true;
    };
    PlanComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the location page
            this.router.navigate(['/location']);
        }
    };
    PlanComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the person page
            this.router.navigate(['/person']);
        }
    };
    PlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'mt-wizard-plan',
            template: __webpack_require__(/*! ./plan.component.html */ "./src/app/plan/plan.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], PlanComponent);
    return PlanComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade in active\">\n    <h3 class=\"head text-center\">{{title}}</h3>\n    <h4 class=\"text-center\">\n        Olá {{ formData.name }},\n    </h4>\n    <p class=\"narrow text-center\">\n        Em breve nossos atendentes vão entrar em contato com você.\n    </p>\n    <br />\n    <br />\n    <br />\n</div>\n"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _data_formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/formData.model */ "./src/app/data/formData.model.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/data/formData.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = /** @class */ (function () {
    function ResultComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Obrigado pela preferência!';
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    };
    ResultComponent.prototype.submit = function () {
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"])
    ], ResultComponent.prototype, "formData", void 0);
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html")
        }),
        __metadata("design:paramtypes", [_data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/services/cep.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/cep.service.ts ***!
  \*****************************************/
/*! exports provided: CepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepService", function() { return CepService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CepService = /** @class */ (function () {
    function CepService(http) {
        this.http = http;
    }
    CepService.prototype.get = function (cep) {
        return this.http.get("https://viacep.com.br/ws/" + cep + "/json/");
    };
    CepService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CepService);
    return CepService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function (type) {
        return this.http.get("https://assineliveinternet.com/data/" + type);
    };
    DataService.prototype.sendDisponibility = function (number, city, state) {
        var formData = new FormData();
        formData.append('numero', number);
        formData.append('cidade', city);
        formData.append('estato', state);
        // tslint:disable-next-line:max-line-length
        return this.http.post("https://assineliveinternet.com/tim-response/disponibilidade.php", formData, { responseType: 'text' });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.send = function (subject, body) {
        var formData = new FormData();
        formData.append('body', body);
        formData.append('subject', subject);
        // return this.http.post('http://localhost/tim-response/send.php', formData, {responseType: 'text'});
        return this.http.post('https://assineliveinternet.com/tim-response/send.php', formData, { responseType: 'text' });
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/workflow/workflow-guard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/workflow/workflow-guard.service.ts ***!
  \****************************************************/
/*! exports provided: WorkflowGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowGuard", function() { return WorkflowGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workflow.service */ "./src/app/workflow/workflow.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowGuard = /** @class */ (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        // console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            // console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        ;
        return true;
    };
    WorkflowGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"]])
    ], WorkflowGuard);
    return WorkflowGuard;
}());



/***/ }),

/***/ "./src/app/workflow/workflow.model.ts":
/*!********************************************!*\
  !*** ./src/app/workflow/workflow.model.ts ***!
  \********************************************/
/*! exports provided: STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
var STEPS = {
    location: 'location',
    plan: 'plan',
    person: 'person',
    payment: 'payment'
};


/***/ }),

/***/ "./src/app/workflow/workflow.service.ts":
/*!**********************************************!*\
  !*** ./src/app/workflow/workflow.service.ts ***!
  \**********************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow.model */ "./src/app/workflow/workflow.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = /** @class */ (function () {
    function WorkflowService() {
        this.workflow = [
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].location, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].plan, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].person, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].payment, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    WorkflowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WorkflowService);
    return WorkflowService;
}());



/***/ }),

/***/ "./src/assets/data/brazil-states-cities.json":
/*!***************************************************!*\
  !*** ./src/assets/data/brazil-states-cities.json ***!
  \***************************************************/
/*! exports provided: states, default */
/***/ (function(module) {

module.exports = {"states":[{"uf":"AC","name":"Acre","cities":["Acrelândia","Assis Brasil","Brasiléia","Bujari","Capixaba","Cruzeiro do Sul","Epitaciolândia","Feijó","Jordão","Mâncio Lima","Manoel Urbano","Marechal Thaumaturgo","Plácido de Castro","Porto Acre","Porto Walter","Rio Branco","Rodrigues Alves","Santa Rosa do Purus","Sena Madureira","Senador Guiomard","Tarauacá","Xapuri"]},{"uf":"AL","name":"Alagoas","cities":["Água Branca","Anadia","Arapiraca","Atalaia","Barra de Santo Antônio","Barra de São Miguel","Batalha","Belém","Belo Monte","Boca da Mata","Branquinha","Cacimbinhas","Cajueiro","Campestre","Campo Alegre","Campo Grande","Canapi","Capela","Carneiros","Chã Preta","Coité do Nóia","Colônia Leopoldina","Coqueiro Seco","Coruripe","Craíbas","Delmiro Gouveia","Dois Riachos","Estrela de Alagoas","Feira Grande","Feliz Deserto","Flexeiras","Girau do Ponciano","Ibateguara","Igaci","Igreja Nova","Inhapi","Jacaré dos Homens","Jacuípe","Japaratinga","Jaramataia","Jequiá da Praia","Joaquim Gomes","Jundiá","Junqueiro","Lagoa da Canoa","Limoeiro de Anadia","Maceió","Major Isidoro","Mar Vermelho","Maragogi","Maravilha","Marechal Deodoro","Maribondo","Mata Grande","Matriz de Camaragibe","Messias","Minador do Negrão","Monteirópolis","Murici","Novo Lino","Olho d'Água das Flores","Olho d'Água do Casado","Olho d'Água Grande","Olivença","Ouro Branco","Palestina","Palmeira dos Índios","Pão de Açúcar","Pariconha","Paripueira","Passo de Camaragibe","Paulo Jacinto","Penedo","Piaçabuçu","Pilar","Pindoba","Piranhas","Poço das Trincheiras","Porto Calvo","Porto de Pedras","Porto Real do Colégio","Quebrangulo","Rio Largo","Roteiro","Santa Luzia do Norte","Santana do Ipanema","Santana do Mundaú","São Brás","São José da Laje","São José da Tapera","São Luís do Quitunde","São Miguel dos Campos","São Miguel dos Milagres","São Sebastião","Satuba","Senador Rui Palmeira","Tanque d'Arca","Taquarana","Teotônio Vilela","Traipu","União dos Palmares","Viçosa"]},{"uf":"AM","name":"Amazonas","cities":["Alvarães","Amaturá","Anamã","Anori","Apuí","Atalaia do Norte","Autazes","Barcelos","Barreirinha","Benjamin Constant","Beruri","Boa Vista do Ramos","Boca do Acre","Borba","Caapiranga","Canutama","Carauari","Careiro","Careiro da Várzea","Coari","Codajás","Eirunepé","Envira","Fonte Boa","Guajará","Humaitá","Ipixuna","Iranduba","Itacoatiara","Itamarati","Itapiranga","Japurá","Juruá","Jutaí","Lábrea","Manacapuru","Manaquiri","Manaus","Manicoré","Maraã","Maués","Nhamundá","Nova Olinda do Norte","Novo Airão","Novo Aripuanã","Parintins","Pauini","Presidente Figueiredo","Rio Preto da Eva","Santa Isabel do Rio Negro","Santo Antônio do Içá","São Gabriel da Cachoeira","São Paulo de Olivença","São Sebastião do Uatumã","Silves","Tabatinga","Tapauá","Tefé","Tonantins","Uarini","Urucará","Urucurituba"]},{"uf":"AP","name":"Amapá","cities":["Amapá","Calçoene","Cutias","Ferreira Gomes","Itaubal","Laranjal do Jari","Macapá","Mazagão","Oiapoque","Pedra Branca do Amapari","Porto Grande","Pracuúba","Santana","Serra do Navio","Tartarugalzinho","Vitória do Jari"]},{"uf":"BA","name":"Bahia","cities":["Abaíra","Abaré","Acajutiba","Adustina","Água Fria","Aiquara","Alagoinhas","Alcobaça","Almadina","Amargosa","Amélia Rodrigues","América Dourada","Anagé","Andaraí","Andorinha","Angical","Anguera","Antas","Antônio Cardoso","Antônio Gonçalves","Aporá","Apuarema","Araças","Aracatu","Araci","Aramari","Arataca","Aratuípe","Aurelino Leal","Baianópolis","Baixa Grande","Banzaê","Barra","Barra da Estiva","Barra do Choça","Barra do Mendes","Barra do Rocha","Barreiras","Barro Alto","Barrocas","Barro Preto","Belmonte","Belo Campo","Biritinga","Boa Nova","Boa Vista do Tupim","Bom Jesus da Lapa","Bom Jesus da Serra","Boninal","Bonito","Boquira","Botuporã","Brejões","Brejolândia","Brotas de Macaúbas","Brumado","Buerarema","Buritirama","Caatiba","Cabaceiras do Paraguaçu","Cachoeira","Caculé","Caém","Caetanos","Caetité","Cafarnaum","Cairu","Caldeirão Grande","Camacan","Camaçari","Camamu","Campo Alegre de Lourdes","Campo Formoso","Canápolis","Canarana","Canavieiras","Candeal","Candeias","Candiba","Cândido Sales","Cansanção","Canudos","Capela do Alto Alegre","Capim Grosso","Caraíbas","Caravelas","Cardeal da Silva","Carinhanha","Casa Nova","Castro Alves","Catolândia","Catu","Caturama","Central","Chorrochó","Cícero Dantas","Cipó","Coaraci","Cocos","Conceição da Feira","Conceição do Almeida","Conceição do Coité","Conceição do Jacuípe","Conde","Condeúba","Contendas do Sincorá","Coração de Maria","Cordeiros","Coribe","Coronel João Sá","Correntina","Cotegipe","Cravolândia","Crisópolis","Cristópolis","Cruz das Almas","Curaçá","Dário Meira","Dias d'Ávila","Dom Basílio","Dom Macedo Costa","Elísio Medrado","Encruzilhada","Entre Rios","Érico Cardoso","Esplanada","Euclides da Cunha","Eunápolis","Fátima","Feira da Mata","Feira de Santana","Filadélfia","Firmino Alves","Floresta Azul","Formosa do Rio Preto","Gandu","Gavião","Gentio do Ouro","Glória","Gongogi","Governador Mangabeira","Guajeru","Guanambi","Guaratinga","Heliópolis","Iaçu","Ibiassucê","Ibicaraí","Ibicoara","Ibicuí","Ibipeba","Ibipitanga","Ibiquera","Ibirapitanga","Ibirapuã","Ibirataia","Ibitiara","Ibititá","Ibotirama","Ichu","Igaporã","Igrapiúna","Iguaí","Ilhéus","Inhambupe","Ipecaetá","Ipiaú","Ipirá","Ipupiara","Irajuba","Iramaia","Iraquara","Irará","Irecê","Itabela","Itaberaba","Itabuna","Itacaré","Itaeté","Itagi","Itagibá","Itagimirim","Itaguaçu da Bahia","Itaju do Colônia","Itajuípe","Itamaraju","Itamari","Itambé","Itanagra","Itanhém","Itaparica","Itapé","Itapebi","Itapetinga","Itapicuru","Itapitanga","Itaquara","Itarantim","Itatim","Itiruçu","Itiúba","Itororó","Ituaçu","Ituberá","Iuiú","Jaborandi","Jacaraci","Jacobina","Jaguaquara","Jaguarari","Jaguaripe","Jandaíra","Jequié","Jeremoabo","Jiquiriçá","Jitaúna","João Dourado","Juazeiro","Jucuruçu","Jussara","Jussari","Jussiape","Lafaiete Coutinho","Lagoa Real","Laje","Lajedão","Lajedinho","Lajedo do Tabocal","Lamarão","Lapão","Lauro de Freitas","Lençóis","Licínio de Almeida","Livramento de Nossa Senhora","Luís Eduardo Magalhães","Macajuba","Macarani","Macaúbas","Macururé","Madre de Deus","Maetinga","Maiquinique","Mairi","Malhada","Malhada de Pedras","Manoel Vitorino","Mansidão","Maracás","Maragogipe","Maraú","Marcionílio Souza","Mascote","Mata de São João","Matina","Medeiros Neto","Miguel Calmon","Milagres","Mirangaba","Mirante","Monte Santo","Morpará","Morro do Chapéu","Mortugaba","Mucugê","Mucuri","Mulungu do Morro","Mundo Novo","Muniz Ferreira","Muquém de São Francisco","Muritiba","Mutuípe","Nazaré","Nilo Peçanha","Nordestina","Nova Canaã","Nova Fátima","Nova Ibiá","Nova Itarana","Nova Redenção","Nova Soure","Nova Viçosa","Novo Horizonte","Novo Triunfo","Olindina","Oliveira dos Brejinhos","Ouriçangas","Ourolândia","Palmas de Monte Alto","Palmeiras","Paramirim","Paratinga","Paripiranga","Pau Brasil","Paulo Afonso","Pé de Serra","Pedrão","Pedro Alexandre","Piatã","Pilão Arcado","Pindaí","Pindobaçu","Pintadas","Piraí do Norte","Piripá","Piritiba","Planaltino","Planalto","Poções","Pojuca","Ponto Novo","Porto Seguro","Potiraguá","Prado","Presidente Dutra","Presidente Jânio Quadros","Presidente Tancredo Neves","Queimadas","Quijingue","Quixabeira","Rafael Jambeiro","Remanso","Retirolândia","Riachão das Neves","Riachão do Jacuípe","Riacho de Santana","Ribeira do Amparo","Ribeira do Pombal","Ribeirão do Largo","Rio de Contas","Rio do Antônio","Rio do Pires","Rio Real","Rodelas","Ruy Barbosa","Salinas da Margarida","Salvador","Santa Bárbara","Santa Brígida","Santa Cruz Cabrália","Santa Cruz da Vitória","Santa Inês","Santa Luzia","Santa Maria da Vitória","Santa Rita de Cássia","Santa Teresinha","Santaluz","Santana","Santanópolis","Santo Amaro","Santo Antônio de Jesus","Santo Estêvão","São Desidério","São Domingos","São Felipe","São Félix","São Félix do Coribe","São Francisco do Conde","São Gabriel","São Gonçalo dos Campos","São José da Vitória","São José do Jacuípe","São Miguel das Matas","São Sebastião do Passé","Sapeaçu","Sátiro Dias","Saubara","Saúde","Seabra","Sebastião Laranjeiras","Senhor do Bonfim","Sento Sé","Serra do Ramalho","Serra Dourada","Serra Preta","Serrinha","Serrolândia","Simões Filho","Sítio do Mato","Sítio do Quinto","Sobradinho","Souto Soares","Tabocas do Brejo Velho","Tanhaçu","Tanque Novo","Tanquinho","Taperoá","Tapiramutá","Teixeira de Freitas","Teodoro Sampaio","Teofilândia","Teolândia","Terra Nova","Tremedal","Tucano","Uauá","Ubaíra","Ubaitaba","Ubatã","Uibaí","Umburanas","Una","Urandi","Uruçuca","Utinga","Valença","Valente","Várzea da Roça","Várzea do Poço","Várzea Nova","Varzedo","Vera Cruz","Vereda","Vitória da Conquista","Wagner","Wanderley","Wenceslau Guimarães","Xique-Xique"]},{"uf":"CE","name":"Ceará","cities":["Abaiara","Acarapé","Acaraú","Acopiara","Aiuaba","Alcântaras","Altaneira","Alto Santo","Amontada","Antonina do Norte","Apuiarés","Aquiraz","Aracati","Aracoiaba","Ararendá","Araripe","Aratuba","Arneiroz","Assaré","Aurora","Baixio","Banabuiú","Barbalha","Barreira","Barro","Barroquinha","Baturité","Beberibe","Bela Cruz","Boa Viagem","Brejo Santo","Camocim","Campos Sales","Canindé","Capistrano","Caridade","Cariré","Caririaçu","Cariús","Carnaubal","Cascavel","Catarina","Catunda","Caucaia","Cedro","Chaval","Choró","Chorozinho","Coreaú","Crateús","Crato","Croatá","Cruz","Deputado Irapuan Pinheiro","Ererê","Eusébio","Farias Brito","Forquilha","Fortaleza","Fortim","Frecheirinha","General Sampaio","Graça","Granja","Granjeiro","Groaíras","Guaiúba","Guaraciaba do Norte","Guaramiranga","Hidrolândia","Horizonte","Ibaretama","Ibiapina","Ibicuitinga","Icapuí","Icó","Iguatu","Independência","Ipaporanga","Ipaumirim","Ipu","Ipueiras","Iracema","Irauçuba","Itaiçaba","Itaitinga","Itapagé","Itapipoca","Itapiúna","Itarema","Itatira","Jaguaretama","Jaguaribara","Jaguaribe","Jaguaruana","Jardim","Jati","Jijoca de Jericoaroara","Juazeiro do Norte","Jucás","Lavras da Mangabeira","Limoeiro do Norte","Madalena","Maracanaú","Maranguape","Marco","Martinópole","Massapê","Mauriti","Meruoca","Milagres","Milhã","Miraíma","Missão Velha","Mombaça","Monsenhor Tabosa","Morada Nova","Moraújo","Morrinhos","Mucambo","Mulungu","Nova Olinda","Nova Russas","Novo Oriente","Ocara","Orós","Pacajus","Pacatuba","Pacoti","Pacujá","Palhano","Palmácia","Paracuru","Paraipaba","Parambu","Paramoti","Pedra Branca","Penaforte","Pentecoste","Pereiro","Pindoretama","Piquet Carneiro","Pires Ferreira","Poranga","Porteiras","Potengi","Potiretama","Quiterianópolis","Quixadá","Quixelô","Quixeramobim","Quixeré","Redenção","Reriutaba","Russas","Saboeiro","Salitre","Santa Quitéria","Santana do Acaraú","Santana do Cariri","São Benedito","São Gonçalo do Amarante","São João do Jaguaribe","São Luís do Curu","Senador Pompeu","Senador Sá","Sobral","Solonópole","Tabuleiro do Norte","Tamboril","Tarrafas","Tauá","Tejuçuoca","Tianguá","Trairi","Tururu","Ubajara","Umari","Umirim","Uruburetama","Uruoca","Varjota","Várzea Alegre","Viçosa do Ceará"]},{"uf":"DF","name":"Distrito Federal","cities":["Brasília","Águas Claras","Brasília","Ceilândia","Gama","Guará","Plano Piloto","Planaltina","Recanto das Emas","Samambaia","Santa Maria","Taguatinga"]},{"uf":"ES","name":"Espírito Santo","cities":["Afonso Cláudio","Água Doce do Norte","Águia Branca","Alegre","Alfredo Chaves","Alto Rio Novo","Anchieta","Apiacá","Aracruz","Atilio Vivacqua","Baixo Guandu","Barra de São Francisco","Boa Esperança","Bom Jesus do Norte","Brejetuba","Cachoeiro de Itapemirim","Cariacica","Castelo","Colatina","Conceição da Barra","Conceição do Castelo","Divino de São Lourenço","Domingos Martins","Dores do Rio Preto","Ecoporanga","Fundão","Governador Lindenberg","Guaçuí","Guarapari","Ibatiba","Ibiraçu","Ibitirama","Iconha","Irupi","Itaguaçu","Itapemirim","Itarana","Iúna","Jaguaré","Jerônimo Monteiro","João Neiva","Laranja da Terra","Linhares","Mantenópolis","Marataizes","Marechal Floriano","Marilândia","Mimoso do Sul","Montanha","Mucurici","Muniz Freire","Muqui","Nova Venécia","Pancas","Pedro Canário","Pinheiros","Piúma","Ponto Belo","Presidente Kennedy","Rio Bananal","Rio Novo do Sul","Santa Leopoldina","Santa Maria de Jetibá","Santa Teresa","São Domingos do Norte","São Gabriel da Palha","São José do Calçado","São Mateus","São Roque do Canaã","Serra","Sooretama","Vargem Alta","Venda Nova do Imigrante","Viana","Vila Pavão","Vila Valério","Vila Velha","Vitória"]},{"uf":"GO","name":"Goiás","cities":["Abadia de Goiás","Abadiânia","Acreúna","Adelândia","Água Fria de Goiás","Água Limpa","Águas Lindas de Goiás","Alexânia","Aloândia","Alto Horizonte","Alto Paraíso de Goiás","Alvorada do Norte","Amaralina","Americano do Brasil","Amorinópolis","Anápolis","Anhanguera","Anicuns","Aparecida de Goiânia","Aparecida do Rio Doce","Aporé","Araçu","Aragarças","Aragoiânia","Araguapaz","Arenópolis","Aruanã","Aurilândia","Avelinópolis","Baliza","Barro Alto","Bela Vista de Goiás","Bom Jardim de Goiás","Bom Jesus de Goiás","Bonfinópolis","Bonópolis","Brazabrantes","Britânia","Buriti Alegre","Buriti de Goiás","Buritinópolis","Cabeceiras","Cachoeira Alta","Cachoeira de Goiás","Cachoeira Dourada","Caçu","Caiapônia","Caldas Novas","Caldazinha","Campestre de Goiás","Campinaçu","Campinorte","Campo Alegre de Goiás","Campos Limpo de Goiás","Campos Belos","Campos Verdes","Carmo do Rio Verde","Castelândia","Catalão","Caturaí","Cavalcante","Ceres","Cezarina","Chapadão do Céu","Cidade Ocidental","Cocalzinho de Goiás","Colinas do Sul","Córrego do Ouro","Corumbá de Goiás","Corumbaíba","Cristalina","Cristianópolis","Crixás","Cromínia","Cumari","Damianópolis","Damolândia","Davinópolis","Diorama","Divinópolis de Goiás","Doverlândia","Edealina","Edéia","Estrela do Norte","Faina","Fazenda Nova","Firminópolis","Flores de Goiás","Formosa","Formoso","Gameleira de Goiás","Goianápolis","Goiandira","Goianésia","Goiânia","Goianira","Goiás","Goiatuba","Gouvelândia","Guapó","Guaraíta","Guarani de Goiás","Guarinos","Heitoraí","Hidrolândia","Hidrolina","Iaciara","Inaciolândia","Indiara","Inhumas","Ipameri","Ipiranga de Goiás","Iporá","Israelândia","Itaberaí","Itaguari","Itaguaru","Itajá","Itapaci","Itapirapuã","Itapuranga","Itarumã","Itauçu","Itumbiara","Ivolândia","Jandaia","Jaraguá","Jataí","Jaupaci","Jesúpolis","Joviânia","Jussara","Lagoa Santa","Leopoldo de Bulhões","Luziânia","Mairipotaba","Mambaí","Mara Rosa","Marzagão","Matrinchã","Maurilândia","Mimoso de Goiás","Minaçu","Mineiros","Moiporá","Monte Alegre de Goiás","Montes Claros de Goiás","Montividiu","Montividiu do Norte","Morrinhos","Morro Agudo de Goiás","Mossâmedes","Mozarlândia","Mundo Novo","Mutunópolis","Nazário","Nerópolis","Niquelândia","Nova América","Nova Aurora","Nova Crixás","Nova Glória","Nova Iguaçu de Goiás","Nova Roma","Nova Veneza","Novo Brasil","Novo Gama","Novo Planalto","Orizona","Ouro Verde de Goiás","Ouvidor","Padre Bernardo","Palestina de Goiás","Palmeiras de Goiás","Palmelo","Palminópolis","Panamá","Paranaiguara","Paraúna","Perolândia","Petrolina de Goiás","Pilar de Goiás","Piracanjuba","Piranhas","Pirenópolis","Pires do Rio","Planaltina","Pontalina","Porangatu","Porteirão","Portelândia","Posse","Professor Jamil","Quirinópolis","Rialma","Rianápolis","Rio Quente","Rio Verde","Rubiataba","Sanclerlândia","Santa Bárbara de Goiás","Santa Cruz de Goiás","Santa Fé de Goiás","Santa Helena de Goiás","Santa Isabel","Santa Rita do Araguaia","Santa Rita do Novo Destino","Santa Rosa de Goiás","Santa Tereza de Goiás","Santa Terezinha de Goiás","Santo Antônio da Barra","Santo Antônio de Goiás","Santo Antônio do Descoberto","São Domingos","São Francisco de Goiás","São João d'Aliança","São João da Paraúna","São Luís de Montes Belos","São Luíz do Norte","São Miguel do Araguaia","São Miguel do Passa Quatro","São Patrício","São Simão","Senador Canedo","Serranópolis","Silvânia","Simolândia","Sítio d'Abadia","Taquaral de Goiás","Teresina de Goiás","Terezópolis de Goiás","Três Ranchos","Trindade","Trombas","Turvânia","Turvelândia","Uirapuru","Uruaçu","Uruana","Urutaí","Valparaíso de Goiás","Varjão","Vianópolis","Vicentinópolis","Vila Boa","Vila Propício"]},{"uf":"MA","name":"Maranhão","cities":["Açailândia","Afonso Cunha","Água Doce do Maranhão","Alcântara","Aldeias Altas","Altamira do Maranhão","Alto Alegre do Maranhão","Alto Alegre do Pindaré","Alto Parnaíba","Amapá do Maranhão","Amarante do Maranhão","Anajatuba","Anapurus","Apicum-Açu","Araguanã","Araioses","Arame","Arari","Axixá","Bacabal","Bacabeira","Bacuri","Bacurituba","Balsas","Barão de Grajaú","Barra do Corda","Barreirinhas","Bela Vista do Maranhão","Belágua","Benedito Leite","Bequimão","Bernardo do Mearim","Boa Vista do Gurupi","Bom Jardim","Bom Jesus das Selvas","Bom Lugar","Brejo","Brejo de Areia","Buriti","Buriti Bravo","Buriticupu","Buritirana","Cachoeira Grande","Cajapió","Cajari","Campestre do Maranhão","Cândido Mendes","Cantanhede","Capinzal do Norte","Carolina","Carutapera","Caxias","Cedral","Central do Maranhão","Centro do Guilherme","Centro Novo do Maranhão","Chapadinha","Cidelândia","Codó","Coelho Neto","Colinas","Conceição do Lago-Açu","Coroatá","Cururupu","Davinópolis","Dom Pedro","Duque Bacelar","Esperantinópolis","Estreito","Feira Nova do Maranhão","Fernando Falcão","Formosa da Serra Negra","Fortaleza dos Nogueiras","Fortuna","Godofredo Viana","Gonçalves Dias","Governador Archer","Governador Edison Lobão","Governador Eugênio Barros","Governador Luiz Rocha","Governador Newton Bello","Governador Nunes Freire","Graça Aranha","Grajaú","Guimarães","Humberto de Campos","Icatu","Igarapé do Meio","Igarapé Grande","Imperatriz","Itaipava do Grajaú","Itapecuru Mirim","Itinga do Maranhão","Jatobá","Jenipapo dos Vieiras","João Lisboa","Joselândia","Junco do Maranhão","Lago da Pedra","Lago do Junco","Lago dos Rodrigues","Lago Verde","Lagoa do Mato","Lagoa Grande do Maranhão","Lajeado Novo","Lima Campos","Loreto","Luís Domingues","Magalhães de Almeida","Maracaçumé","Marajá do Sena","Maranhãozinho","Mata Roma","Matinha","Matões","Matões do Norte","Milagres do Maranhão","Mirador","Miranda do Norte","Mirinzal","Monção","Montes Altos","Morros","Nina Rodrigues","Nova Colinas","Nova Iorque","Nova Olinda do Maranhão","Olho d'Água das Cunhãs","Olinda Nova do Maranhão","Paço do Lumiar","Palmeirândia","Paraibano","Parnarama","Passagem Franca","Pastos Bons","Paulino Neves","Paulo Ramos","Pedreiras","Pedro do Rosário","Penalva","Peri Mirim","Peritoró","Pindaré Mirim","Pinheiro","Pio XII","Pirapemas","Poção de Pedras","Porto Franco","Porto Rico do Maranhão","Presidente Dutra","Presidente Juscelino","Presidente Médici","Presidente Sarney","Presidente Vargas","Primeira Cruz","Raposa","Riachão","Ribamar Fiquene","Rosário","Sambaíba","Santa Filomena do Maranhão","Santa Helena","Santa Inês","Santa Luzia","Santa Luzia do Paruá","Santa Quitéria do Maranhão","Santa Rita","Santana do Maranhão","Santo Amaro do Maranhão","Santo Antônio dos Lopes","São Benedito do Rio Preto","São Bento","São Bernardo","São Domingos do Azeitão","São Domingos do Maranhão","São Félix de Balsas","São Francisco do Brejão","São Francisco do Maranhão","São João Batista","São João do Carú","São João do Paraíso","São João do Soter","São João dos Patos","São José de Ribamar","São José dos Basílios","São Luís","São Luís Gonzaga do Maranhão","São Mateus do Maranhão","São Pedro da Água Branca","São Pedro dos Crentes","São Raimundo das Mangabeiras","São Raimundo do Doca Bezerra","São Roberto","São Vicente Ferrer","Satubinha","Senador Alexandre Costa","Senador La Rocque","Serrano do Maranhão","Sítio Novo","Sucupira do Norte","Sucupira do Riachão","Tasso Fragoso","Timbiras","Timon","Trizidela do Vale","Tufilândia","Tuntum","Turiaçu","Turilândia","Tutóia","Urbano Santos","Vargem Grande","Viana","Vila Nova dos Martírios","Vitória do Mearim","Vitorino Freire","Zé Doca"]},{"uf":"MG","name":"Minas Gerais","cities":["Abadia dos Dourados","Abaeté","Abre Campo","Acaiaca","Açucena","Água Boa","Água Comprida","Aguanil","Águas Formosas","Águas Vermelhas","Aimorés","Aiuruoca","Alagoa","Albertina","Além Paraíba","Alfenas","Alfredo Vasconcelos","Almenara","Alpercata","Alpinópolis","Alterosa","Alto Caparaó","Alto Jequitibá","Alto Rio Doce","Alvarenga","Alvinópolis","Alvorada de Minas","Amparo do Serra","Andradas","Andrelândia","Angelândia","Antônio Carlos","Antônio Dias","Antônio Prado de Minas","Araçaí","Aracitaba","Araçuaí","Araguari","Arantina","Araponga","Araporã","Arapuá","Araújos","Araxá","Arceburgo","Arcos","Areado","Argirita","Aricanduva","Arinos","Astolfo Dutra","Ataléia","Augusto de Lima","Baependi","Baldim","Bambuí","Bandeira","Bandeira do Sul","Barão de Cocais","Barão de Monte Alto","Barbacena","Barra Longa","Barroso","Bela Vista de Minas","Belmiro Braga","Belo Horizonte","Belo Oriente","Belo Vale","Berilo","Berizal","Bertópolis","Betim","Bias Fortes","Bicas","Biquinhas","Boa Esperança","Bocaina de Minas","Bocaiúva","Bom Despacho","Bom Jardim de Minas","Bom Jesus da Penha","Bom Jesus do Amparo","Bom Jesus do Galho","Bom Repouso","Bom Sucesso","Bonfim","Bonfinópolis de Minas","Bonito de Minas","Borda da Mata","Botelhos","Botumirim","Brás Pires","Brasilândia de Minas","Brasília de Minas","Brasópolis","Braúnas","Brumadinho","Bueno Brandão","Buenópolis","Bugre","Buritis","Buritizeiro","Cabeceira Grande","Cabo Verde","Cachoeira da Prata","Cachoeira de Minas","Cachoeira de Pajeú","Cachoeira Dourada","Caetanópolis","Caeté","Caiana","Cajuri","Caldas","Camacho","Camanducaia","Cambuí","Cambuquira","Campanário","Campanha","Campestre","Campina Verde","Campo Azul","Campo Belo","Campo do Meio","Campo Florido","Campos Altos","Campos Gerais","Cana Verde","Canaã","Canápolis","Candeias","Cantagalo","Caparaó","Capela Nova","Capelinha","Capetinga","Capim Branco","Capinópolis","Capitão Andrade","Capitão Enéas","Capitólio","Caputira","Caraí","Caranaíba","Carandaí","Carangola","Caratinga","Carbonita","Careaçu","Carlos Chagas","Carmésia","Carmo da Cachoeira","Carmo da Mata","Carmo de Minas","Carmo do Cajuru","Carmo do Paranaíba","Carmo do Rio Claro","Carmópolis de Minas","Carneirinho","Carrancas","Carvalhópolis","Carvalhos","Casa Grande","Cascalho Rico","Cássia","Cataguases","Catas Altas","Catas Altas da Noruega","Catuji","Catuti","Caxambu","Cedro do Abaeté","Central de Minas","Centralina","Chácara","Chalé","Chapada do Norte","Chapada Gaúcha","Chiador","Cipotânea","Claraval","Claro dos Poções","Cláudio","Coimbra","Coluna","Comendador Gomes","Comercinho","Conceição da Aparecida","Conceição da Barra de Minas","Conceição das Alagoas","Conceição das Pedras","Conceição de Ipanema","Conceição do Mato Dentro","Conceição do Pará","Conceição do Rio Verde","Conceição dos Ouros","Cônego Marinho","Confins","Congonhal","Congonhas","Congonhas do Norte","Conquista","Conselheiro Lafaiete","Conselheiro Pena","Consolação","Contagem","Coqueiral","Coração de Jesus","Cordisburgo","Cordislândia","Corinto","Coroaci","Coromandel","Coronel Fabriciano","Coronel Murta","Coronel Pacheco","Coronel Xavier Chaves","Córrego Danta","Córrego do Bom Jesus","Córrego Fundo","Córrego Novo","Couto de Magalhães de Minas","Crisólita","Cristais","Cristália","Cristiano Otoni","Cristina","Crucilândia","Cruzeiro da Fortaleza","Cruzília","Cuparaque","Curral de Dentro","Curvelo","Datas","Delfim Moreira","Delfinópolis","Delta","Descoberto","Desterro de Entre Rios","Desterro do Melo","Diamantina","Diogo de Vasconcelos","Dionísio","Divinésia","Divino","Divino das Laranjeiras","Divinolândia de Minas","Divinópolis","Divisa Alegre","Divisa Nova","Divisópolis","Dom Bosco","Dom Cavati","Dom Joaquim","Dom Silvério","Dom Viçoso","Dona Euzébia","Dores de Campos","Dores de Guanhães","Dores do Indaiá","Dores do Turvo","Doresópolis","Douradoquara","Durandé","Elói Mendes","Engenheiro Caldas","Engenheiro Navarro","Entre Folhas","Entre Rios de Minas","Ervália","Esmeraldas","Espera Feliz","Espinosa","Espírito Santo do Dourado","Estiva","Estrela Dalva","Estrela do Indaiá","Estrela do Sul","Eugenópolis","Ewbank da Câmara","Extrema","Fama","Faria Lemos","Felício dos Santos","Felisburgo","Felixlândia","Fernandes Tourinho","Ferros","Fervedouro","Florestal","Formiga","Formoso","Fortaleza de Minas","Fortuna de Minas","Francisco Badaró","Francisco Dumont","Francisco Sá","Franciscópolis","Frei Gaspar","Frei Inocêncio","Frei Lagonegro","Fronteira","Fronteira dos Vales","Fruta de Leite","Frutal","Funilândia","Galiléia","Gameleiras","Glaucilândia","Goiabeira","Goianá","Gonçalves","Gonzaga","Gouveia","Governador Valadares","Grão Mogol","Grupiara","Guanhães","Guapé","Guaraciaba","Guaraciama","Guaranésia","Guarani","Guarará","Guarda-Mor","Guaxupé","Guidoval","Guimarânia","Guiricema","Gurinhatã","Heliodora","Iapu","Ibertioga","Ibiá","Ibiaí","Ibiracatu","Ibiraci","Ibirité","Ibitiúra de Minas","Ibituruna","Icaraí de Minas","Igarapé","Igaratinga","Iguatama","Ijaci","Ilicínea","Imbé de Minas","Inconfidentes","Indaiabira","Indianópolis","Ingaí","Inhapim","Inhaúma","Inimutaba","Ipaba","Ipanema","Ipatinga","Ipiaçu","Ipuiúna","Iraí de Minas","Itabira","Itabirinha de Mantena","Itabirito","Itacambira","Itacarambi","Itaguara","Itaipé","Itajubá","Itamarandiba","Itamarati de Minas","Itambacuri","Itambé do Mato Dentro","Itamogi","Itamonte","Itanhandu","Itanhomi","Itaobim","Itapagipe","Itapecerica","Itapeva","Itatiaiuçu","Itaú de Minas","Itaúna","Itaverava","Itinga","Itueta","Ituiutaba","Itumirim","Iturama","Itutinga","Jaboticatubas","Jacinto","Jacuí","Jacutinga","Jaguaraçu","Jaíba","Jampruca","Janaúba","Januária","Japaraíba","Japonvar","Jeceaba","Jenipapo de Minas","Jequeri","Jequitaí","Jequitibá","Jequitinhonha","Jesuânia","Joaíma","Joanésia","João Monlevade","João Pinheiro","Joaquim Felício","Jordânia","José Gonçalves de Minas","José Raydan","Josenópolis","Juatuba","Juiz de Fora","Juramento","Juruaia","Juvenília","Ladainha","Lagamar","Lagoa da Prata","Lagoa dos Patos","Lagoa Dourada","Lagoa Formosa","Lagoa Grande","Lagoa Santa","Lajinha","Lambari","Lamim","Laranjal","Lassance","Lavras","Leandro Ferreira","Leme do Prado","Leopoldina","Liberdade","Lima Duarte","Limeira do Oeste","Lontra","Luisburgo","Luislândia","Luminárias","Luz","Machacalis","Machado","Madre de Deus de Minas","Malacacheta","Mamonas","Manga","Manhuaçu","Manhumirim","Mantena","Mar de Espanha","Maravilhas","Maria da Fé","Mariana","Marilac","Mário Campos","Maripá de Minas","Marliéria","Marmelópolis","Martinho Campos","Martins Soares","Mata Verde","Materlândia","Mateus Leme","Mathias Lobato","Matias Barbosa","Matias Cardoso","Matipó","Mato Verde","Matozinhos","Matutina","Medeiros","Medina","Mendes Pimentel","Mercês","Mesquita","Minas Novas","Minduri","Mirabela","Miradouro","Miraí","Miravânia","Moeda","Moema","Monjolos","Monsenhor Paulo","Montalvânia","Monte Alegre de Minas","Monte Azul","Monte Belo","Monte Carmelo","Monte Formoso","Monte Santo de Minas","Monte Sião","Montes Claros","Montezuma","Morada Nova de Minas","Morro da Garça","Morro do Pilar","Munhoz","Muriaé","Mutum","Muzambinho","Nacip Raydan","Nanuque","Naque","Natalândia","Natércia","Nazareno","Nepomuceno","Ninheira","Nova Belém","Nova Era","Nova Lima","Nova Módica","Nova Ponte","Nova Porteirinha","Nova Resende","Nova Serrana","Nova União","Novo Cruzeiro","Novo Oriente de Minas","Novorizonte","Olaria","Olhos-d'Água","Olímpio Noronha","Oliveira","Oliveira Fortes","Onça de Pitangui","Oratórios","Orizânia","Ouro Branco","Ouro Fino","Ouro Preto","Ouro Verde de Minas","Padre Carvalho","Padre Paraíso","Pai Pedro","Paineiras","Pains","Paiva","Palma","Palmópolis","Papagaios","Pará de Minas","Paracatu","Paraguaçu","Paraisópolis","Paraopeba","Passa Quatro","Passa Tempo","Passa-Vinte","Passabém","Passos","Patis","Patos de Minas","Patrocínio","Patrocínio do Muriaé","Paula Cândido","Paulistas","Pavão","Peçanha","Pedra Azul","Pedra Bonita","Pedra do Anta","Pedra do Indaiá","Pedra Dourada","Pedralva","Pedras de Maria da Cruz","Pedrinópolis","Pedro Leopoldo","Pedro Teixeira","Pequeri","Pequi","Perdigão","Perdizes","Perdões","Periquito","Pescador","Piau","Piedade de Caratinga","Piedade de Ponte Nova","Piedade do Rio Grande","Piedade dos Gerais","Pimenta","Pingo-d'Água","Pintópolis","Piracema","Pirajuba","Piranga","Piranguçu","Piranguinho","Pirapetinga","Pirapora","Piraúba","Pitangui","Piumhi","Planura","Poço Fundo","Poços de Caldas","Pocrane","Pompéu","Ponte Nova","Ponto Chique","Ponto dos Volantes","Porteirinha","Porto Firme","Poté","Pouso Alegre","Pouso Alto","Prados","Prata","Pratápolis","Pratinha","Presidente Bernardes","Presidente Juscelino","Presidente Kubitschek","Presidente Olegário","Prudente de Morais","Quartel Geral","Queluzito","Raposos","Raul Soares","Recreio","Reduto","Resende Costa","Resplendor","Ressaquinha","Riachinho","Riacho dos Machados","Ribeirão das Neves","Ribeirão Vermelho","Rio Acima","Rio Casca","Rio do Prado","Rio Doce","Rio Espera","Rio Manso","Rio Novo","Rio Paranaíba","Rio Pardo de Minas","Rio Piracicaba","Rio Pomba","Rio Preto","Rio Vermelho","Ritápolis","Rochedo de Minas","Rodeiro","Romaria","Rosário da Limeira","Rubelita","Rubim","Sabará","Sabinópolis","Sacramento","Salinas","Salto da Divisa","Santa Bárbara","Santa Bárbara do Leste","Santa Bárbara do Monte Verde","Santa Bárbara do Tugúrio","Santa Cruz de Minas","Santa Cruz de Salinas","Santa Cruz do Escalvado","Santa Efigênia de Minas","Santa Fé de Minas","Santa Helena de Minas","Santa Juliana","Santa Luzia","Santa Margarida","Santa Maria de Itabira","Santa Maria do Salto","Santa Maria do Suaçuí","Santa Rita de Caldas","Santa Rita de Ibitipoca","Santa Rita de Jacutinga","Santa Rita de Minas","Santa Rita do Itueto","Santa Rita do Sapucaí","Santa Rosa da Serra","Santa Vitória","Santana da Vargem","Santana de Cataguases","Santana de Pirapama","Santana do Deserto","Santana do Garambéu","Santana do Jacaré","Santana do Manhuaçu","Santana do Paraíso","Santana do Riacho","Santana dos Montes","Santo Antônio do Amparo","Santo Antônio do Aventureiro","Santo Antônio do Grama","Santo Antônio do Itambé","Santo Antônio do Jacinto","Santo Antônio do Monte","Santo Antônio do Retiro","Santo Antônio do Rio Abaixo","Santo Hipólito","Santos Dumont","São Bento Abade","São Brás do Suaçuí","São Domingos das Dores","São Domingos do Prata","São Félix de Minas","São Francisco","São Francisco de Paula","São Francisco de Sales","São Francisco do Glória","São Geraldo","São Geraldo da Piedade","São Geraldo do Baixio","São Gonçalo do Abaeté","São Gonçalo do Pará","São Gonçalo do Rio Abaixo","São Gonçalo do Rio Preto","São Gonçalo do Sapucaí","São Gotardo","São João Batista do Glória","São João da Lagoa","São João da Mata","São João da Ponte","São João das Missões","São João del Rei","São João do Manhuaçu","São João do Manteninha","São João do Oriente","São João do Pacuí","São João do Paraíso","São João Evangelista","São João Nepomuceno","São Joaquim de Bicas","São José da Barra","São José da Lapa","São José da Safira","São José da Varginha","São José do Alegre","São José do Divino","São José do Goiabal","São José do Jacuri","São José do Mantimento","São Lourenço","São Miguel do Anta","São Pedro da União","São Pedro do Suaçuí","São Pedro dos Ferros","São Romão","São Roque de Minas","São Sebastião da Bela Vista","São Sebastião da Vargem Alegre","São Sebastião do Anta","São Sebastião do Maranhão","São Sebastião do Oeste","São Sebastião do Paraíso","São Sebastião do Rio Preto","São Sebastião do Rio Verde","São Thomé das Letras","São Tiago","São Tomás de Aquino","São Vicente de Minas","Sapucaí-Mirim","Sardoá","Sarzedo","Sem-Peixe","Senador Amaral","Senador Cortes","Senador Firmino","Senador José Bento","Senador Modestino Gonçalves","Senhora de Oliveira","Senhora do Porto","Senhora dos Remédios","Sericita","Seritinga","Serra Azul de Minas","Serra da Saudade","Serra do Salitre","Serra dos Aimorés","Serrania","Serranópolis de Minas","Serranos","Serro","Sete Lagoas","Setubinha","Silveirânia","Silvianópolis","Simão Pereira","Simonésia","Sobrália","Soledade de Minas","Tabuleiro","Taiobeiras","Taparuba","Tapira","Tapiraí","Taquaraçu de Minas","Tarumirim","Teixeiras","Teófilo Otoni","Timóteo","Tiradentes","Tiros","Tocantins","Tocos do Moji","Toledo","Tombos","Três Corações","Três Marias","Três Pontas","Tumiritinga","Tupaciguara","Turmalina","Turvolândia","Ubá","Ubaí","Ubaporanga","Uberaba","Uberlândia","Umburatiba","Unaí","União de Minas","Uruana de Minas","Urucânia","Urucuia","Vargem Alegre","Vargem Bonita","Vargem Grande do Rio Pardo","Varginha","Varjão de Minas","Várzea da Palma","Varzelândia","Vazante","Verdelândia","Veredinha","Veríssimo","Vermelho Novo","Vespasiano","Viçosa","Vieiras","Virgem da Lapa","Virgínia","Virginópolis","Virgolândia","Visconde do Rio Branco","Volta Grande","Wenceslau Braz"]},{"uf":"MS","name":"Mato Grosso do Sul","cities":["Água Clara","Alcinópolis","Amambaí","Anastácio","Anaurilândia","Angélica","Antônio João","Aparecida do Taboado","Aquidauana","Aral Moreira","Bandeirantes","Bataguassu","Bataiporã","Bela Vista","Bodoquena","Bonito","Brasilândia","Caarapó","Camapuã","Campo Grande","Caracol","Cassilândia","Chapadão do Sul","Corguinho","Coronel Sapucaia","Corumbá","Costa Rica","Coxim","Deodápolis","Dois Irmãos do Buriti","Douradina","Dourados","Eldorado","Fátima do Sul","Glória de Dourados","Guia Lopes da Laguna","Iguatemi","Inocência","Itaporã","Itaquiraí","Ivinhema","Japorã","Jaraguari","Jardim","Jateí","Juti","Ladário","Laguna Carapã","Maracaju","Miranda","Mundo Novo","Naviraí","Nioaque","Nova Alvorada do Sul","Nova Andradina","Novo Horizonte do Sul","Paranaíba","Paranhos","Pedro Gomes","Ponta Porã","Porto Murtinho","Ribas do Rio Pardo","Rio Brilhante","Rio Negro","Rio Verde de Mato Grosso","Rochedo","Santa Rita do Pardo","São Gabriel do Oeste","Selvíria","Sete Quedas","Sidrolândia","Sonora","Tacuru","Taquarussu","Terenos","Três Lagoas","Vicentina"]},{"uf":"MT","name":"Mato Grosso","cities":["Acorizal","Água Boa","Alta Floresta","Alto Araguaia","Alto Boa Vista","Alto Garças","Alto Paraguai","Alto Taquari","Apiacás","Araguaiana","Araguainha","Araputanga","Arenápolis","Aripuanã","Barão de Melgaço","Barra do Bugres","Barra do Garças","Bom Jesus do Araguaia","Brasnorte","Cáceres","Campinápolis","Campo Novo do Parecis","Campo Verde","Campos de Júlio","Canabrava do Norte","Canarana","Carlinda","Castanheira","Chapada dos Guimarães","Cláudia","Cocalinho","Colíder","Colniza","Comodoro","Confresa","Conquista d'Oeste","Cotriguaçu","Curvelândia","Cuiabá","Denise","Diamantino","Dom Aquino","Feliz Natal","Figueirópolis d'Oeste","Gaúcha do Norte","General Carneiro","Glória d'Oeste","Guarantã do Norte","Guiratinga","Indiavaí","Itaúba","Itiquira","Jaciara","Jangada","Jauru","Juara","Juína","Juruena","Juscimeira","Lambari d'Oeste","Lucas do Rio Verde","Luciára","Marcelândia","Matupá","Mirassol d'Oeste","Nobres","Nortelândia","Nossa Senhora do Livramento","Nova Bandeirantes","Nova Brasilândia","Nova Canãa do Norte","Nova Guarita","Nova Lacerda","Nova Marilândia","Nova Maringá","Nova Monte Verde","Nova Mutum","Nova Nazaré","Nova Olímpia","Nova Santa Helena","Nova Ubiratã","Nova Xavantina","Novo Horizonte do Norte","Novo Mundo","Novo Santo Antônio","Novo São Joaquim","Paranaíta","Paranatinga","Pedra Preta","Peixoto de Azevedo","Planalto da Serra","Poconé","Pontal do Araguaia","Ponte Branca","Pontes e Lacerda","Porto Alegre do Norte","Porto dos Gaúchos","Porto Esperidião","Porto Estrela","Poxoréo","Primavera do Leste","Querência","Reserva do Cabaçal","Ribeirão Cascalheira","Ribeirãozinho","Rio Branco","Rondolândia","Rondonópolis","Rosário Oeste","Salto do Céu","Santa Carmem","Santa Cruz do Xingu","Santa Rita do Trivelato","Santa Terezinha","Santo Afonso","Santo Antônio do Leste","Santo Antônio do Leverger","São Félix do Araguaia","São José do Povo","São José do Rio Claro","São José do Xingu","São José dos Quatro Marcos","São Pedro da Cipa","Sapezal","Serra Nova Dourada","Sinop","Sorriso","Tabaporã","Tangará da Serra","Tapurah","Terra Nova do Norte","Tesouro","Torixoréu","União do Sul","Vale de São Domingos","Várzea Grande","Vera","Vila Bela da Santíssima Trindade","Vila Rica"]},{"uf":"PA","name":"Pará","cities":["Abaetetuba","Abel Figueiredo","Acará","Afuá","Água Azul do Norte","Alenquer","Almeirim","Altamira","Anajás","Ananindeua","Anapu","Augusto Corrêa","Aurora do Pará","Aveiro","Bagre","Baião","Bannach","Barcarena","Belém","Belterra","Benevides","Bom Jesus do Tocantins","Bonito","Bragança","Brasil Novo","Brejo Grande do Araguaia","Breu Branco","Breves","Bujaru","Cachoeira do Arari","Cachoeira do Piriá","Cametá","Canaã dos Carajás","Capanema","Capitão Poço","Castanhal","Chaves","Colares","Conceição do Araguaia","Concórdia do Pará","Cumaru do Norte","Curionópolis","Curralinho","Curuá","Curuçá","Dom Eliseu","Eldorado dos Carajás","Faro","Floresta do Araguaia","Garrafão do Norte","Goianésia do Pará","Gurupá","Igarapé-Açu","Igarapé-Miri","Inhangapi","Ipixuna do Pará","Irituia","Itaituba","Itupiranga","Jacareacanga","Jacundá","Juruti","Limoeiro do Ajuru","Mãe do Rio","Magalhães Barata","Marabá","Maracanã","Marapanim","Marituba","Medicilândia","Melgaço","Mocajuba","Moju","Monte Alegre","Muaná","Nova Esperança do Piriá","Nova Ipixuna","Nova Timboteua","Novo Progresso","Novo Repartimento","Óbidos","Oeiras do Pará","Oriximiná","Ourém","Ourilândia do Norte","Pacajá","Palestina do Pará","Paragominas","Parauapebas","Pau d'Arco","Peixe-Boi","Piçarra","Placas","Ponta de Pedras","Portel","Porto de Moz","Prainha","Primavera","Quatipuru","Redenção","Rio Maria","Rondon do Pará","Rurópolis","Salinópolis","Salvaterra","Santa Bárbara do Pará","Santa Cruz do Arari","Santa Isabel do Pará","Santa Luzia do Pará","Santa Maria das Barreiras","Santa Maria do Pará","Santana do Araguaia","Santarém","Santarém Novo","Santo Antônio do Tauá","São Caetano de Odivela","São Domingos do Araguaia","São Domingos do Capim","São Félix do Xingu","São Francisco do Pará","São Geraldo do Araguaia","São João da Ponta","São João de Pirabas","São João do Araguaia","São Miguel do Guamá","São Sebastião da Boa Vista","Sapucaia","Senador José Porfírio","Soure","Tailândia","Terra Alta","Terra Santa","Tomé-Açu","Tracuateua","Trairão","Tucumã","Tucuruí","Ulianópolis","Uruará","Vigia","Viseu","Vitória do Xingu","Xinguara"]},{"uf":"PB","name":"Paraíba","cities":["Água Branca","Aguiar","Alagoa Grande","Alagoa Nova","Alagoinha","Alcantil","Algodão de Jandaíra","Alhandra","Amparo","Aparecida","Araçagi","Arara","Araruna","Areia","Areia de Baraúnas","Areial","Aroeiras","Assunção","Baía da Traição","Bananeiras","Baraúna","Barra de Santa Rosa","Barra de Santana","Barra de São Miguel","Bayeux","Belém","Belém do Brejo do Cruz","Bernardino Batista","Boa Ventura","Boa Vista","Bom Jesus","Bom Sucesso","Bonito de Santa Fé","Boqueirão","Borborema","Brejo do Cruz","Brejo dos Santos","Caaporã","Cabaceiras","Cabedelo","Cachoeira dos Índios","Cacimba de Areia","Cacimba de Dentro","Cacimbas","Caiçara","Cajazeiras","Cajazeirinhas","Caldas Brandão","Camalaú","Campina Grande","Campo de Santana","Capim","Caraúbas","Carrapateira","Casserengue","Catingueira","Catolé do Rocha","Caturité","Conceição","Condado","Conde","Congo","Coremas","Coxixola","Cruz do Espírito Santo","Cubati","Cuité","Cuité de Mamanguape","Cuitegi","Curral de Cima","Curral Velho","Damião","Desterro","Diamante","Dona Inês","Duas Estradas","Emas","Esperança","Fagundes","Frei Martinho","Gado Bravo","Guarabira","Gurinhém","Gurjão","Ibiara","Igaracy","Imaculada","Ingá","Itabaiana","Itaporanga","Itapororoca","Itatuba","Jacaraú","Jericó","João Pessoa","Juarez Távora","Juazeirinho","Junco do Seridó","Juripiranga","Juru","Lagoa","Lagoa de Dentro","Lagoa Seca","Lastro","Livramento","Logradouro","Lucena","Mãe d'Água","Malta","Mamanguape","Manaíra","Marcação","Mari","Marizópolis","Massaranduba","Mataraca","Matinhas","Mato Grosso","Maturéia","Mogeiro","Montadas","Monte Horebe","Monteiro","Mulungu","Natuba","Nazarezinho","Nova Floresta","Nova Olinda","Nova Palmeira","Olho d'Água","Olivedos","Ouro Velho","Parari","Passagem","Patos","Paulista","Pedra Branca","Pedra Lavrada","Pedras de Fogo","Pedro Régis","Piancó","Picuí","Pilar","Pilões","Pilõezinhos","Pirpirituba","Pitimbu","Pocinhos","Poço Dantas","Poço de José de Moura","Pombal","Prata","Princesa Isabel","Puxinanã","Queimadas","Quixabá","Remígio","Riachão","Riachão do Bacamarte","Riachão do Poço","Riacho de Santo Antônio","Riacho dos Cavalos","Rio Tinto","Salgadinho","Salgado de São Félix","Santa Cecília","Santa Cruz","Santa Helena","Santa Inês","Santa Luzia","Santa Rita","Santa Teresinha","Santana de Mangueira","Santana dos Garrotes","Santarém","Santo André","São Bentinho","São Bento","São Domingos de Pombal","São Domingos do Cariri","São Francisco","São João do Cariri","São João do Rio do Peixe","São João do Tigre","São José da Lagoa Tapada","São José de Caiana","São José de Espinharas","São José de Piranhas","São José de Princesa","São José do Bonfim","São José do Brejo do Cruz","São José do Sabugi","São José dos Cordeiros","São José dos Ramos","São Mamede","São Miguel de Taipu","São Sebastião de Lagoa de Roça","São Sebastião do Umbuzeiro","Sapé","Seridó","Serra Branca","Serra da Raiz","Serra Grande","Serra Redonda","Serraria","Sertãozinho","Sobrado","Solânea","Soledade","Sossêgo","Sousa","Sumé","Taperoá","Tavares","Teixeira","Tenório","Triunfo","Uiraúna","Umbuzeiro","Várzea","Vieirópolis","Vista Serrana","Zabelê"]},{"uf":"PE","name":"Pernambuco","cities":["Abreu e Lima","Afogados da Ingazeira","Afrânio","Agrestina","Água Preta","Águas Belas","Alagoinha","Aliança","Altinho","Amaraji","Angelim","Araçoiaba","Araripina","Arcoverde","Barra de Guabiraba","Barreiros","Belém de Maria","Belém de São Francisco","Belo Jardim","Betânia","Bezerros","Bodocó","Bom Conselho","Bom Jardim","Bonito","Brejão","Brejinho","Brejo da Madre de Deus","Buenos Aires","Buíque","Cabo de Santo Agostinho","Cabrobó","Cachoeirinha","Caetés","Calçado","Calumbi","Camaragibe","Camocim de São Félix","Camutanga","Canhotinho","Capoeiras","Carnaíba","Carnaubeira da Penha","Carpina","Caruaru","Casinhas","Catende","Cedro","Chã de Alegria","Chã Grande","Condado","Correntes","Cortês","Cumaru","Cupira","Custódia","Dormentes","Escada","Exu","Feira Nova","Fernando de Noronha","Ferreiros","Flores","Floresta","Frei Miguelinho","Gameleira","Garanhuns","Glória do Goitá","Goiana","Granito","Gravatá","Iati","Ibimirim","Ibirajuba","Igarassu","Iguaraci","Inajá","Ingazeira","Ipojuca","Ipubi","Itacuruba","Itaíba","Itamaracá","Itambé","Itapetim","Itapissuma","Itaquitinga","Jaboatão dos Guararapes","Jaqueira","Jataúba","Jatobá","João Alfredo","Joaquim Nabuco","Jucati","Jupi","Jurema","Lagoa do Carro","Lagoa do Itaenga","Lagoa do Ouro","Lagoa dos Gatos","Lagoa Grande","Lajedo","Limoeiro","Macaparana","Machados","Manari","Maraial","Mirandiba","Moreilândia","Moreno","Nazaré da Mata","Olinda","Orobó","Orocó","Ouricuri","Palmares","Palmeirina","Panelas","Paranatama","Parnamirim","Passira","Paudalho","Paulista","Pedra","Pesqueira","Petrolândia","Petrolina","Poção","Pombos","Primavera","Quipapá","Quixaba","Recife","Riacho das Almas","Ribeirão","Rio Formoso","Sairé","Salgadinho","Salgueiro","Saloá","Sanharó","Santa Cruz","Santa Cruz da Baixa Verde","Santa Cruz do Capibaribe","Santa Filomena","Santa Maria da Boa Vista","Santa Maria do Cambucá","Santa Terezinha","São Benedito do Sul","São Bento do Una","São Caitano","São João","São Joaquim do Monte","São José da Coroa Grande","São José do Belmonte","São José do Egito","São Lourenço da Mata","São Vicente Ferrer","Serra Talhada","Serrita","Sertânia","Sirinhaém","Solidão","Surubim","Tabira","Tacaimbó","Tacaratu","Tamandaré","Taquaritinga do Norte","Terezinha","Terra Nova","Timbaúba","Toritama","Tracunhaém","Trindade","Triunfo","Tupanatinga","Tuparetama","Venturosa","Verdejante","Vertente do Lério","Vertentes","Vicência","Vitória de Santo Antão","Xexéu"]},{"uf":"PI","name":"Piauí","cities":["Acauã","Agricolândia","Água Branca","Alagoinha do Piauí","Alegrete do Piauí","Alto Longá","Altos","Alvorada do Gurguéia","Amarante","Angical do Piauí","Anísio de Abreu","Antônio Almeida","Aroazes","Arraial","Assunção do Piauí","Avelino Lopes","Baixa Grande do Ribeiro","Barra d'Alcântara","Barras","Barreiras do Piauí","Barro Duro","Batalha","Bela Vista do Piauí","Belém do Piauí","Beneditinos","Bertolínia","Betânia do Piauí","Boa Hora","Bocaina","Bom Jesus","Bom Princípio do Piauí","Bonfim do Piauí","Boqueirão do Piauí","Brasileira","Brejo do Piauí","Buriti dos Lopes","Buriti dos Montes","Cabeceiras do Piauí","Cajazeiras do Piauí","Cajueiro da Praia","Caldeirão Grande do Piauí","Campinas do Piauí","Campo Alegre do Fidalgo","Campo Grande do Piauí","Campo Largo do Piauí","Campo Maior","Canavieira","Canto do Buriti","Capitão de Campos","Capitão Gervásio Oliveira","Caracol","Caraúbas do Piauí","Caridade do Piauí","Castelo do Piauí","Caxingó","Cocal","Cocal de Telha","Cocal dos Alves","Coivaras","Colônia do Gurguéia","Colônia do Piauí","Conceição do Canindé","Coronel José Dias","Corrente","Cristalândia do Piauí","Cristino Castro","Curimatá","Currais","Curral Novo do Piauí","Curralinhos","Demerval Lobão","Dirceu Arcoverde","Dom Expedito Lopes","Dom Inocêncio","Domingos Mourão","Elesbão Veloso","Eliseu Martins","Esperantina","Fartura do Piauí","Flores do Piauí","Floresta do Piauí","Floriano","Francinópolis","Francisco Ayres","Francisco Macedo","Francisco Santos","Fronteiras","Geminiano","Gilbués","Guadalupe","Guaribas","Hugo Napoleão","Ilha Grande","Inhuma","Ipiranga do Piauí","Isaías Coelho","Itainópolis","Itaueira","Jacobina do Piauí","Jaicós","Jardim do Mulato","Jatobá do Piauí","Jerumenha","João Costa","Joaquim Pires","Joca Marques","José de Freitas","Juazeiro do Piauí","Júlio Borges","Jurema","Lagoa Alegre","Lagoa de São Francisco","Lagoa do Barro do Piauí","Lagoa do Piauí","Lagoa do Sítio","Lagoinha do Piauí","Landri Sales","Luís Correia","Luzilândia","Madeiro","Manoel Emídio","Marcolândia","Marcos Parente","Massapê do Piauí","Matias Olímpio","Miguel Alves","Miguel Leão","Milton Brandão","Monsenhor Gil","Monsenhor Hipólito","Monte Alegre do Piauí","Morro Cabeça no Tempo","Morro do Chapéu do Piauí","Murici dos Portelas","Nazaré do Piauí","Nossa Senhora de Nazaré","Nossa Senhora dos Remédios","Nova Santa Rita","Novo Oriente do Piauí","Novo Santo Antônio","Oeiras","Olho d'Água do Piauí","Padre Marcos","Paes Landim","Pajeú do Piauí","Palmeira do Piauí","Palmeirais","Paquetá","Parnaguá","Parnaíba","Passagem Franca do Piauí","Patos do Piauí","Pau d'Arco do Piauí","Paulistana","Pavussu","Pedro II","Pedro Laurentino","Picos","Pimenteiras","Pio IX","Piracuruca","Piripiri","Porto","Porto Alegre do Piauí","Prata do Piauí","Queimada Nova","Redenção do Gurguéia","Regeneração","Riacho Frio","Ribeira do Piauí","Ribeiro Gonçalves","Rio Grande do Piauí","Santa Cruz do Piauí","Santa Cruz dos Milagres","Santa Filomena","Santa Luz","Santa Rosa do Piauí","Santana do Piauí","Santo Antônio de Lisboa","Santo Antônio dos Milagres","Santo Inácio do Piauí","São Braz do Piauí","São Félix do Piauí","São Francisco de Assis do Piauí","São Francisco do Piauí","São Gonçalo do Gurguéia","São Gonçalo do Piauí","São João da Canabrava","São João da Fronteira","São João da Serra","São João da Varjota","São João do Arraial","São João do Piauí","São José do Divino","São José do Peixe","São José do Piauí","São Julião","São Lourenço do Piauí","São Luis do Piauí","São Miguel da Baixa Grande","São Miguel do Fidalgo","São Miguel do Tapuio","São Pedro do Piauí","São Raimundo Nonato","Sebastião Barros","Sebastião Leal","Sigefredo Pacheco","Simões","Simplício Mendes","Socorro do Piauí","Sussuapara","Tamboril do Piauí","Tanque do Piauí","Teresina","União","Uruçuí","Valença do Piauí","Várzea Branca","Várzea Grande","Vera Mendes","Vila Nova do Piauí","Wall Ferraz"]},{"uf":"PR","name":"Paraná","cities":["Abatiá","Adrianópolis","Agudos do Sul","Almirante Tamandaré","Altamira do Paraná","Alto Paraná","Alto Piquiri","Altônia","Alvorada do Sul","Amaporã","Ampére","Anahy","Andirá","Ângulo","Antonina","Antônio Olinto","Apucarana","Arapongas","Arapoti","Arapuã","Araruna","Araucária","Ariranha do Ivaí","Assaí","Assis Chateaubriand","Astorga","Atalaia","Balsa Nova","Bandeirantes","Barbosa Ferraz","Barra do Jacaré","Barracão","Bela Vista da Caroba","Bela Vista do Paraíso","Bituruna","Boa Esperança","Boa Esperança do Iguaçu","Boa Ventura de São Roque","Boa Vista da Aparecida","Bocaiúva do Sul","Bom Jesus do Sul","Bom Sucesso","Bom Sucesso do Sul","Borrazópolis","Braganey","Brasilândia do Sul","Cafeara","Cafelândia","Cafezal do Sul","Califórnia","Cambará","Cambé","Cambira","Campina da Lagoa","Campina do Simão","Campina Grande do Sul","Campo Bonito","Campo do Tenente","Campo Largo","Campo Magro","Campo Mourão","Cândido de Abreu","Candói","Cantagalo","Capanema","Capitão Leônidas Marques","Carambeí","Carlópolis","Cascavel","Castro","Catanduvas","Centenário do Sul","Cerro Azul","Céu Azul","Chopinzinho","Cianorte","Cidade Gaúcha","Clevelândia","Colombo","Colorado","Congonhinhas","Conselheiro Mairinck","Contenda","Corbélia","Cornélio Procópio","Coronel Domingos Soares","Coronel Vivida","Corumbataí do Sul","Cruz Machado","Cruzeiro do Iguaçu","Cruzeiro do Oeste","Cruzeiro do Sul","Cruzmaltina","Curitiba","Curiúva","Diamante d'Oeste","Diamante do Norte","Diamante do Sul","Dois Vizinhos","Douradina","Doutor Camargo","Doutor Ulysses","Enéas Marques","Engenheiro Beltrão","Entre Rios do Oeste","Esperança Nova","Espigão Alto do Iguaçu","Farol","Faxinal","Fazenda Rio Grande","Fênix","Fernandes Pinheiro","Figueira","Flor da Serra do Sul","Floraí","Floresta","Florestópolis","Flórida","Formosa do Oeste","Foz do Iguaçu","Foz do Jordão","Francisco Alves","Francisco Beltrão","General Carneiro","Godoy Moreira","Goioerê","Goioxim","Grandes Rios","Guaíra","Guairaçá","Guamiranga","Guapirama","Guaporema","Guaraci","Guaraniaçu","Guarapuava","Guaraqueçaba","Guaratuba","Honório Serpa","Ibaiti","Ibema","Ibiporã","Icaraíma","Iguaraçu","Iguatu","Imbaú","Imbituva","Inácio Martins","Inajá","Indianópolis","Ipiranga","Iporã","Iracema do Oeste","Irati","Iretama","Itaguajé","Itaipulândia","Itambaracá","Itambé","Itapejara d'Oeste","Itaperuçu","Itaúna do Sul","Ivaí","Ivaiporã","Ivaté","Ivatuba","Jaboti","Jacarezinho","Jaguapitã","Jaguariaíva","Jandaia do Sul","Janiópolis","Japira","Japurá","Jardim Alegre","Jardim Olinda","Jataizinho","Jesuítas","Joaquim Távora","Jundiaí do Sul","Juranda","Jussara","Kaloré","Lapa","Laranjal","Laranjeiras do Sul","Leópolis","Lidianópolis","Lindoeste","Loanda","Lobato","Londrina","Luiziana","Lunardelli","Lupionópolis","Mallet","Mamborê","Mandaguaçu","Mandaguari","Mandirituba","Manfrinópolis","Mangueirinha","Manoel Ribas","Marechal Cândido Rondon","Maria Helena","Marialva","Marilândia do Sul","Marilena","Mariluz","Maringá","Mariópolis","Maripá","Marmeleiro","Marquinho","Marumbi","Matelândia","Matinhos","Mato Rico","Mauá da Serra","Medianeira","Mercedes","Mirador","Miraselva","Missal","Moreira Sales","Morretes","Munhoz de Melo","Nossa Senhora das Graças","Nova Aliança do Ivaí","Nova América da Colina","Nova Aurora","Nova Cantu","Nova Esperança","Nova Esperança do Sudoeste","Nova Fátima","Nova Laranjeiras","Nova Londrina","Nova Olímpia","Nova Prata do Iguaçu","Nova Santa Bárbara","Nova Santa Rosa","Nova Tebas","Novo Itacolomi","Ortigueira","Ourizona","Ouro Verde do Oeste","Paiçandu","Palmas","Palmeira","Palmital","Palotina","Paraíso do Norte","Paranacity","Paranaguá","Paranapoema","Paranavaí","Pato Bragado","Pato Branco","Paula Freitas","Paulo Frontin","Peabiru","Perobal","Pérola","Pérola d'Oeste","Piên","Pinhais","Pinhal de São Bento","Pinhalão","Pinhão","Piraí do Sul","Piraquara","Pitanga","Pitangueiras","Planaltina do Paraná","Planalto","Ponta Grossa","Pontal do Paraná","Porecatu","Porto Amazonas","Porto Barreiro","Porto Rico","Porto Vitória","Prado Ferreira","Pranchita","Presidente Castelo Branco","Primeiro de Maio","Prudentópolis","Quarto Centenário","Quatiguá","Quatro Barras","Quatro Pontes","Quedas do Iguaçu","Querência do Norte","Quinta do Sol","Quitandinha","Ramilândia","Rancho Alegre","Rancho Alegre d'Oeste","Realeza","Rebouças","Renascença","Reserva","Reserva do Iguaçu","Ribeirão Claro","Ribeirão do Pinhal","Rio Azul","Rio Bom","Rio Bonito do Iguaçu","Rio Branco do Ivaí","Rio Branco do Sul","Rio Negro","Rolândia","Roncador","Rondon","Rosário do Ivaí","Sabáudia","Salgado Filho","Salto do Itararé","Salto do Lontra","Santa Amélia","Santa Cecília do Pavão","Santa Cruz Monte Castelo","Santa Fé","Santa Helena","Santa Inês","Santa Isabel do Ivaí","Santa Izabel do Oeste","Santa Lúcia","Santa Maria do Oeste","Santa Mariana","Santa Mônica","Santa Tereza do Oeste","Santa Terezinha de Itaipu","Santana do Itararé","Santo Antônio da Platina","Santo Antônio do Caiuá","Santo Antônio do Paraíso","Santo Antônio do Sudoeste","Santo Inácio","São Carlos do Ivaí","São Jerônimo da Serra","São João","São João do Caiuá","São João do Ivaí","São João do Triunfo","São Jorge d'Oeste","São Jorge do Ivaí","São Jorge do Patrocínio","São José da Boa Vista","São José das Palmeiras","São José dos Pinhais","São Manoel do Paraná","São Mateus do Sul","São Miguel do Iguaçu","São Pedro do Iguaçu","São Pedro do Ivaí","São Pedro do Paraná","São Sebastião da Amoreira","São Tomé","Sapopema","Sarandi","Saudade do Iguaçu","Sengés","Serranópolis do Iguaçu","Sertaneja","Sertanópolis","Siqueira Campos","Sulina","Tamarana","Tamboara","Tapejara","Tapira","Teixeira Soares","Telêmaco Borba","Terra Boa","Terra Rica","Terra Roxa","Tibagi","Tijucas do Sul","Toledo","Tomazina","Três Barras do Paraná","Tunas do Paraná","Tuneiras do Oeste","Tupãssi","Turvo","Ubiratã","Umuarama","União da Vitória","Uniflor","Uraí","Ventania","Vera Cruz do Oeste","Verê","Vila Alta","Virmond","Vitorino","Wenceslau Braz","Xambrê"]},{"uf":"RJ","name":"Rio de Janeiro","cities":["Angra dos Reis","Aperibé","Araruama","Areal","Armação de Búzios","Arraial do Cabo","Barra do Piraí","Barra Mansa","Belford Roxo","Bom Jardim","Bom Jesus do Itabapoana","Cabo Frio","Cachoeiras de Macacu","Cambuci","Campos dos Goytacazes","Cantagalo","Carapebus","Cardoso Moreira","Carmo","Casimiro de Abreu","Comendador Levy Gasparian","Conceição de Macabu","Cordeiro","Duas Barras","Duque de Caxias","Engenheiro Paulo de Frontin","Guapimirim","Iguaba Grande","Itaboraí","Itaguaí","Italva","Itaocara","Itaperuna","Itatiaia","Japeri","Laje do Muriaé","Macaé","Macuco","Magé","Mangaratiba","Maricá","Mendes","Mesquita","Miguel Pereira","Miracema","Natividade","Nilópolis","Niterói","Nova Friburgo","Nova Iguaçu","Paracambi","Paraíba do Sul","Parati","Paty do Alferes","Petrópolis","Pinheiral","Piraí","Porciúncula","Porto Real","Quatis","Queimados","Quissamã","Resende","Rio Bonito","Rio Claro","Rio das Flores","Rio das Ostras","Rio de Janeiro","Santa Maria Madalena","Santo Antônio de Pádua","São Fidélis","São Francisco de Itabapoana","São Gonçalo","São João da Barra","São João de Meriti","São José de Ubá","São José do Vale do Rio Preto","São Pedro da Aldeia","São Sebastião do Alto","Sapucaia","Saquarema","Seropédica","Silva Jardim","Sumidouro","Tanguá","Teresópolis","Trajano de Morais","Três Rios","Valença","Varre-Sai","Vassouras","Volta Redonda"]},{"uf":"RN","name":"Rio Grande do Norte","cities":["Acari","Açu","Afonso Bezerra","Água Nova","Alexandria","Almino Afonso","Alto do Rodrigues","Angicos","Antônio Martins","Apodi","Areia Branca","Arês","Augusto Severo","Baía Formosa","Baraúna","Barcelona","Bento Fernandes","Bodó","Bom Jesus","Brejinho","Caiçara do Norte","Caiçara do Rio do Vento","Caicó","Campo Redondo","Canguaretama","Caraúbas","Carnaúba dos Dantas","Carnaubais","Ceará-Mirim","Cerro Corá","Coronel Ezequiel","Coronel João Pessoa","Cruzeta","Currais Novos","Doutor Severiano","Encanto","Equador","Espírito Santo","Extremoz","Felipe Guerra","Fernando Pedroza","Florânia","Francisco Dantas","Frutuoso Gomes","Galinhos","Goianinha","Governador Dix-Sept Rosado","Grossos","Guamaré","Ielmo Marinho","Ipanguaçu","Ipueira","Itajá","Itaú","Jaçanã","Jandaíra","Janduís","Januário Cicco","Japi","Jardim de Angicos","Jardim de Piranhas","Jardim do Seridó","João Câmara","João Dias","José da Penha","Jucurutu","Jundiá","Lagoa d'Anta","Lagoa de Pedras","Lagoa de Velhos","Lagoa Nova","Lagoa Salgada","Lajes","Lajes Pintadas","Lucrécia","Luís Gomes","Macaíba","Macau","Major Sales","Marcelino Vieira","Martins","Maxaranguape","Messias Targino","Montanhas","Monte Alegre","Monte das Gameleiras","Mossoró","Natal","Nísia Floresta","Nova Cruz","Olho-d'Água do Borges","Ouro Branco","Paraná","Paraú","Parazinho","Parelhas","Parnamirim","Passa e Fica","Passagem","Patu","Pau dos Ferros","Pedra Grande","Pedra Preta","Pedro Avelino","Pedro Velho","Pendências","Pilões","Poço Branco","Portalegre","Porto do Mangue","Presidente Juscelino","Pureza","Rafael Fernandes","Rafael Godeiro","Riacho da Cruz","Riacho de Santana","Riachuelo","Rio do Fogo","Rodolfo Fernandes","Ruy Barbosa","Santa Cruz","Santa Maria","Santana do Matos","Santana do Seridó","Santo Antônio","São Bento do Norte","São Bento do Trairí","São Fernando","São Francisco do Oeste","São Gonçalo do Amarante","São João do Sabugi","São José de Mipibu","São José do Campestre","São José do Seridó","São Miguel","São Miguel de Touros","São Paulo do Potengi","São Pedro","São Rafael","São Tomé","São Vicente","Senador Elói de Souza","Senador Georgino Avelino","Serra de São Bento","Serra do Mel","Serra Negra do Norte","Serrinha","Serrinha dos Pintos","Severiano Melo","Sítio Novo","Taboleiro Grande","Taipu","Tangará","Tenente Ananias","Tenente Laurentino Cruz","Tibau","Tibau do Sul","Timbaúba dos Batistas","Touros","Triunfo Potiguar","Umarizal","Upanema","Várzea","Venha-Ver","Vera Cruz","Viçosa","Vila Flor"]},{"uf":"RO","name":"Rondônia","cities":["Alta Floresta d'Oeste","Alto Alegre do Parecis","Alto Paraíso","Alvorada d'Oeste","Ariquemes","Buritis","Cabixi","Cacaulândia","Cacoal","Campo Novo de Rondônia","Candeias do Jamari","Castanheiras","Cerejeiras","Chupinguaia","Colorado do Oeste","Corumbiara","Costa Marques","Cujubim","Espigão d'Oeste","Governador Jorge Teixeira","Guajará-Mirim","Itapuã do Oeste","Jaru","Ji-Paraná","Machadinho d'Oeste","Ministro Andreazza","Mirante da Serra","Monte Negro","Nova Brasilândia d'Oeste","Nova Mamoré","Nova União","Novo Horizonte do Oeste","Ouro Preto do Oeste","Parecis","Pimenta Bueno","Pimenteiras do Oeste","Porto Velho","Presidente Médici","Primavera de Rondônia","Rio Crespo","Rolim de Moura","Santa Luzia d'Oeste","São Felipe d'Oeste","São Francisco do Guaporé","São Miguel do Guaporé","Seringueiras","Teixeirópolis","Theobroma","Urupá","Vale do Anari","Vale do Paraíso","Vilhena"]},{"uf":"RR","name":"Roraima","cities":["Alto Alegre","Amajari","Boa Vista","Bonfim","Cantá","Caracaraí","Caroebe","Iracema","Mucajaí","Normandia","Pacaraima","Rorainópolis","São João da Baliza","São Luiz","Uiramutã"]},{"uf":"RS","name":"Rio Grande do Sul","cities":["Aceguá","Água Santa","Agudo","Ajuricaba","Alecrim","Alegrete","Alegria","Almirante Tamandaré do Sul","Alpestre","Alto Alegre","Alto Feliz","Alvorada","Amaral Ferrador","Ametista do Sul","André da Rocha","Anta Gorda","Antônio Prado","Arambaré","Araricá","Aratiba","Arroio do Meio","Arroio do Padre","Arroio do Sal","Arroio do Tigre","Arroio dos Ratos","Arroio Grande","Arvorezinha","Augusto Pestana","Áurea","Bagé","Balneário Pinhal","Barão","Barão de Cotegipe","Barão do Triunfo","Barra do Guarita","Barra do Quaraí","Barra do Ribeiro","Barra do Rio Azul","Barra Funda","Barracão","Barros Cassal","Benjamin Constan do Sul","Bento Gonçalves","Boa Vista das Missões","Boa Vista do Buricá","Boa Vista do Cadeado","Boa Vista do Incra","Boa Vista do Sul","Bom Jesus","Bom Princípio","Bom Progresso","Bom Retiro do Sul","Boqueirão do Leão","Bossoroca","Bozano","Braga","Brochier","Butiá","Caçapava do Sul","Cacequi","Cachoeira do Sul","Cachoeirinha","Cacique Doble","Caibaté","Caiçara","Camaquã","Camargo","Cambará do Sul","Campestre da Serra","Campina das Missões","Campinas do Sul","Campo Bom","Campo Novo","Campos Borges","Candelária","Cândido Godói","Candiota","Canela","Canguçu","Canoas","Canudos do Vale","Capão Bonito do Sul","Capão da Canoa","Capão do Cipó","Capão do Leão","Capela de Santana","Capitão","Capivari do Sul","Caraá","Carazinho","Carlos Barbosa","Carlos Gomes","Casca","Caseiros","Catuípe","Caxias do Sul","Centenário","Cerrito","Cerro Branco","Cerro Grande","Cerro Grande do Sul","Cerro Largo","Chapada","Charqueadas","Charrua","Chiapeta","Chuí","Chuvisca","Cidreira","Ciríaco","Colinas","Colorado","Condor","Constantina","Coqueiro Baixo","Coqueiros do Sul","Coronel Barros","Coronel Bicaco","Coronel Pilar","Cotiporã","Coxilha","Crissiumal","Cristal","Cristal do Sul","Cruz Alta","Cruzaltense","Cruzeiro do Sul","David Canabarro","Derrubadas","Dezesseis de Novembro","Dilermando de Aguiar","Dois Irmãos","Dois Irmãos das Missões","Dois Lajeados","Dom Feliciano","Dom Pedrito","Dom Pedro de Alcântara","Dona Francisca","Doutor Maurício Cardoso","Doutor Ricardo","Eldorado do Sul","Encantado","Encruzilhada do Sul","Engenho Velho","Entre Rios do Sul","Entre-Ijuís","Erebango","Erechim","Ernestina","Erval Grande","Erval Seco","Esmeralda","Esperança do Sul","Espumoso","Estação","Estância Velha","Esteio","Estrela","Estrela Velha","Eugênio de Castro","Fagundes Varela","Farroupilha","Faxinal do Soturno","Faxinalzinho","Fazenda Vilanova","Feliz","Flores da Cunha","Floriano Peixoto","Fontoura Xavier","Formigueiro","Forquetinha","Fortaleza dos Valos","Frederico Westphalen","Garibaldi","Garruchos","Gaurama","General Câmara","Gentil","Getúlio Vargas","Giruá","Glorinha","Gramado","Gramado dos Loureiros","Gramado Xavier","Gravataí","Guabiju","Guaíba","Guaporé","Guarani das Missões","Harmonia","Herval","Herveiras","Horizontina","Hulha Negra","Humaitá","Ibarama","Ibiaçá","Ibiraiaras","Ibirapuitã","Ibirubá","Igrejinha","Ijuí","Ilópolis","Imbé","Imigrante","Independência","Inhacorá","Ipê","Ipiranga do Sul","Iraí","Itaara","Itacurubi","Itapuca","Itaqui","Itati","Itatiba do Sul","Ivorá","Ivoti","Jaboticaba","Jacuizinho","Jacutinga","Jaguarão","Jaguari","Jaquirana","Jari","Jóia","Júlio de Castilhos","Lagoa Bonita do Sul","Lagoa dos Três Cantos","Lagoa Vermelha","Lagoão","Lajeado","Lajeado do Bugre","Lavras do Sul","Liberato Salzano","Lindolfo Collor","Linha Nova","Maçambara","Machadinho","Mampituba","Manoel Viana","Maquiné","Maratá","Marau","Marcelino Ramos","Mariana Pimentel","Mariano Moro","Marques de Souza","Mata","Mato Castelhano","Mato Leitão","Mato Queimado","Maximiliano de Almeida","Minas do Leão","Miraguaí","Montauri","Monte Alegre dos Campos","Monte Belo do Sul","Montenegro","Mormaço","Morrinhos do Sul","Morro Redondo","Morro Reuter","Mostardas","Muçum","Muitos Capões","Muliterno","Não-Me-Toque","Nicolau Vergueiro","Nonoai","Nova Alvorada","Nova Araçá","Nova Bassano","Nova Boa Vista","Nova Bréscia","Nova Candelária","Nova Esperança do Sul","Nova Hartz","Nova Pádua","Nova Palma","Nova Petrópolis","Nova Prata","Nova Ramada","Nova Roma do Sul","Nova Santa Rita","Novo Barreiro","Novo Cabrais","Novo Hamburgo","Novo Machado","Novo Tiradentes","Novo Xingu","Osório","Paim Filho","Palmares do Sul","Palmeira das Missões","Palmitinho","Panambi","Pântano Grande","Paraí","Paraíso do Sul","Pareci Novo","Parobé","Passa Sete","Passo do Sobrado","Passo Fundo","Paulo Bento","Paverama","Pedras Altas","Pedro Osório","Pejuçara","Pelotas","Picada Café","Pinhal","Pinhal da Serra","Pinhal Grande","Pinheirinho do Vale","Pinheiro Machado","Pirapó","Piratini","Planalto","Poço das Antas","Pontão","Ponte Preta","Portão","Porto Alegre","Porto Lucena","Porto Mauá","Porto Vera Cruz","Porto Xavier","Pouso Novo","Presidente Lucena","Progresso","Protásio Alves","Putinga","Quaraí","Quatro Irmãos","Quevedos","Quinze de Novembro","Redentora","Relvado","Restinga Seca","Rio dos Índios","Rio Grande","Rio Pardo","Riozinho","Roca Sales","Rodeio Bonito","Rolador","Rolante","Ronda Alta","Rondinha","Roque Gonzales","Rosário do Sul","Sagrada Família","Saldanha Marinho","Salto do Jacuí","Salvador das Missões","Salvador do Sul","Sananduva","Santa Bárbara do Sul","Santa Cecília do Sul","Santa Clara do Sul","Santa Cruz do Sul","Santa Margarida do Sul","Santa Maria","Santa Maria do Herval","Santa Rosa","Santa Tereza","Santa Vitória do Palmar","Santana da Boa Vista","Santana do Livramento","Santiago","Santo Ângelo","Santo Antônio da Patrulha","Santo Antônio das Missões","Santo Antônio do Palma","Santo Antônio do Planalto","Santo Augusto","Santo Cristo","Santo Expedito do Sul","São Borja","São Domingos do Sul","São Francisco de Assis","São Francisco de Paula","São Gabriel","São Jerônimo","São João da Urtiga","São João do Polêsine","São Jorge","São José das Missões","São José do Herval","São José do Hortêncio","São José do Inhacorá","São José do Norte","São José do Ouro","São José do Sul","São José dos Ausentes","São Leopoldo","São Lourenço do Sul","São Luiz Gonzaga","São Marcos","São Martinho","São Martinho da Serra","São Miguel das Missões","São Nicolau","São Paulo das Missões","São Pedro da Serra","São Pedro das Missões","São Pedro do Butiá","São Pedro do Sul","São Sebastião do Caí","São Sepé","São Valentim","São Valentim do Sul","São Valério do Sul","São Vendelino","São Vicente do Sul","Sapiranga","Sapucaia do Sul","Sarandi","Seberi","Sede Nova","Segredo","Selbach","Senador Salgado Filho","Sentinela do Sul","Serafina Corrêa","Sério","Sertão","Sertão Santana","Sete de Setembro","Severiano de Almeida","Silveira Martins","Sinimbu","Sobradinho","Soledade","Tabaí","Tapejara","Tapera","Tapes","Taquara","Taquari","Taquaruçu do Sul","Tavares","Tenente Portela","Terra de Areia","Teutônia","Tio Hugo","Tiradentes do Sul","Toropi","Torres","Tramandaí","Travesseiro","Três Arroios","Três Cachoeiras","Três Coroas","Três de Maio","Três Forquilhas","Três Palmeiras","Três Passos","Trindade do Sul","Triunfo","Tucunduva","Tunas","Tupanci do Sul","Tupanciretã","Tupandi","Tuparendi","Turuçu","Ubiretama","União da Serra","Unistalda","Uruguaiana","Vacaria","Vale do Sol","Vale Real","Vale Verde","Vanini","Venâncio Aires","Vera Cruz","Veranópolis","Vespasiano Correa","Viadutos","Viamão","Vicente Dutra","Victor Graeff","Vila Flores","Vila Lângaro","Vila Maria","Vila Nova do Sul","Vista Alegre","Vista Alegre do Prata","Vista Gaúcha","Vitória das Missões","Westfália","Xangri-lá"]},{"uf":"SC","name":"Santa Catarina","cities":["Abdon Batista","Abelardo Luz","Agrolândia","Agronômica","Água Doce","Águas de Chapecó","Águas Frias","Águas Mornas","Alfredo Wagner","Alto Bela Vista","Anchieta","Angelina","Anita Garibaldi","Anitápolis","Antônio Carlos","Apiúna","Arabutã","Araquari","Araranguá","Armazém","Arroio Trinta","Arvoredo","Ascurra","Atalanta","Aurora","Balneário Arroio do Silva","Balneário Barra do Sul","Balneário Camboriú","Balneário Gaivota","Bandeirante","Barra Bonita","Barra Velha","Bela Vista do Toldo","Belmonte","Benedito Novo","Biguaçu","Blumenau","Bocaina do Sul","Bom Jardim da Serra","Bom Jesus","Bom Jesus do Oeste","Bom Retiro","Bombinhas","Botuverá","Braço do Norte","Braço do Trombudo","Brunópolis","Brusque","Caçador","Caibi","Calmon","Camboriú","Campo Alegre","Campo Belo do Sul","Campo Erê","Campos Novos","Canelinha","Canoinhas","Capão Alto","Capinzal","Capivari de Baixo","Catanduvas","Caxambu do Sul","Celso Ramos","Cerro Negro","Chapadão do Lageado","Chapecó","Cocal do Sul","Concórdia","Cordilheira Alta","Coronel Freitas","Coronel Martins","Correia Pinto","Corupá","Criciúma","Cunha Porã","Cunhataí","Curitibanos","Descanso","Dionísio Cerqueira","Dona Emma","Doutor Pedrinho","Entre Rios","Ermo","Erval Velho","Faxinal dos Guedes","Flor do Sertão","Florianópolis","Formosa do Sul","Forquilhinha","Fraiburgo","Frei Rogério","Galvão","Garopaba","Garuva","Gaspar","Governador Celso Ramos","Grão Pará","Gravatal","Guabiruba","Guaraciaba","Guaramirim","Guarujá do Sul","Guatambú","Herval d'Oeste","Ibiam","Ibicaré","Ibirama","Içara","Ilhota","Imaruí","Imbituba","Imbuia","Indaial","Iomerê","Ipira","Iporã do Oeste","Ipuaçu","Ipumirim","Iraceminha","Irani","Irati","Irineópolis","Itá","Itaiópolis","Itajaí","Itapema","Itapiranga","Itapoá","Ituporanga","Jaborá","Jacinto Machado","Jaguaruna","Jaraguá do Sul","Jardinópolis","Joaçaba","Joinville","José Boiteux","Jupiá","Lacerdópolis","Lages","Laguna","Lajeado Grande","Laurentino","Lauro Muller","Lebon Régis","Leoberto Leal","Lindóia do Sul","Lontras","Luiz Alves","Luzerna","Macieira","Mafra","Major Gercino","Major Vieira","Maracajá","Maravilha","Marema","Massaranduba","Matos Costa","Meleiro","Mirim Doce","Modelo","Mondaí","Monte Carlo","Monte Castelo","Morro da Fumaça","Morro Grande","Navegantes","Nova Erechim","Nova Itaberaba","Nova Trento","Nova Veneza","Novo Horizonte","Orleans","Otacílio Costa","Ouro","Ouro Verde","Paial","Painel","Palhoça","Palma Sola","Palmeira","Palmitos","Papanduva","Paraíso","Passo de Torres","Passos Maia","Paulo Lopes","Pedras Grandes","Penha","Peritiba","Petrolândia","Piçarras","Pinhalzinho","Pinheiro Preto","Piratuba","Planalto Alegre","Pomerode","Ponte Alta","Ponte Alta do Norte","Ponte Serrada","Porto Belo","Porto União","Pouso Redondo","Praia Grande","Presidente Castelo Branco","Presidente Getúlio","Presidente Nereu","Princesa","Quilombo","Rancho Queimado","Rio das Antas","Rio do Campo","Rio do Oeste","Rio do Sul","Rio dos Cedros","Rio Fortuna","Rio Negrinho","Rio Rufino","Riqueza","Rodeio","Romelândia","Salete","Saltinho","Salto Veloso","Sangão","Santa Cecília","Santa Helena","Santa Rosa de Lima","Santa Rosa do Sul","Santa Terezinha","Santa Terezinha do Progresso","Santiago do Sul","Santo Amaro da Imperatriz","São Bento do Sul","São Bernardino","São Bonifácio","São Carlos","São Cristovão do Sul","São Domingos","São Francisco do Sul","São João Batista","São João do Itaperiú","São João do Oeste","São João do Sul","São Joaquim","São José","São José do Cedro","São José do Cerrito","São Lourenço do Oeste","São Ludgero","São Martinho","São Miguel da Boa Vista","São Miguel do Oeste","São Pedro de Alcântara","Saudades","Schroeder","Seara","Serra Alta","Siderópolis","Sombrio","Sul Brasil","Taió","Tangará","Tigrinhos","Tijucas","Timbé do Sul","Timbó","Timbó Grande","Três Barras","Treviso","Treze de Maio","Treze Tílias","Trombudo Central","Tubarão","Tunápolis","Turvo","União do Oeste","Urubici","Urupema","Urussanga","Vargeão","Vargem","Vargem Bonita","Vidal Ramos","Videira","Vitor Meireles","Witmarsum","Xanxerê","Xavantina","Xaxim","Zortéa"]},{"uf":"SE","name":"Sergipe","cities":["Amparo de São Francisco","Aquidabã","Aracaju","Arauá","Areia Branca","Barra dos Coqueiros","Boquim","Brejo Grande","Campo do Brito","Canhoba","Canindé de São Francisco","Capela","Carira","Carmópolis","Cedro de São João","Cristinápolis","Cumbe","Divina Pastora","Estância","Feira Nova","Frei Paulo","Gararu","General Maynard","Gracho Cardoso","Ilha das Flores","Indiaroba","Itabaiana","Itabaianinha","Itabi","Itaporanga d'Ajuda","Japaratuba","Japoatã","Lagarto","Laranjeiras","Macambira","Malhada dos Bois","Malhador","Maruim","Moita Bonita","Monte Alegre de Sergipe","Muribeca","Neópolis","Nossa Senhora Aparecida","Nossa Senhora da Glória","Nossa Senhora das Dores","Nossa Senhora de Lourdes","Nossa Senhora do Socorro","Pacatuba","Pedra Mole","Pedrinhas","Pinhão","Pirambu","Poço Redondo","Poço Verde","Porto da Folha","Propriá","Riachão do Dantas","Riachuelo","Ribeirópolis","Rosário do Catete","Salgado","Santa Luzia do Itanhy","Santa Rosa de Lima","Santana do São Francisco","Santo Amaro das Brotas","São Cristóvão","São Domingos","São Francisco","São Miguel do Aleixo","Simão Dias","Siriri","Telha","Tobias Barreto","Tomar do Geru","Umbaúba"]},{"uf":"SP","name":"São Paulo","cities":["Adamantina","Adolfo","Aguaí","Águas da Prata","Águas de Lindóia","Águas de Santa Bárbara","Águas de São Pedro","Agudos","Alambari","Alfredo Marcondes","Altair","Altinópolis","Alto Alegre","Alumínio","Álvares Florence","Álvares Machado","Álvaro de Carvalho","Alvinlândia","Americana","Américo Brasiliense","Américo de Campos","Amparo","Analândia","Andradina","Angatuba","Anhembi","Anhumas","Aparecida","Aparecida d'Oeste","Apiaí","Araçariguama","Araçatuba","Araçoiaba da Serra","Aramina","Arandu","Arapeí","Araraquara","Araras","Arco-Íris","Arealva","Areias","Areiópolis","Ariranha","Artur Nogueira","Arujá","Aspásia","Assis","Atibaia","Auriflama","Avaí","Avanhandava","Avaré","Bady Bassitt","Balbinos","Bálsamo","Bananal","Barão de Antonina","Barbosa","Bariri","Barra Bonita","Barra do Chapéu","Barra do Turvo","Barretos","Barrinha","Barueri","Bastos","Batatais","Bauru","Bebedouro","Bento de Abreu","Bernardino de Campos","Bertioga","Bilac","Birigui","Biritiba-Mirim","Boa Esperança do Sul","Bocaina","Bofete","Boituva","Bom Jesus dos Perdões","Bom Sucesso de Itararé","Borá","Boracéia","Borborema","Borebi","Botucatu","Bragança Paulista","Braúna","Brejo Alegre","Brodowski","Brotas","Buri","Buritama","Buritizal","Cabrália Paulista","Cabreúva","Caçapava","Cachoeira Paulista","Caconde","Cafelândia","Caiabu","Caieiras","Caiuá","Cajamar","Cajati","Cajobi","Cajuru","Campina do Monte Alegre","Campinas","Campo Limpo Paulista","Campos do Jordão","Campos Novos Paulista","Cananéia","Canas","Cândido Mota","Cândido Rodrigues","Canitar","Capão Bonito","Capela do Alto","Capivari","Caraguatatuba","Carapicuíba","Cardoso","Casa Branca","Cássia dos Coqueiros","Castilho","Catanduva","Catiguá","Cedral","Cerqueira César","Cerquilho","Cesário Lange","Charqueada","Chavantes","Clementina","Colina","Colômbia","Conchal","Conchas","Cordeirópolis","Coroados","Coronel Macedo","Corumbataí","Cosmópolis","Cosmorama","Cotia","Cravinhos","Cristais Paulista","Cruzália","Cruzeiro","Cubatão","Cunha","Descalvado","Diadema","Dirce Reis","Divinolândia","Dobrada","Dois Córregos","Dolcinópolis","Dourado","Dracena","Duartina","Dumont","Echaporã","Eldorado","Elias Fausto","Elisiário","Embaúba","Embu","Embu-Guaçu","Emilianópolis","Engenheiro Coelho","Espírito Santo do Pinhal","Espírito Santo do Turvo","Estiva Gerbi","Estrela d'Oeste","Estrela do Norte","Euclides da Cunha Paulista","Fartura","Fernando Prestes","Fernandópolis","Fernão","Ferraz de Vasconcelos","Flora Rica","Floreal","Florínia","Flórida Paulista","Franca","Francisco Morato","Franco da Rocha","Gabriel Monteiro","Gália","Garça","Gastão Vidigal","Gavião Peixoto","General Salgado","Getulina","Glicério","Guaiçara","Guaimbê","Guaíra","Guapiaçu","Guapiara","Guará","Guaraçaí","Guaraci","Guarani d'Oeste","Guarantã","Guararapes","Guararema","Guaratinguetá","Guareí","Guariba","Guarujá","Guarulhos","Guatapará","Guzolândia","Herculândia","Holambra","Hortolândia","Iacanga","Iacri","Iaras","Ibaté","Ibirá","Ibirarema","Ibitinga","Ibiúna","Icém","Iepê","Igaraçu do Tietê","Igarapava","Igaratá","Iguape","Ilha Comprida","Ilha Solteira","Ilhabela","Indaiatuba","Indiana","Indiaporã","Inúbia Paulista","Ipauçu","Iperó","Ipeúna","Ipiguá","Iporanga","Ipuã","Iracemápolis","Irapuã","Irapuru","Itaberá","Itaí","Itajobi","Itaju","Itanhaém","Itaóca","Itapecerica da Serra","Itapetininga","Itapeva","Itapevi","Itapira","Itapirapuã Paulista","Itápolis","Itaporanga","Itapuí","Itapura","Itaquaquecetuba","Itararé","Itariri","Itatiba","Itatinga","Itirapina","Itirapuã","Itobi","Itu","Itupeva","Ituverava","Jaborandi","Jaboticabal","Jacareí","Jaci","Jacupiranga","Jaguariúna","Jales","Jambeiro","Jandira","Jardinópolis","Jarinu","Jaú","Jeriquara","Joanópolis","João Ramalho","José Bonifácio","Júlio Mesquita","Jumirim","Jundiaí","Junqueirópolis","Juquiá","Juquitiba","Lagoinha","Laranjal Paulista","Lavínia","Lavrinhas","Leme","Lençóis Paulista","Limeira","Lindóia","Lins","Lorena","Lourdes","Louveira","Lucélia","Lucianópolis","Luís Antônio","Luiziânia","Lupércio","Lutécia","Macatuba","Macaubal","Macedônia","Magda","Mairinque","Mairiporã","Manduri","Marabá Paulista","Maracaí","Marapoama","Mariápolis","Marília","Marinópolis","Martinópolis","Matão","Mauá","Mendonça","Meridiano","Mesópolis","Miguelópolis","Mineiros do Tietê","Mira Estrela","Miracatu","Mirandópolis","Mirante do Paranapanema","Mirassol","Mirassolândia","Mococa","Mogi das Cruzes","Mogi-Guaçu","Mogi-Mirim","Mombuca","Monções","Mongaguá","Monte Alegre do Sul","Monte Alto","Monte Aprazível","Monte Azul Paulista","Monte Castelo","Monte Mor","Monteiro Lobato","Morro Agudo","Morungaba","Motuca","Murutinga do Sul","Nantes","Narandiba","Natividade da Serra","Nazaré Paulista","Neves Paulista","Nhandeara","Nipoã","Nova Aliança","Nova Campina","Nova Canaã Paulista","Nova Castilho","Nova Europa","Nova Granada","Nova Guataporanga","Nova Independência","Nova Luzitânia","Nova Odessa","Novais","Novo Horizonte","Nuporanga","Ocauçu","Óleo","Olímpia","Onda Verde","Oriente","Orindiúva","Orlândia","Osasco","Oscar Bressane","Osvaldo Cruz","Ourinhos","Ouro Verde","Ouroeste","Pacaembu","Palestina","Palmares Paulista","Palmeira d'Oeste","Palmital","Panorama","Paraguaçu Paulista","Paraibuna","Paraíso","Paranapanema","Paranapuã","Parapuã","Pardinho","Pariquera-Açu","Parisi","Patrocínio Paulista","Paulicéia","Paulínia","Paulistânia","Paulo de Faria","Pederneiras","Pedra Bela","Pedranópolis","Pedregulho","Pedreira","Pedrinhas Paulista","Pedro de Toledo","Penápolis","Pereira Barreto","Pereiras","Peruíbe","Piacatu","Piedade","Pilar do Sul","Pindamonhangaba","Pindorama","Pinhalzinho","Piquerobi","Piquete","Piracaia","Piracicaba","Piraju","Pirajuí","Pirangi","Pirapora do Bom Jesus","Pirapozinho","Pirassununga","Piratininga","Pitangueiras","Planalto","Platina","Poá","Poloni","Pompéia","Pongaí","Pontal","Pontalinda","Pontes Gestal","Populina","Porangaba","Porto Feliz","Porto Ferreira","Potim","Potirendaba","Pracinha","Pradópolis","Praia Grande","Pratânia","Presidente Alves","Presidente Bernardes","Presidente Epitácio","Presidente Prudente","Presidente Venceslau","Promissão","Quadra","Quatá","Queiroz","Queluz","Quintana","Rafard","Rancharia","Redenção da Serra","Regente Feijó","Reginópolis","Registro","Restinga","Ribeira","Ribeirão Bonito","Ribeirão Branco","Ribeirão Corrente","Ribeirão do Sul","Ribeirão dos Índios","Ribeirão Grande","Ribeirão Pires","Ribeirão Preto","Rifaina","Rincão","Rinópolis","Rio Claro","Rio das Pedras","Rio Grande da Serra","Riolândia","Riversul","Rosana","Roseira","Rubiácea","Rubinéia","Sabino","Sagres","Sales","Sales Oliveira","Salesópolis","Salmourão","Saltinho","Salto","Salto de Pirapora","Salto Grande","Sandovalina","Santa Adélia","Santa Albertina","Santa Bárbara d'Oeste","Santa Branca","Santa Clara d'Oeste","Santa Cruz da Conceição","Santa Cruz da Esperança","Santa Cruz das Palmeiras","Santa Cruz do Rio Pardo","Santa Ernestina","Santa Fé do Sul","Santa Gertrudes","Santa Isabel","Santa Lúcia","Santa Maria da Serra","Santa Mercedes","Santa Rita d'Oeste","Santa Rita do Passa Quatro","Santa Rosa de Viterbo","Santa Salete","Santana da Ponte Pensa","Santana de Parnaíba","Santo Anastácio","Santo André","Santo Antônio da Alegria","Santo Antônio de Posse","Santo Antônio do Aracanguá","Santo Antônio do Jardim","Santo Antônio do Pinhal","Santo Expedito","Santópolis do Aguapeí","Santos","São Bento do Sapucaí","São Bernardo do Campo","São Caetano do Sul","São Carlos","São Francisco","São João da Boa Vista","São João das Duas Pontes","São João de Iracema","São João do Pau d'Alho","São Joaquim da Barra","São José da Bela Vista","São José do Barreiro","São José do Rio Pardo","São José do Rio Preto","São José dos Campos","São Lourenço da Serra","São Luís do Paraitinga","São Manuel","São Miguel Arcanjo","São Paulo","São Pedro","São Pedro do Turvo","São Roque","São Sebastião","São Sebastião da Grama","São Simão","São Vicente","Sarapuí","Sarutaiá","Sebastianópolis do Sul","Serra Azul","Serra Negra","Serrana","Sertãozinho","Sete Barras","Severínia","Silveiras","Socorro","Sorocaba","Sud Mennucci","Sumaré","Suzanápolis","Suzano","Tabapuã","Tabatinga","Taboão da Serra","Taciba","Taguaí","Taiaçu","Taiúva","Tambaú","Tanabi","Tapiraí","Tapiratiba","Taquaral","Taquaritinga","Taquarituba","Taquarivaí","Tarabai","Tarumã","Tatuí","Taubaté","Tejupá","Teodoro Sampaio","Terra Roxa","Tietê","Timburi","Torre de Pedra","Torrinha","Trabiju","Tremembé","Três Fronteiras","Tuiuti","Tupã","Tupi Paulista","Turiúba","Turmalina","Ubarana","Ubatuba","Ubirajara","Uchoa","União Paulista","Urânia","Uru","Urupês","Valentim Gentil","Valinhos","Valparaíso","Vargem","Vargem Grande do Sul","Vargem Grande Paulista","Várzea Paulista","Vera Cruz","Vinhedo","Viradouro","Vista Alegre do Alto","Vitória Brasil","Votorantim","Votuporanga","Zacarias"]},{"uf":"TO","name":"Tocantins","cities":["Abreulândia","Aguiarnópolis","Aliança do Tocantins","Almas","Alvorada","Ananás","Angico","Aparecida do Rio Negro","Aragominas","Araguacema","Araguaçu","Araguaína","Araguanã","Araguatins","Arapoema","Arraias","Augustinópolis","Aurora do Tocantins","Axixá do Tocantins","Babaçulândia","Bandeirantes do Tocantins","Barra do Ouro","Barrolândia","Bernardo Sayão","Bom Jesus do Tocantins","Brasilândia do Tocantins","Brejinho de Nazaré","Buriti do Tocantins","Cachoeirinha","Campos Lindos","Cariri do Tocantins","Carmolândia","Carrasco Bonito","Caseara","Centenário","Chapada da Natividade","Chapada de Areia","Colinas do Tocantins","Colméia","Combinado","Conceição do Tocantins","Couto de Magalhães","Cristalândia","Crixás do Tocantins","Darcinópolis","Dianópolis","Divinópolis do Tocantins","Dois Irmãos do Tocantins","Dueré","Esperantina","Fátima","Figueirópolis","Filadélfia","Formoso do Araguaia","Fortaleza do Tabocão","Goianorte","Goiatins","Guaraí","Gurupi","Ipueiras","Itacajá","Itaguatins","Itapiratins","Itaporã do Tocantins","Jaú do Tocantins","Juarina","Lagoa da Confusão","Lagoa do Tocantins","Lajeado","Lavandeira","Lizarda","Luzinópolis","Marianópolis do Tocantins","Mateiros","Maurilândia do Tocantins","Miracema do Tocantins","Miranorte","Monte do Carmo","Monte Santo do Tocantins","Muricilândia","Natividade","Nazaré","Nova Olinda","Nova Rosalândia","Novo Acordo","Novo Alegre","Novo Jardim","Oliveira de Fátima","Palmas","Palmeirante","Palmeiras do Tocantins","Palmeirópolis","Paraíso do Tocantins","Paranã","Pau d'Arco","Pedro Afonso","Peixe","Pequizeiro","Pindorama do Tocantins","Piraquê","Pium","Ponte Alta do Bom Jesus","Ponte Alta do Tocantins","Porto Alegre do Tocantins","Porto Nacional","Praia Norte","Presidente Kennedy","Pugmil","Recursolândia","Riachinho","Rio da Conceição","Rio dos Bois","Rio Sono","Sampaio","Sandolândia","Santa Fé do Araguaia","Santa Maria do Tocantins","Santa Rita do Tocantins","Santa Rosa do Tocantins","Santa Tereza do Tocantins","Santa Terezinha Tocantins","São Bento do Tocantins","São Félix do Tocantins","São Miguel do Tocantins","São Salvador do Tocantins","São Sebastião do Tocantins","São Valério da Natividade","Silvanópolis","Sítio Novo do Tocantins","Sucupira","Taguatinga","Taipas do Tocantins","Talismã","Tocantínia","Tocantinópolis","Tupirama","Tupiratins","Wanderlândia","Xambioá"]}]};

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eltoncarvalho/Documents/git/tim-multi-step-form/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map