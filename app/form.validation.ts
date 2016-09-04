import {Component} from '@angular/core';
import {Formhero} from './form_route';
@Component({
        selector:"form-value",
        template: 
            `


             <form #Hero = "ngForm" (ngSubmit)="onSubmit(Hero.form)">
             {{model | json}}
               <div class="form-group">
                  <label for="firstname">Firstname</label>
               <input type="text" 
                 id="firstname"
                 name="firstname"
                 class="form-control"
                  [(ngModel)] = "model.firstname"
                   #firstname = "ngModel"
                   required 
                   minlength="5"
                   maxlength="25"
                  > 
                  <div *ngIf="firstname.errors && (firstname.touched || firstname.dirty)">
                  <div class="alert alert-danger" *ngIf="firstname.errors.required">
                   Firstname must be required.
                  </div>
                   <div class="alert alert-danger" *ngIf="firstname.errors.minlength">
                    firstname maximum value should be 5
                   </div>
                   <div class="alert alert-danger" *ngIf="firstname.errors.maxlength">
                    firstname maximum value should be 25
                   </div>

                </div>
                </div>


                <div class="from-group">
                      <label for="lastname">Lastname</label>
                      <input type="text" 
                          id="lastname"
                          class="form-control"
                          name="lastname"
                          [(ngModel)]="model.lastname"
                           #lastname = "ngModel"
                           required
                           >


                           <div *ngIf="lastname.errors && (lastname.touched || lastname.dirty)">
                         <div class="alert alert-danger" 
                         *ngIf="lastname.errors.required">
                         Lastname must be required
                         </div>
                         </div>
                 </div>
 <div class="form-group">
                  <select class="form-control" 
                  id="power" 
                  name="power"
                  required
                  [(ngModel)]="model.power"
                  #power  = "ngModel"
                  >
                  <option *ngFor="let p of powers" [value] = "p">
                   {{p}}
                  </option>        
                 </select>  
                 <div class="alert alert-danger" *ngIf="power.touched && !power.valid">
                 Choose your power buddy.
                 </div>          
   </div>
   <button type="submit" class="btn btn-md btn-info" [disabled]="!Hero.valid">Submit</button>
              </form>
            
            `

})

export class FormValid
{

    powers = ["" ,"Superpower","Angrybirds","Noughty"];
    model = new Formhero(1,"" , "" , this.powers[0]);



  submitted = false;

  onSubmit($event)
  {
    this.submitted = true;
    console.log($event);
  }

}