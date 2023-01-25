import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-prontuario-detalhe',
  templateUrl: './prontuario-detalhe.component.html',
  styleUrls: ['./prontuario-detalhe.component.css']
})
export class ProntuarioDetalheComponent implements OnInit{

  idUrl: string;
  pacientes: any
  consultas: any;
  exames: any;
  ordenado: any;

  teste: any;

  constructor(private localStorage: LocalStorageService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.idUrl = this.route.snapshot.params['id']

    this.pacientes = this.localStorage.retornaPacientes()
    this.consultas = this.localStorage.retornaConsultas()
    this.exames = this.localStorage.retornaExames()

    this.pacientes = this.pacientes.find((paciente: any) =>{ return paciente.paciente['id'] == this.idUrl})

    this.consultas = this.consultas.filter((consulta: any) =>{ return consulta.idPaciente == this.idUrl})

    this.exames = this.exames.filter((exame: any) => { return exame.idPaciente == this.idUrl} )

    this.ordenado = this.consultas.concat(this.exames).sort((a:any, b:any) => {
      return a.id - b.id;  });
    
    
    
        


    
    console.log("Paciente",this.pacientes)
    console.log("consultas",this.consultas)
    console.log("exames",this.exames)
    console.log("Tudo junto", this.ordenado)

  
  }

  mainFunction(x: any ){
    console.log("funcao",x)
    }
}

