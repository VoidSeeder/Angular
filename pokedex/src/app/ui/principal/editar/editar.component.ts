import { Component, OnInit } from '@angular/core';

import { PrincipalService } from './../principal.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  atk: string[];
  tp: string[] = new Array(2);

  pokemon: Pokemon;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private principalService: PrincipalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.principalService.getPokemon(id).subscribe(
          data => {
            this.pokemon = data[0];

            this.atk = new Array(0);

            for(var i = 0; i < this.pokemon.ataques.length; i++) {
              this.atk.push(this.pokemon.ataques[i]);
            }

            this.tp[0] = this.pokemon.tipo[0];
            this.tp[1] = this.pokemon.tipo[1];
          }
        );
      }
    );
  }

  editarPokemon() {
    this.pokemon.ataques = this.atk;
    this.pokemon.tipo = this.tp;

    this.principalService.editPokemon(this.pokemon);
  }

  incrementarAtaques() {
    this.pokemon.ataques.push("");
    this.atk.push("");
  }

}
