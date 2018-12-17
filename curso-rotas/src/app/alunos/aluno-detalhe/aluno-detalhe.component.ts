import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  incricao: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunsoService: AlunosService
  ) { }

  ngOnInit() {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunsoService.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['alunos', this.aluno.id, "editar"]);
  }
}
