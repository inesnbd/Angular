import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './models/statistique/statistique.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


import {HttpModule} from '@angular/http';

import { StatService } from './statservice.service';


@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [StatService],
  bootstrap: [AppComponent]

})
export class AppModule { }
