import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-lista-prontuarios',
  templateUrl: './lista-prontuarios.component.html',
  styleUrls: ['./lista-prontuarios.component.css']
})
export class ListaProntuariosComponent {

  infoPacientes:any;
  infoPacientesFiltrados: any;
  entradaFiltro: string;

  constructor (private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.infoPacientes = this.localStorage.retornaPacientes()
    this.infoPacientesFiltrados = this.infoPacientes
  }

  atualizaLista(){
    
    if (this.entradaFiltro == '') {
      this.infoPacientesFiltrados = this.infoPacientes
    } else {
      this.infoPacientesFiltrados = this.infoPacientes.filter(pacienteFiltrado => {
        return pacienteFiltrado.paciente["nome"].toLowerCase().includes(this.entradaFiltro.toLowerCase())
      })
    }
  }

}
