import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  formGroup: FormGroup;

  customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) => `${label} necessário(a)!`
    }, {
      error: 'pattern',
      format: (label, error) => `${label} incorreto(a)!`
    }, {
      error: 'minlength',
      format: (label, error) => `${label} deve ter no mínimo 8 caracteres.`
    }, {
      error: 'maxlength',
      format: (label, error) => `${label} deve ter no máximo 20 caracteres.`
    }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Senha: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }
}
