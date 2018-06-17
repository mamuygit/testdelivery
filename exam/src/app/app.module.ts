import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { appRoutes } from './app.routes';
import { MatchTownComponent } from './match/town/town';
import { TownService } from './service/TownService';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms';
import { Case2Component } from './case2/case2';
import { Case2Service } from './service/Case2Service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Case2Component,
    MatchTownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRoutes,
    FormsModule
  ],
  providers: [TownService, Case2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
