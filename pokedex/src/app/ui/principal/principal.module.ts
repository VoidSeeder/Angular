import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrincipalComponent } from './principal.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EditarComponent } from './editar/editar.component';
import { UiRoutingModule } from '../ui.routing.module';
import { PrincipalService } from './principal.service';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    FormsModule
  ],
  declarations: [
    PrincipalComponent,
    AdicionarComponent,
    DetalheComponent,
    EditarComponent
  ],
  exports: [
    PrincipalComponent
  ],
  providers: [
    PrincipalService
  ]
})
export class PrincipalModule { }