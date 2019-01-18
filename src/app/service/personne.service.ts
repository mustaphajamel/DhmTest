import { Injectable } from '@angular/core';
import { Personne } from '../entities/personne';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
    personnes: Personne[] = [
    { id: 1, nom: 'jamel' },
    { id: 2, nom: 'hamza' },
    { id: 3, nom: 'youssef' },
    { id: 4, nom: 'zakaria' },
  ];
  constructor() { }
  getPersonnes(): Observable<Personne[]> {


    return of(this.personnes);
  }
}
