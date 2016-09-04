import {Component , Input , Output, EventEmitter } from "@angular/core";
@Component({
   selector:"arrow",
   template: 
      `
      <div class="asset">
      <i class="glyphicon glyphicon-chevron-up hangon" [class.highlihted]="CurrentArrow==1"
        (click)="ArrowUP()"
       >
      </i>
     <span> {{totaluser + CurrentArrow }}</span>

      <i class="glyphicon glyphicon-chevron-down hangon" [class.highlihted]="CurrentArrow==-1"
       (click)="ArrowDown()"
      >
      </i>
    </div>
    
   `,
   styles:[`
         div.asset
         {
             width:30px;
             height:80px;
         }
         .hangon
         {
             color:grey;
             cursor:pointer;
         }

         .highlihted
         {
       color:orange;

         } 
     `]

     })

export class UpArrowComponent
{
    @Input() totaluser = 0;
 @Input() CurrentArrow=0;

   @Output() logan = new EventEmitter();

ArrowUP()
{
  if(this.CurrentArrow==1)
    {
      return;
    }
    else
    {
     this.CurrentArrow++;
    }
this.logan.emit({newValue : this.CurrentArrow})
  }


ArrowDown()
{
 if(this.CurrentArrow==-1)
 {

      return this.CurrentArrow;
 }
    else
    {
      this.CurrentArrow--;
    }
  this.logan.emit({newValue:this.CurrentArrow})

}

}