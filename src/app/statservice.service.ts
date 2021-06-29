import { Injectable } from '@angular/core';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class StatserviceService {
  private Url = "https://stats.naminilamy.fr";


  constructor() { }

  recevoir(){
    return this.myhttp.get.(this.Url).map(res=> res.json())
  }
}
