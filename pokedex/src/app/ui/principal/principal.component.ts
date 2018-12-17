import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [PrincipalService]
})
export class PrincipalComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private principalService: PrincipalService) { }

  ngOnInit() {
    this.principalService.getPokemons().subscribe(
      data => {
        this.pokemons = data;
      }
    );

    PrincipalService.mod.subscribe(
      () => this.principalService.getPokemons().subscribe(
        data => {
          this.pokemons = data;
        }
      )
    );
    //this.pokemons = this.principalService.getPokemons();
  }

  excluirPokemon(id: number, nome: string) {
    if(
      confirm('Tem certeza que deseja excluir ' + nome + ' da lista?')
    ) {
      this.principalService.delPokemon(id);
    }
  }
}
