import { Component, OnInit } from '@angular/core';
import { Personne } from '../entities/Personne';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit {
  jamel: Personne = {
    id: 1,
    nom: 'jamel'
  };
  mustapha: Personne = {
    id: 2,
    nom: 'mustapha'
  };
  hamza: Personne = {
    id: 3,
    nom: 'hamza'
  };
  listpersonne =[this.jamel,this.hamza,this.mustapha];




  constructor() { }

  ngOnInit() {
  }

}
