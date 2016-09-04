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
var UserComponent = (function () {
    function UserComponent() {
        this.courses = ["angular2", "PHp", "mysqli"];
        this.movie = {
            title: "The Dark Knight",
            authors: "sparta",
            publish: 20000,
            price: 2000
        };
    }
    UserComponent = __decorate([
        core_1.Component({
            selector: "bingo",
            template: "\n            <ul>\n            <li *ngFor = \"let course of courses ,  let i=index\">\n              {{i+1}} - {{course}}\n              </li>\n             </ul>\n            {{movie.title | uppercase}}\n             <br>\n             {{movie.authors | uppercase}}\n             <br>\n             {{movie.publish | number:'2.2-2'}}\n             <br>\n             <div>\n             {{movie.price | currency:'INR':true}}\n              </div>\n\n             <div class=\"panel panel-default\">\n               <div class=\"panel-header header\">\n               <h3 text-align=\"center\">ITs a header</h3>\n               </div>\n                <div class=\"panel panel-body body\">\n                \n            <h3>I'll not give up unitll i win.</h3>\n                </div>\n             \n              </div>\n\n\n\n           "
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=ng.conetent.component.js.map