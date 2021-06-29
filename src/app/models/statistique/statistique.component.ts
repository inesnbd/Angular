import { Component, OnInit } from '@angular/core';

import { Statistique } from './statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  title = '2005';
  title1 = '2021';


  public stat1 : Statistique;
  public stat2 : Statistique;

  public listeStatistique : Statistique[];

  listeStat = [ '16506', '4654'];

  //exercice 4

  constructor() {
    this.stat1 = new Statistique("1450");
    this.stat2 = new Statistique("1840");
  

    this.listeStatistique = [
      this.stat1, this.stat2
    ];
   }

  ngOnInit(): void {
  }

}
