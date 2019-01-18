import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../entities/Personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  @Input() personne: Personne;


  constructor() {

  }

  ngOnInit() {
  }

}
