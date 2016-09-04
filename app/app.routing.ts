import {Routes,RouterModule} from "@angular/router";
import {HeroComponent} from "./heroic.component";
import {DashboardComponent} from "./dasboard.component";

const appRoutes : Routes = [
   {
   path : '',
   redirectTo:'/dashboard',
   pathMatch:'full'
   },
   {
   path : 'heroic',
   component:HeroComponent
   },
   {
       path:'dashboard',
       component:DashboardComponent
   }

 ];

 export const routing = RouterModule.forRoot(appRoutes); 