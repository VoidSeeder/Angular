import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  modifica(sinal: string){
    switch(sinal){
      case '+':
        this.campoValorInput.nativeElement.value++;
        this.mudouValor.emit({novoValor: this.valor});
        break;
      case '-':
      this.campoValorInput.nativeElement.value--;
        this.mudouValor.emit({novoValor: this.valor});
        break;
      default:
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
