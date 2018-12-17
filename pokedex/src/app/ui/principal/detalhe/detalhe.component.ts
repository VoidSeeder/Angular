import { Component, OnInit } from '@angular/core';

import { PrincipalService } from './../principal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  pokemon: Pokemon;
  id: number;

  constructor(
    private router: Router,
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
          }
        );
      }
    );
  }

}
