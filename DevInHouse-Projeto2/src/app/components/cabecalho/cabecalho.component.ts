import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  usuarioLogado:any;

  constructor(private localStorage: LocalStorageService) {

  }

  ngOnInit() {
    this.usuarioLogado = this.localStorage.usuarioAtivo()
  }
  
}
