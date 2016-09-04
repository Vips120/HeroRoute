import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HeroComponent} from  './heroic.component';
import {DashboardComponent} from './dasboard.component';
import {routing} from './app.routing';
import {UserServComponent} from "./user.serv.component";
import {SmilleyComponent} from "./simlley.component";
import {UpArrowComponent} from "./up_arrow_component";
import {SwitchServices} from "./switch_component";
import {UserComponent} from "./ng.conetent.component";
import {ZippyComponent} from "./zippy.component";
import {FormsModule} from "@angular/forms";
import {FormValid} from "./form.validation";

@NgModule({
  imports:      [BrowserModule,routing,FormsModule],
  declarations: [ AppComponent,
                  HeroComponent,
                  DashboardComponent,
                  UserServComponent,
                  SmilleyComponent,
                  UpArrowComponent,
                  SwitchServices,
                  UserComponent,
                  ZippyComponent,
                  FormValid
              ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
