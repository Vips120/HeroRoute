import {Component,Input,Output,EventEmitter} from "@angular/core";
@Component({

       selector:"simlley",
       template:
             `
          <button class="btn btn-md btn-primary">Click</button> 
            <h3>hello user nice to meet you</h3>
            <i class="glyphicon"
             [class.glyphicon-star]="isActive"
             [class.glyphicon-star-empty]="!isActive"
             [style.color]="isActive ? 'red' : 'green' "
              (click)="onClick()"
              ></i>
              {{totalCount}}
              
              `

})

export class SmilleyComponent {
  @Input() totalCount = 10;
 @Input() isActive = false;
 @Output() change = new EventEmitter();
  onClick()
  {
    this.isActive = !this.isActive; 
    this.change.emit({value:this.isActive});
    this.totalCount += this.isActive ? 1 : -1;
  }
} 