import {Component} from "@angular/core";
@Component({

     selector:"SwitchUser",
     template:
           `
           <ul class="nav nav-pills">
         <li [class.active]="courses=='tab'"> <a  (click)="courses='tab'">Courses</a></li>
         <li [class.active]="courses=='pills'"><a  (click)="courses='pills'">Sujected</a></li>
         </ul>
         <div [ngSwitch]="courses">
         <template [ngSwitchCase]="'tab'">COURSES ARE HERE</template>
         <template [ngSwitchCase]="'pills'" >SUBJECTED ARE HERE....</template>
         </div>
           `,
        styles:[`
                a {
                  cursor:pointer;
                }
                `
              
           ]
})

export class SwitchServices
{
    cousres = 'tab';
}
