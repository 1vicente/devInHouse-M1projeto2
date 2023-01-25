import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.css']
})
export class CadastrarConsultaComponent implements OnInit {

  retornoCadastro: any;
  data:any;
  editarCadastro: boolean = true;

  infoPacientes: any;
  infoPacientesFiltrados: any;
  digitado: any;

  formCadastroConsulta = this.fb.group({
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
      horaConsulta: ['', {
          validators: [
             Validators.required,
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

  constructor(private fb:FormBuilder, private localStorage: LocalStorageService){}

  ngOnInit(): void {
    this.data = new Date()

    this.infoPacientes = this.localStorage.retornaPacientes()
    this.infoPacientesFiltrados = this.infoPacientes
  }

  atualizaCards(){
    
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
      idConsulta: Math.floor(Math.random() * 1000),
      motivoConsulta: this.formCadastroConsulta.controls['motivoConsulta'].value,
      dataConsulta: this.formCadastroConsulta.controls['dataConsulta'].value,
      horaConsulta: this.formCadastroConsulta.controls['horaConsulta'].value,
      descricaoProblema: this.formCadastroConsulta.controls['descricaoProblema'].value,
      medicacaoReceitada: this.formCadastroConsulta.controls['medicacaoReceitada'].value,
      dosagemPrecaucoes: this.formCadastroConsulta.controls['dosagemPrecaucoes'].value
    }
  
  this.retornoCadastro = this.localStorage.cadastraConsulta(CadastroConsulta)
  console.log(CadastroConsulta)
  console.log(this.retornoCadastro)
  }
}
