import { AnimateTimings } from '@angular/animations';
import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent {

  infoPacientes:any;
  infoPacientesFiltrados: any;
  entradaFiltro: string;

  constructor (private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.infoPacientes = this.localStorage.retornaPacientes()
    this.infoPacientesFiltrados = this.infoPacientes
  }

  atualizaCards(){
    
    if (this.entradaFiltro == '') {
      this.infoPacientesFiltrados = this.infoPacientes
    } else {
      this.infoPacientesFiltrados = this.infoPacientes.filter(pacienteFiltrado => {
        return pacienteFiltrado.paciente["nome"].toLowerCase().includes(this.entradaFiltro.toLowerCase())
      })
    }
  }


}
