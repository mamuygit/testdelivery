import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { appRoutes } from './app.routes';
import { MatchTownComponent } from './match/town/town';
import { TownService } from './service/TownService';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchTownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRoutes,
    FormsModule
  ],
  providers: [TownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
