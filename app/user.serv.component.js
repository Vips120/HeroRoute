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
var core_1 = require("@angular/core");
var user_services_1 = require("./user.services");
var UserServComponent = (function () {
    function UserServComponent(userServices) {
        this.userServices = userServices;
        this.users = this.userServices.getUsers();
    }
    UserServComponent = __decorate([
        core_1.Component({
            selector: "user",
            template: "\n    <ul>\n      <li *ngFor=\"let user of users\">\n      \n       {{user.id}}\n       {{user.name}}\n       </li>\n    \n     </ul>\n     ",
            providers: [user_services_1.UserServices],
        }), 
        __metadata('design:paramtypes', [user_services_1.UserServices])
    ], UserServComponent);
    return UserServComponent;
}());
exports.UserServComponent = UserServComponent;
//# sourceMappingURL=user.serv.component.js.map