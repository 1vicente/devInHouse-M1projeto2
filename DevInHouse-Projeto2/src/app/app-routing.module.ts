import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacaoGuard } from './guard/autorizacao.guard';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', 
  pathMatch: 'full',
  redirectTo: 'login'},

  { path: 'login', 
  component: LoginComponent },

  { path: 'inicio',
   component: InicioComponent,
  canActivate: [AutorizacaoGuard] },

  { path: '**', 
  redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
