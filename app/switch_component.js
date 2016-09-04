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
var SwitchServices = (function () {
    function SwitchServices() {
        this.cousres = 'tab';
    }
    SwitchServices = __decorate([
        core_1.Component({
            selector: "SwitchUser",
            template: "\n           <ul class=\"nav nav-pills\">\n         <li [class.active]=\"courses=='tab'\"> <a  (click)=\"courses='tab'\">Courses</a></li>\n         <li [class.active]=\"courses=='pills'\"><a  (click)=\"courses='pills'\">Sujected</a></li>\n         </ul>\n         <div [ngSwitch]=\"courses\">\n         <template [ngSwitchCase]=\"'tab'\">COURSES ARE HERE</template>\n         <template [ngSwitchCase]=\"'pills'\" >SUBJECTED ARE HERE....</template>\n         </div>\n           ",
            styles: ["\n                a {\n                  cursor:pointer;\n                }\n                "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SwitchServices);
    return SwitchServices;
}());
exports.SwitchServices = SwitchServices;
//# sourceMappingURL=switch_component.js.map