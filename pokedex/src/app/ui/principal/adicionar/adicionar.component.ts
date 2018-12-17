import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PrincipalService } from './../principal.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  atk: string[];
  tp: string[];

  pokemon: Pokemon;

  incrementarAtaques() {
    this.pokemon.ataques.push("");
    this.atk.push("");
  }

  post() {
    this.pokemon.ataques = this.atk;
    this.pokemon.tipo = this.tp;
    this.principalService.addPokemon(this.pokemon);
    this.limpar();
  }

  constructor(private principalService: PrincipalService) { }

  ngOnInit() {
    this.limpar();
  }

  limpar() {
    this.pokemon = {
      id: null,
      nome: null,
      tipo: ["", ""],
      level: null,
      genero: null,

      ataques: [""],
      evolucao: null,
      preEvolucao: null
    };

    this.atk = new Array(1);
    this.tp = new Array(2);
  }

}
