import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  contadorPacientes: number;
  contadorConsultas: number;
  contadorExames: number;

  constructor (private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    let contador = this.localStorage.estatisticasSistema()
    console.log(contador)

    this.contadorPacientes = contador[0] == undefined ? 0: contador[0];
    this.contadorConsultas = contador[1] == undefined ? 0: contador[1];
    this.contadorExames = contador[2] == undefined ? 0: contador[2];
    console.log(this.contadorExames)
  }

}
