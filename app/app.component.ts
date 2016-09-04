import {Component} from '@angular/core';
@Component({
  selector: 'my-app',
  template: 
  `<h1>My First Angular 2 App</h1>
  <user></user>
 <zippy></zippy>

  <simlley [isActive]="post.isActive" (click)="EventHndler($event)"></simlley>
   <a routerLink="/heroic">Heroic</a>
   <a routerLink = "/dashboard">Dashboard</a>
  <router-outlet></router-outlet>
  <SwitchUser></SwitchUser>
    <arrow [CurrentArrow]="post.CurrentArrow" [totaluser] = "post.totaluser" (logan)="newValueCome($event)" ></arrow>
    <bingo>
    <ng-content select="header></ng-content>
    </bingo>
        <bingo>
       <ng-content select="head></ng-content>
    </bingo>
    <bingo>
    <ng-content selct="head1"></ng-content>
    
    </bingo>
    <form-value></form-value>
    <sign-up></sign-up>
   
   `
})
export class AppComponent { 

post = {
  title:"Smilley action",
  isActive : true,
    totaluser:20,
       CurrentArrow:0
}



   EventHndler($event)
   {
     console.log("working" , $event);
   } 
  
   newValueCome($event)
   {
     console.log($event);
   }

 

}
