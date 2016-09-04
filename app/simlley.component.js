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
var SmilleyComponent = (function () {
    function SmilleyComponent() {
        this.totalCount = 10;
        this.isActive = false;
        this.change = new core_1.EventEmitter();
    }
    SmilleyComponent.prototype.onClick = function () {
        this.isActive = !this.isActive;
        this.change.emit({ value: this.isActive });
        this.totalCount += this.isActive ? 1 : -1;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SmilleyComponent.prototype, "totalCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SmilleyComponent.prototype, "isActive", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SmilleyComponent.prototype, "change", void 0);
    SmilleyComponent = __decorate([
        core_1.Component({
            selector: "simlley",
            template: "\n          <button class=\"btn btn-md btn-primary\">Click</button> \n            <h3>hello user nice to meet you</h3>\n            <i class=\"glyphicon\"\n             [class.glyphicon-star]=\"isActive\"\n             [class.glyphicon-star-empty]=\"!isActive\"\n             [style.color]=\"isActive ? 'red' : 'green' \"\n              (click)=\"onClick()\"\n              ></i>\n              {{totalCount}}\n              \n              "
        }), 
        __metadata('design:paramtypes', [])
    ], SmilleyComponent);
    return SmilleyComponent;
}());
exports.SmilleyComponent = SmilleyComponent;
//# sourceMappingURL=simlley.component.js.map