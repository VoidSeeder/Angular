import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';
import { SobreComponent } from './sobre/sobre.component';
import { UiRoutingModule } from './ui.routing.module';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    HttpClientModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    SobreComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiModule { }
