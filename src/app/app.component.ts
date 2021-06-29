import { Component } from '@angular/core';
import { StatistiqueComponent } from './models/statistique/statistique.component';


import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { StatserviceService } from './statservice.service';
import { Http, Response } from '@angular/http';
import { observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'stat';
  mesDonnees : any;

  constructor(private statservice : StatServiceService){
    this.ngOnInit()

  }

  ngOnInit(){
    this.statservice.recevoir().subscribe.mesDonnees = donnees;
    console.log(this.mesDonnees)
  };
}

