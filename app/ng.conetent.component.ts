import {Component} from "@angular/core";
@Component({

      selector:"bingo",
      template:
          `
            <ul>
            <li *ngFor = "let course of courses ,  let i=index">
              {{i+1}} - {{course}}
              </li>
             </ul>
            {{movie.title | uppercase}}
             <br>
             {{movie.authors | uppercase}}
             <br>
             {{movie.publish | number:'2.2-2'}}
             <br>
             <div>
             {{movie.price | currency:'INR':true}}
              </div>

             <div class="panel panel-default">
               <div class="panel-header header">
               <h3 text-align="center">ITs a header</h3>
               </div>
                <div class="panel panel-body body">
                
            <h3>I'll not give up unitll i win.</h3>
                </div>
             
              </div>



           `
})

export class UserComponent
{
    
   courses  = ["angular2" , "PHp" , "mysqli"];

    movie = {
       title:"The Dark Knight",
       authors:"sparta",
       publish : 20000,
       price:2000
         
    }
}