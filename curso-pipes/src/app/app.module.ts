import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SetingsService } from './setings.service';

import localeBr from '@angular/common/locales/br';
import { registerLocaleData } from '@angular/common';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue: 'br'
    }*/
    SetingsService, {
      provide: LOCALE_ID,
      deps: [SetingsService],
      useFactory: (setingsService) => setingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
