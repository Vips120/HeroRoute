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
var form_route_1 = require('./form_route');
var FormValid = (function () {
    function FormValid() {
        this.powers = ["", "Superpower", "Angrybirds", "Noughty"];
        this.model = new form_route_1.Formhero(1, "", "", this.powers[0]);
        this.submitted = false;
    }
    FormValid.prototype.onSubmit = function ($event) {
        this.submitted = true;
        console.log($event);
    };
    FormValid = __decorate([
        core_1.Component({
            selector: "form-value",
            template: "\n\n\n             <form #Hero = \"ngForm\" (ngSubmit)=\"onSubmit(Hero.form)\">\n             {{model | json}}\n               <div class=\"form-group\">\n                  <label for=\"firstname\">Firstname</label>\n               <input type=\"text\" \n                 id=\"firstname\"\n                 name=\"firstname\"\n                 class=\"form-control\"\n                  [(ngModel)] = \"model.firstname\"\n                   #firstname = \"ngModel\"\n                   required \n                   minlength=\"5\"\n                   maxlength=\"25\"\n                  > \n                  <div *ngIf=\"firstname.errors && (firstname.touched || firstname.dirty)\">\n                  <div class=\"alert alert-danger\" *ngIf=\"firstname.errors.required\">\n                   Firstname must be required.\n                  </div>\n                   <div class=\"alert alert-danger\" *ngIf=\"firstname.errors.minlength\">\n                    firstname maximum value should be 5\n                   </div>\n                   <div class=\"alert alert-danger\" *ngIf=\"firstname.errors.maxlength\">\n                    firstname maximum value should be 25\n                   </div>\n\n                </div>\n                </div>\n\n\n                <div class=\"from-group\">\n                      <label for=\"lastname\">Lastname</label>\n                      <input type=\"text\" \n                          id=\"lastname\"\n                          class=\"form-control\"\n                          name=\"lastname\"\n                          [(ngModel)]=\"model.lastname\"\n                           #lastname = \"ngModel\"\n                           required\n                           >\n\n\n                           <div *ngIf=\"lastname.errors && (lastname.touched || lastname.dirty)\">\n                         <div class=\"alert alert-danger\" \n                         *ngIf=\"lastname.errors.required\">\n                         Lastname must be required\n                         </div>\n                         </div>\n                 </div>\n <div class=\"form-group\">\n                  <select class=\"form-control\" \n                  id=\"power\" \n                  name=\"power\"\n                  required\n                  [(ngModel)]=\"model.power\"\n                  #power  = \"ngModel\"\n                  >\n                  <option *ngFor=\"let p of powers\" [value] = \"p\">\n                   {{p}}\n                  </option>        \n                 </select>  \n                 <div class=\"alert alert-danger\" *ngIf=\"power.touched && !power.valid\">\n                 Choose your power buddy.\n                 </div>          \n   </div>\n   <button type=\"submit\" class=\"btn btn-md btn-info\" [disabled]=\"!Hero.valid\">Submit</button>\n              </form>\n            \n            "
        }), 
        __metadata('design:paramtypes', [])
    ], FormValid);
    return FormValid;
}());
exports.FormValid = FormValid;
//# sourceMappingURL=form.validation.js.map