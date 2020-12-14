import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TunaGroupComponent} from './tuna-group.component';
import {AnchoviesGroupComponent} from './anchovies-group.component';


@NgModule({
  declarations: [
    AppComponent,
    TunaGroupComponent,
    AnchoviesGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
