import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacaoGuard } from './guard/autorizacao.guard';
import { AreaLogadaComponent } from './pages/area-logada/area-logada.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaProntuariosComponent } from './pages/lista-prontuarios/lista-prontuarios.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', 
  pathMatch: 'full',
  redirectTo: 'login'
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'arealogada',
    component: AreaLogadaComponent,
    canActivate: [AutorizacaoGuard],
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'prontuarios',
        component: ListaProntuariosComponent
      },
      {
        path: 'cadastar-paciente',
        component: CadastroPacienteComponent
      },
    ]
  },  
  // { path: '**', 
  // redirectTo: 'arealogada' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
