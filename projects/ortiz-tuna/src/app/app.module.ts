import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TunaGroupComponent} from './tuna-group.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {TunaGameComponent} from './tuna-game.component';
import {NgZorroModule} from './ng-zorro.module';
import {HomeComponent} from './home.component';
import {FadeInAnimationDirective} from './fade-in-animation.directive';
import {TileTintComponent} from './tile-tint.component';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    TunaGroupComponent,
    TunaGameComponent,
    HomeComponent,
    FadeInAnimationDirective,
    TileTintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
