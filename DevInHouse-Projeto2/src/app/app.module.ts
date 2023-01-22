import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { ListaProntuariosComponent } from './pages/lista-prontuarios/lista-prontuarios.component';
import { AreaLogadaComponent } from './pages/area-logada/area-logada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    MenuComponent,
    CabecalhoComponent,
    EstatisticasComponent,
    InformacoesComponent,
    CadastroPacienteComponent,
    ListaProntuariosComponent,
    AreaLogadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
