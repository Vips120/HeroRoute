"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var heroic_component_1 = require('./heroic.component');
var dasboard_component_1 = require('./dasboard.component');
var app_routing_1 = require('./app.routing');
var user_serv_component_1 = require("./user.serv.component");
var simlley_component_1 = require("./simlley.component");
var up_arrow_component_1 = require("./up_arrow_component");
var switch_component_1 = require("./switch_component");
var ng_conetent_component_1 = require("./ng.conetent.component");
var zippy_component_1 = require("./zippy.component");
var forms_1 = require("@angular/forms");
var form_validation_1 = require("./form.validation");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent,
                heroic_component_1.HeroComponent,
                dasboard_component_1.DashboardComponent,
                user_serv_component_1.UserServComponent,
                simlley_component_1.SmilleyComponent,
                up_arrow_component_1.UpArrowComponent,
                switch_component_1.SwitchServices,
                ng_conetent_component_1.UserComponent,
                zippy_component_1.ZippyComponent,
                form_validation_1.FormValid
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map