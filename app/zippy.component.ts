import {Component,Input} from "@angular/core";
@Component({

 selector:'zippy',
templateUrl:"./app/zippy_component.html",
 styleUrls:['./app/zippy_component.css']
})

export class ZippyComponent {
title = {
     zippy1:"Who Can Contact me",
     zippy2:"Who Can See me"

}

      @Input()  ZippChange = false;
      @Input()  ZippyPanda = false;
      @Input()  ZippyPoto = true;
      ZippyControl()
      {
        this.ZippChange =!this.ZippChange; 
    
      }

      ZippyTanda()
      {
  this.ZippyPanda = !this.ZippyPanda;
      }

      CntrlPanel()
      {
 this.ZippyPoto = !this.ZippyPoto;
      }
   
}