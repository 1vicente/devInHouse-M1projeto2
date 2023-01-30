import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cadastro-exames',
  templateUrl: './cadastro-exames.component.html',
  styleUrls: ['./cadastro-exames.component.css']
})
export class CadastroExamesComponent {

  retornoCadastro: any;
  data:any;
  desabilitaEdicao: boolean = true;
  digitado: any;

  infoPacientes:any;
  infoPacientesFiltrados:any

  idExame:any;
  idUrl:any;
  exameFiltrado:any;

  formCadastroExames = this.fb.group({
      id: ['', {
        validators: [
        ],
        updateOn: 'blur'
      }],
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

  constructor(private fb:FormBuilder, private localStorage: LocalStorageService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.infoPacientes = this.localStorage.retornaPacientes()
    this.infoPacientesFiltrados = this.infoPacientes

    this.idUrl = this.route.snapshot.params['id']
    if (this.idUrl != undefined) {
      this.desabilitaEdicao = false
      let exame:any = this.localStorage.retornaExames()
      
      this.exameFiltrado = exame.find((exame: any) =>{ return exame['id'] == this.idUrl })

      this.idExame = this.exameFiltrado['id']

      let campoExameForm: any = ['id','nomeExame','dataExame','tipoExame','laboratorio','urlExame','resultados']

      campoExameForm.forEach((x:any ) => {
        this.formCadastroExames.controls[x].setValue(this.exameFiltrado[x])     })

      this.data = this.exameFiltrado.dataExame

      let paciente:any = this.infoPacientes.filter(paciente => { return paciente.paciente.id == this.exameFiltrado.idPaciente})

      this.digitado = paciente[0].paciente.nome
    }
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
      id: Date.now(),
      nomeExame: this.formCadastroExames.controls['nomeExame'].value,
      dataExame: this.formCadastroExames.controls['dataExame'].value,
      tipo: 'exame',
      tipoExame: this.formCadastroExames.controls['tipoExame'].value,
      laboratorio: this.formCadastroExames.controls['laboratorio'].value,
      urlExame: this.formCadastroExames.controls['urlExame'].value,
      resultados: this.formCadastroExames.controls['resultados'].value
    }
  
  this.retornoCadastro = this.localStorage.cadastraExames(CadastroExames)
  console.log(CadastroExames)
  console.log(this.retornoCadastro)
  }

  editaExame(){
    let editaExame = {
      idPaciente: this.infoPacientesFiltrados[0].paciente["id"],
      id: this.formCadastroExames.controls['id'].value,
      nomeExame: this.formCadastroExames.controls['nomeExame'].value,
      dataExame: this.formCadastroExames.controls['dataExame'].value,
      tipo: 'exame',
      tipoExame: this.formCadastroExames.controls['tipoExame'].value,
      laboratorio: this.formCadastroExames.controls['laboratorio'].value,
      urlExame: this.formCadastroExames.controls['urlExame'].value,
      resultados: this.formCadastroExames.controls['resultados'].value
    }
    this.retornoCadastro = this.localStorage.editaExame(editaExame, this.idExame)
  }

  removeExame() {
    this.localStorage.removeExame(this.idExame)
  }
}


[{"idPaciente":1674671068414,"id":1674671284347,"tipo":"exame","nomeExame":"Teste exame 1","dataExame":"1111-11-11","horaExame":"11111","tipoExame":"Teste exame 1Teste","laboratorio":"Teste exame 1Test","urlExame":"Teste exame 1","resultados":"Teste exame 1Teste exame 1Teste exame 1Teste exame 1Teste exame 1Teste exame 1"},{"idPaciente":1674671068414,"id":1674671310572,"tipo":"exame","nomeExame":"Teste exame 1-2","dataExame":"1111-11-11","horaExame":"11111","tipoExame":"Teste exame 1Teste","laboratorio":"Teste exame 1Test","urlExame":"","resultados":"Teste exame 1Teste exame 1Teste exame 1Teste exame 1Teste exame 1Teste exame 1"}]