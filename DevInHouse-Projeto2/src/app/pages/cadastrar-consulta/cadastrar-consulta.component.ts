import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.css']
})
export class CadastrarConsultaComponent implements OnInit {

  retornoCadastro: any;
  desabilitaEdicao: boolean = true;

  infoPacientes: any;
  infoPacientesFiltrados: any;
  digitado: any;
  idUrl: any;
  consultaFiltrado:any;
  idConsulta:any;
  data: any;


  formCadastroConsulta = this.fb.group({
      id: ['', {
        validators: [
        ],
        updateOn: 'blur'
      }],
      motivoConsulta: ['', {
          validators: [
             Validators.required,
             Validators.maxLength(64),
             Validators.minLength(8)
          ],
          updateOn: 'blur'
      }],
      dataConsulta: ['', {
          validators: [
             Validators.required
          ],
          updateOn: 'blur'
      }],
      descricaoProblema: ['', {
          validators: [
             Validators.required,
             Validators.maxLength(1024),
             Validators.minLength(16)
          ],
          updateOn: 'blur'
      }],
      medicacaoReceitada: ['', {
          validators: [
          ],
          updateOn: 'blur'
      }],
      dosagemPrecaucoes: ['', {
          validators: [
             Validators.required,
             Validators.maxLength(256),
             Validators.minLength(16)
          ],
          updateOn: 'blur'
      }]
    })

  constructor(private fb:FormBuilder, private localStorage: LocalStorageService, private route:ActivatedRoute){}

  ngOnInit(): void {

    this.infoPacientes = this.localStorage.retornaPacientes()
    this.infoPacientesFiltrados = this.infoPacientes


    this.idUrl = this.route.snapshot.params['id']
    if (this.idUrl != undefined) {
      this.desabilitaEdicao = false
      let consulta:any = this.localStorage.retornaConsultas()
      
      this.consultaFiltrado = consulta.find((paciente: any) =>{ return paciente['id'] == this.idUrl })

      this.idConsulta = this.consultaFiltrado['id']

      let campConsultaForm: any = ['id','motivoConsulta','dataConsulta','descricaoProblema','medicacaoReceitada','dosagemPrecaucoes']

      campConsultaForm.forEach((x:any ) => {
        this.formCadastroConsulta.controls[x].setValue(this.consultaFiltrado[x])     })
      
        this.data = this.consultaFiltrado.dataConsulta

        console.log(this.data)

      let paciente:any = this.infoPacientes.filter(paciente => { return paciente.paciente.id == this.consultaFiltrado.idPaciente})

      this.digitado = paciente[0].paciente.nome
      
    }
  }

  filtraPaciente(){
    
    if (this.digitado == '') {
      this.infoPacientesFiltrados = this.infoPacientes
    } else {
      this.infoPacientesFiltrados = this.infoPacientes.filter(pacienteFiltrado => {
        return pacienteFiltrado.paciente["nome"].toLowerCase().includes(this.digitado.toLowerCase())
      })
    }
  }

  cadastroConsulta () {
  let CadastroConsulta = {
      idPaciente: this.infoPacientesFiltrados[0].paciente["id"],
      id: Date.now(),
      tipo: "consulta",
      motivoConsulta: this.formCadastroConsulta.controls['motivoConsulta'].value,
      dataConsulta: this.formCadastroConsulta.controls['dataConsulta'].value,
      descricaoProblema: this.formCadastroConsulta.controls['descricaoProblema'].value,
      medicacaoReceitada: this.formCadastroConsulta.controls['medicacaoReceitada'].value,
      dosagemPrecaucoes: this.formCadastroConsulta.controls['dosagemPrecaucoes'].value
    }
  
  this.retornoCadastro = this.localStorage.cadastraConsulta(CadastroConsulta)
  }

  editaConsulta(){
    let editaConsulta = {
      idPaciente: this.infoPacientesFiltrados[0].paciente["id"],
      id: this.formCadastroConsulta.controls['id'].value,
      tipo: "consulta",
      motivoConsulta: this.formCadastroConsulta.controls['motivoConsulta'].value,
      dataConsulta: this.formCadastroConsulta.controls['dataConsulta'].value,
      descricaoProblema: this.formCadastroConsulta.controls['descricaoProblema'].value,
      medicacaoReceitada: this.formCadastroConsulta.controls['medicacaoReceitada'].value,
      dosagemPrecaucoes: this.formCadastroConsulta.controls['dosagemPrecaucoes'].value
    }
    this.retornoCadastro = this.localStorage.editaConsulta(editaConsulta, this.idConsulta)
  }

  removeConsulta() {
    this.localStorage.removeConsulta(this.idConsulta)
  }
}