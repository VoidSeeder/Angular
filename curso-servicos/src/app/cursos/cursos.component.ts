import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    /* o private no costructor faz com que cursosService seja um atributo da classe
    CursosComponent automaticamente */
    //this.cursosService = new CursosService();
    //this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
      /*
      A linha acima quivale a:
      function(curso){
        console.log(curso);
      }
      */
    );
  }

}
