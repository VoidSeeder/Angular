import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  aluno: any;
  incricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunsoService: AlunosService
  ) { }

  ngOnInit() {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunsoService.getAluno(id);

        if(this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }
}
