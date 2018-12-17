import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';

const APP_ROUTES: Routes = [
    //{ path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
    { path: 'cursos',
        component: CursosComponent,
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard]
    },
    //{ path: 'curso/:id', component: CursoDetalheComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'login',
        component: LoginComponent,
    },
    { path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}