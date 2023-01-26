import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AutorizacaoGuard } from './guard/autorizacao.guard';
import { AreaLogadaComponent } from './pages/area-logada/area-logada.component';
import { CadastrarConsultaComponent } from './pages/cadastrar-consulta/cadastrar-consulta.component';
import { CadastroExamesComponent } from './pages/cadastro-exames/cadastro-exames.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaProntuariosComponent } from './pages/lista-prontuarios/lista-prontuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { ProntuarioDetalheComponent } from './pages/prontuario-detalhe/prontuario-detalhe.component';

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
        path: 'detalhe-prontuario',
        component: ProntuarioDetalheComponent,
      },
      {      
        path: 'detalhe-prontuario/:id',
        component: ProntuarioDetalheComponent,
      },
      {
        path: 'cadastar-paciente',
        component: CadastroPacienteComponent
      },
      {
        path: 'cadastar-paciente/editar/:id',
        component: CadastroPacienteComponent
      },
      {
        path: 'cadastar-consulta',
        component: CadastrarConsultaComponent
      },
      {
        path: 'cadastar-exames',
        component: CadastroExamesComponent
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
