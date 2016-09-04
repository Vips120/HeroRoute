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
var AppComponent = (function () {
    function AppComponent() {
        this.post = {
            title: "Smilley action",
            isActive: true,
            totaluser: 20,
            CurrentArrow: 0
        };
    }
    AppComponent.prototype.EventHndler = function ($event) {
        console.log("working", $event);
    };
    AppComponent.prototype.newValueCome = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>My First Angular 2 App</h1>\n  <user></user>\n <zippy></zippy>\n\n  <simlley [isActive]=\"post.isActive\" (click)=\"EventHndler($event)\"></simlley>\n   <a routerLink=\"/heroic\">Heroic</a>\n   <a routerLink = \"/dashboard\">Dashboard</a>\n  <router-outlet></router-outlet>\n  <SwitchUser></SwitchUser>\n    <arrow [CurrentArrow]=\"post.CurrentArrow\" [totaluser] = \"post.totaluser\" (logan)=\"newValueCome($event)\" ></arrow>\n    <bingo>\n    <ng-content select=\"header></ng-content>\n    </bingo>\n        <bingo>\n       <ng-content select=\"head></ng-content>\n    </bingo>\n    <bingo>\n    <ng-content selct=\"head1\"></ng-content>\n    \n    </bingo>\n    <form-value></form-value>\n    <sign-up></sign-up>\n   \n   "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map