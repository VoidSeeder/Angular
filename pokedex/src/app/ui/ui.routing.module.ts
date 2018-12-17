import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { AdicionarComponent } from './principal/adicionar/adicionar.component';
import { DetalheComponent } from './principal/detalhe/detalhe.component';
import { EditarComponent } from './principal/editar/editar.component';
import { SobreComponent } from './sobre/sobre.component';
import { Error404Component } from './error404/error404.component';

const UI_ROUTES: Routes = [
  {path: 'principal', component: PrincipalComponent, children: [
    { path: 'adicionar', component: AdicionarComponent },
    { path: 'detalhe/:id', component: DetalheComponent },
    { path: 'editar/:id', component: EditarComponent }
  ]},
  { path: 'sobre', component: SobreComponent },
  { path: '', redirectTo: 'principal', pathMatch: 'full'},
  { path: '**', component: Error404Component }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(UI_ROUTES)
  ]
})
export class UiRoutingModule { }
