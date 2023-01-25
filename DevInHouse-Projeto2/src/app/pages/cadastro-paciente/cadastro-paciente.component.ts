import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ViacepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {
  retornoCadastro:any;

  cidade:any;
  bairro:any;
  estado:any;
  logradouro:any;

  formCadastroPaciente = this.fb.group({
    nomeCompleto: ['', {
          validators: [
             // Validators.required,
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
          // Validators.required,
        ],
        updateOn: 'blur'
        }
    ],
      cpf: [
        '', {
          validators: [
            // Validators.required,,
            Validators.pattern('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')
          ],
          updateOn: 'blur'
        }],
      rg: [
        '', {
          validators: [
            // Validators.required,
            ],
          updateOn: 'blur'
        }],
      estadoCivil: [
        '', {
          validators: [
            // Validators.required, 
          ],
          updateOn: 'blur'
        }],
      
      telefone: [
        '', {
          validators: [
            // Validators.required,
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
          // Validators.required,
          Validators.maxLength(64)
        ],
        updateOn: 'blur'
      }],
      contatoEmergencia: [
      '', {
        validators: [
          // Validators.required,
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
          // Validators.required,
          Validators.pattern('[0-9]{8}')
        ],
        updateOn: 'blur'
      }],
      cidade: [
      '', {
        validators: [
          // Validators.required,
        ],
        updateOn: 'blur'
      }],
      estado: [
      '', {
        validators: [
          // Validators.required,
        ],
        updateOn: 'blur'
      }],
      logradouro: [
      '', {
        validators: [
          // Validators.required,
        ],
        updateOn: 'blur'
      }],
      numero: [
      '', {
        validators: [
          // Validators.required,
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
          // Validators.required,
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

  constructor (private fb: FormBuilder, private localStorage: LocalStorageService, private viacep:ViacepService){}

  cadastroPaciente() {
    let CadastroPaciente = {
      paciente: {
        id: Date.now(),
        nome: this.formCadastroPaciente.controls['nomeCompleto'].value,
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
    console.log(this.retornoCadastro)
    console.log(this.formCadastroPaciente.controls['cep'])
  }

  consultaCEP() {
    console.log(this.formCadastroPaciente.controls['cep'].value)
    let retornoConsulta = this.viacep.consultaCep(this.formCadastroPaciente.controls['cep'].value)

    this.cidade = retornoConsulta[0].cidade
    this.bairro = retornoConsulta[0].bairro
    this.estado = retornoConsulta[0].estado
    this.logradouro = retornoConsulta[0].logradouro    
  }
}
