import {Component} from "@angular/core";
import {UserServices} from "./user.services";
@Component({
   selector:"user",
   template:
   `
    <ul>
      <li *ngFor="let user of users">
      
       {{user.id}}
       {{user.name}}
       </li>
    
     </ul>
     `,
     providers:[UserServices], 


     
})

export class UserServComponent
{
    users;
    constructor(public userServices:UserServices)
    {
        this.users = this.userServices.getUsers();
    }


}