import { Injectable, EventEmitter } from '@angular/core';

import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  url: string = 'http://localhost:3000/pokemons';

  static mod = new EventEmitter();

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.url + '?id=' + id);
  }

  delPokemon(id: number) {
    this.http.delete(this.url + '/' + id).subscribe(data => {
      PrincipalService.mod.emit();
    });
  }

  addPokemon(pokemon: Pokemon) {
    this.http.post(this.url, pokemon).subscribe(data => {
      PrincipalService.mod.emit();
    });
  }

  editPokemon(pokemon: Pokemon) {
    this.http.delete(this.url + '/' + pokemon.id).subscribe(
      () => { this.http.post(this.url, pokemon).subscribe(
        () => { PrincipalService.mod.emit() }
      )}
    )
  }

  constructor(private http: HttpClient) { }
}
