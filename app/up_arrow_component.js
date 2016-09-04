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
var UpArrowComponent = (function () {
    function UpArrowComponent() {
        this.totaluser = 0;
        this.CurrentArrow = 0;
        this.logan = new core_1.EventEmitter();
    }
    UpArrowComponent.prototype.ArrowUP = function () {
        if (this.CurrentArrow == 1) {
            return;
        }
        else {
            this.CurrentArrow++;
        }
        this.logan.emit({ newValue: this.CurrentArrow });
    };
    UpArrowComponent.prototype.ArrowDown = function () {
        if (this.CurrentArrow == -1) {
            return this.CurrentArrow;
        }
        else {
            this.CurrentArrow--;
        }
        this.logan.emit({ newValue: this.CurrentArrow });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UpArrowComponent.prototype, "totaluser", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UpArrowComponent.prototype, "CurrentArrow", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UpArrowComponent.prototype, "logan", void 0);
    UpArrowComponent = __decorate([
        core_1.Component({
            selector: "arrow",
            template: "\n      <div class=\"asset\">\n      <i class=\"glyphicon glyphicon-chevron-up hangon\" [class.highlihted]=\"CurrentArrow==1\"\n        (click)=\"ArrowUP()\"\n       >\n      </i>\n     <span> {{totaluser + CurrentArrow }}</span>\n\n      <i class=\"glyphicon glyphicon-chevron-down hangon\" [class.highlihted]=\"CurrentArrow==-1\"\n       (click)=\"ArrowDown()\"\n      >\n      </i>\n    </div>\n    \n   ",
            styles: ["\n         div.asset\n         {\n             width:30px;\n             height:80px;\n         }\n         .hangon\n         {\n             color:grey;\n             cursor:pointer;\n         }\n\n         .highlihted\n         {\n       color:orange;\n\n         } \n     "]
        }), 
        __metadata('design:paramtypes', [])
    ], UpArrowComponent);
    return UpArrowComponent;
}());
exports.UpArrowComponent = UpArrowComponent;
//# sourceMappingURL=up_arrow_component.js.map