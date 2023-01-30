import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ViacepService } from 'src/app/services/viacep.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit{
  retornoCadastro:any;

  cidade:any;
  bairro:any;
  estado:any;
  logradouro:any;
  idUrl: any;
  pacientes:any;
  idPaciente:any;

  pacienteFiltrado:any;

  desabilitaEdicao: boolean = true

  retorno: any;

  loaderDeletar: boolean;
  loaderEditar: boolean;
  loaderSalvar: boolean;

  formCadastroPaciente = this.fb.group({
    id: [
      '', {
      validators: []
      }
    ],
    nome: ['', {
          validators: [
             Validators.required,
             Validators.minLength(8),
             Validators.maxLength(64)
          ],
          updateOn: 'blur'
      }],
      genero: [
          '', {
          validators: []
          }
      ],
      dataNascimento: [
        '', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur'
        }
    ],
      cpf: [
        '', {
          validators: [
            Validators.required,,
            Validators.pattern('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')
          ],
          updateOn: 'blur'
        }],
      rg: [
        '', {
          validators: [
            Validators.pattern('[0-9].[0-9]{3}.[0-9]{3}'),
            Validators.required,
            ],
          updateOn: 'blur'
        }],
      estadoCivil: [
        '', {
          validators: [
            Validators.required, 
          ],
          updateOn: 'blur'
        }],
      
      telefone: [
        '', {
          validators: [
            Validators.required,
            Validators.pattern('\\([0-9]{2}\\) [0-9]{4}-[0-9]{5}')
          ],
          updateOn: 'blur'
        }],
      email: [
      '', {
        validators: [
          Validators.email
        ],
        updateOn: 'blur'
      }],
      naturalidade: [
      '', {
        validators: [
          Validators.required,
          Validators.maxLength(64)
        ],
        updateOn: 'blur'
      }],
      contatoEmergencia: [
      '', {
        validators: [
          Validators.required,
          Validators.pattern('\\([0-9]{2}\\) [0-9]{4}-[0-9]{5}')
        ],
        updateOn: 'blur'
        }],
      listaAlergia: [
      '', {
        validators: []
        }],
      listaCuidados: [
      '', {
        validators: []
        }],
      convenio: [
      '', {
        validators: []
      }],
      numeroCarteira: [
      '', {
        validators: [],
        updateOn: 'blur'
      }],
      validade: [
      '', {
        validators: [],
        updateOn: 'blur'
      }],
      cep: [
      '', {
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{8}')
        ],
        updateOn: 'blur'
      }],
      cidade: [
      '', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur'
      }],
      estado: [
      '', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur'
      }],
      logradouro: [
      '', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur'
      }],
      numero: [
      '', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur'
      }],
      complemento: [
      '', {
        validators: []
      }],
      bairro: [
      '', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur'
      }],
      pontoReferencia: [
      '', {
        validators: [
        ]
      }]
      }
      );

  constructor (private fb: FormBuilder, private localStorage: LocalStorageService, private viacep:ViacepService, private route:ActivatedRoute, private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.idUrl = this.route.snapshot.params['id']
    if (this.idUrl != undefined) {
      this.desabilitaEdicao = false
      let pacientes:any = this.localStorage.retornaPacientes()
      
      this.pacienteFiltrado = pacientes.find((paciente: any) =>{ return paciente.paciente['id'] == this.idUrl })
      let pacientesTemp = pacientes.filter((paciente: any) =>{ return paciente.paciente['id'] != this.idUrl })

      this.idPaciente = this.pacienteFiltrado.paciente['id']

      let campoPacienteForm: any = ['id','nome','genero','dataNascimento','cpf','rg','estadoCivil','telefone','email','naturalidade','contatoEmergencia','listaAlergia','listaCuidados']
      let campoConvenioForm: any = ['convenio','numeroCarteira','validade']
      let campoEnderecoForm: any = ['cep','cidade','estado','logradouro','numero','complemento','bairro','pontoReferencia']
      campoPacienteForm.forEach((x:any ) => {
        this.formCadastroPaciente.controls[x].setValue(this.pacienteFiltrado.paciente[x])     })
      campoConvenioForm.forEach((x:any ) => {
        this.formCadastroPaciente.controls[x].setValue(this.pacienteFiltrado.convenio[x])    })  
      campoEnderecoForm.forEach((x:any ) => {
        this.formCadastroPaciente.controls[x].setValue(this.pacienteFiltrado.endereco[x])    }) 

    }
  }

  cadastroPaciente() {
    let CadastroPaciente = {
      paciente: {
        id: Date.now(),
        nome: this.formCadastroPaciente.controls['nome'].value,
        genero: this.formCadastroPaciente.controls['genero'].value,
        dataNascimento: this.formCadastroPaciente.controls['dataNascimento'].value,
        cpf: this.formCadastroPaciente.controls['cpf'].value,
        rg: this.formCadastroPaciente.controls['rg'].value,
        estadoCivil: this.formCadastroPaciente.controls['estadoCivil'].value,
        telefone: this.formCadastroPaciente.controls['telefone'].value,
        email: this.formCadastroPaciente.controls['email'].value,
        naturalidade: this.formCadastroPaciente.controls['naturalidade'].value,
        contatoEmergencia: this.formCadastroPaciente.controls['contatoEmergencia'].value,
        listaAlergia: this.formCadastroPaciente.controls['listaAlergia'].value,
        listaCuidados: this.formCadastroPaciente.controls['listaCuidados'].value,
      },
      convenio: { convenio: this.formCadastroPaciente.controls['convenio'].value,
                  numeroCarteira: this.formCadastroPaciente.controls['numeroCarteira'].value,
                  validade: this.formCadastroPaciente.controls['validade'].value},
      endereco: {
        cep: this.formCadastroPaciente.controls['cep'].value,
        cidade: this.formCadastroPaciente.controls['cidade'].value,
        estado: this.formCadastroPaciente.controls['estado'].value,
        logradouro: this.formCadastroPaciente.controls['logradouro'].value,
        numero: this.formCadastroPaciente.controls['numero'].value,
        complemento: this.formCadastroPaciente.controls['complemento'].value,
        bairro: this.formCadastroPaciente.controls['bairro'].value,
        pontoReferencia: this.formCadastroPaciente.controls['pontoReferencia'].value,
      }
    }

    this.retornoCadastro = this.localStorage.cadastraPaciente(CadastroPaciente)

    if ( this.retornoCadastro == 'cadastrado') {
      console.log("aqui",  this.retornoCadastro)
      this.loaderSalvar=true
      setTimeout(() => {
        this.router.navigateByUrl('/arealogada')
        }, 2000);
     }
  }

  editarPaciente (){
    let editarPaciente = {
      paciente: {
        id: this.formCadastroPaciente.controls['id'].value,
        nome: this.formCadastroPaciente.controls['nome'].value,
        genero: this.formCadastroPaciente.controls['genero'].value,
        dataNascimento: this.formCadastroPaciente.controls['dataNascimento'].value,
        cpf: this.formCadastroPaciente.controls['cpf'].value,
        rg: this.formCadastroPaciente.controls['rg'].value,
        estadoCivil: this.formCadastroPaciente.controls['estadoCivil'].value,
        telefone: this.formCadastroPaciente.controls['telefone'].value,
        email: this.formCadastroPaciente.controls['email'].value,
        naturalidade: this.formCadastroPaciente.controls['naturalidade'].value,
        contatoEmergencia: this.formCadastroPaciente.controls['contatoEmergencia'].value,
        listaAlergia: this.formCadastroPaciente.controls['listaAlergia'].value,
        listaCuidados: this.formCadastroPaciente.controls['listaCuidados'].value,
      },
      convenio: { convenio: this.formCadastroPaciente.controls['convenio'].value,
                  numeroCarteira: this.formCadastroPaciente.controls['numeroCarteira'].value,
                  validade: this.formCadastroPaciente.controls['validade'].value},
      endereco: {
        cep: this.formCadastroPaciente.controls['cep'].value,
        cidade: this.formCadastroPaciente.controls['cidade'].value,
        estado: this.formCadastroPaciente.controls['estado'].value,
        logradouro: this.formCadastroPaciente.controls['logradouro'].value,
        numero: this.formCadastroPaciente.controls['numero'].value,
        complemento: this.formCadastroPaciente.controls['complemento'].value,
        bairro: this.formCadastroPaciente.controls['bairro'].value,
        pontoReferencia: this.formCadastroPaciente.controls['pontoReferencia'].value,
      }
    }
    this.retornoCadastro = this.localStorage.editaPacientes(editarPaciente, this.idPaciente)

    if ( this.retornoCadastro == 'Paciente Editado') {
      console.log("aqui",  this.retornoCadastro)
      this.loaderEditar=true
      setTimeout(() => {
        this.router.navigateByUrl('/arealogada/cadastar-paciente')
        }, 2000);
     }
  }

  removerPaciente() {
    let exames:any = this.localStorage.retornaExames()
    exames = exames.filter((exame: any) =>{ return exame.idPaciente == this.formCadastroPaciente.controls['id'].value})

    let consultas:any = this.localStorage.retornaConsultas()
    consultas = consultas.filter((consulta: any) =>{ return consulta.idPaciente == this.formCadastroPaciente.controls['id'].value})

    if (consultas.length == 0 && consultas.length == 0) {
      this.retornoCadastro = this.localStorage.removerPacientes(this.idPaciente)
    } else {
      return console.log("O usuário tem exame e/ou consulta cadastrada")
    }
    if ( this.retornoCadastro == 'Paciente Removido') {
      console.log("aqui",  this.retornoCadastro)
      this.loaderDeletar=true
      setTimeout(() => {
        this.router.navigateByUrl('/arealogada/cadastar-paciente')
        }, 2000);
     }
  }

  async consultaCEP() {
       
    let retornoConsulta = await this.viacep.consultaCep(this.formCadastroPaciente.controls['cep'].value);
    
    this.formCadastroPaciente.controls['cidade'].setValue(retornoConsulta.cidade)
    this.formCadastroPaciente.controls['bairro'].setValue(retornoConsulta.bairro)
    this.formCadastroPaciente.controls['estado'].setValue(retornoConsulta.estado)
    this.formCadastroPaciente.controls['logradouro'].setValue(retornoConsulta.logradouro)  
  }
}
