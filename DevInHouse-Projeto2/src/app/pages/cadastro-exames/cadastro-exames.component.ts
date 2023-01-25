import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouteConfigLoadEnd } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cadastro-exames',
  templateUrl: './cadastro-exames.component.html',
  styleUrls: ['./cadastro-exames.component.css']
})
export class CadastroExamesComponent {

  retornoCadastro: any;
  data:any;
  editarCadastro: boolean = true;
  digitado: any;

  infoPacientes:any;
  infoPacientesFiltrados:any

  formCadastroExames = this.fb.group({
    nomeExame: ['', {
          validators: [
             Validators.required,
             Validators.maxLength(64),
             Validators.minLength(8)
          ],
          updateOn: 'blur'
      }],
      dataExame: ['', {
          validators: [
             Validators.required
          ],
          updateOn: 'blur'
      }],
      horaExame: ['', {
          validators: [
             Validators.required,
          ],
          updateOn: 'blur'
      }],
      tipoExame: ['', {
          validators: [
             Validators.required,
             Validators.maxLength(32),
             Validators.minLength(4)
          ],
          updateOn: 'blur'
      }],
      laboratorio: ['', {
          validators: [
            Validators.required,
            Validators.maxLength(32),
            Validators.minLength(4)
          ],
          updateOn: 'blur'
      }],
      urlExame: ['', {
          validators: [
          ],
          updateOn: 'blur'
      }],
      resultados: ['', {
        validators: [
           Validators.required,
           Validators.maxLength(1024),
           Validators.minLength(16)
        ],
        updateOn: 'blur'
    }]
    })

  constructor(private fb:FormBuilder, private localStorage: LocalStorageService){}

  ngOnInit(): void {
    this.data = new Date()
    console.log(this.data)

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

  cadastroExames () {

  let CadastroExames = {
      idPaciente: this.infoPacientesFiltrados[0].paciente["id"],
      idExame: Date.now(),
      nomeExame: this.formCadastroExames.controls['nomeExame'].value,
      dataExame: this.formCadastroExames.controls['dataExame'].value,
      horaExame: this.formCadastroExames.controls['horaExame'].value,
      tipoExame: this.formCadastroExames.controls['tipoExame'].value,
      laboratorio: this.formCadastroExames.controls['laboratorio'].value,
      urlExame: this.formCadastroExames.controls['urlExame'].value,
      resultados: this.formCadastroExames.controls['resultados'].value
    }
  
  this.retornoCadastro = this.localStorage.cadastraExames(CadastroExames)
  console.log(CadastroExames)
  console.log(this.retornoCadastro)
  }
}
