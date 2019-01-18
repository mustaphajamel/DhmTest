import {Component, OnInit} from '@angular/core';
import {Personne} from '../entities/Personne';
import {PersonneService} from '../service/personne.service';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css'],
  providers: [PersonneService]
})
export class ListPersonneComponent implements OnInit {
  listpersonne: Personne[];
  selectedPersonne: Personne;
  constructor(private personneService: PersonneService) {

   }


  ngOnInit() {
    this.getPersonnes();

  }
  onSelect(personne: Personne): void {
    this.selectedPersonne = personne;
  }

  getPersonnes(): void {
    this.personneService.getPersonnes()
        .subscribe(personnes => this.listpersonne = personnes);
  }
}

