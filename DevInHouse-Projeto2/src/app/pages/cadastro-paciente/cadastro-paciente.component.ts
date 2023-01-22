import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent {

  formCadastroPaciente = this.fb.group({
    nomeCompleto: ['', {
          validators: [
             Validators.required,
             Validators.minLength(8),
             Validators.maxLength(64)
          ],
          updateOn: 'blur'
      }],
      genero: [
          '', {
          validators: [],
          updateOn: 'blur'
          }
      ],
      cpf: [
        '', {
          validators: [
            Validators.required,
            Validators.pattern('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')],
          updateOn: 'blur'
        }],
      rg: [
        '', {
          validators: [
            Validators.required,
            Validators.maxLength(64)],
          updateOn: 'blur'
        }],
      estadoCivil: [
        '', {
          validators: [
            Validators.required],
          updateOn: 'blur'
        }],
      
      telefone: [
        '', {
          validators: [
            Validators.required,
            Validators.pattern('(\\d{2}) \\d \\d{4}-\\d{5}')],
          updateOn: 'blur'
        }],
      email: [
      '', {
        validators: [
          Validators.email],
        updateOn: 'blur'
      }],
      naturalidade: [
      '', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(64)],
        updateOn: 'blur'
      }],
      contatoEmergencia: [
      '', {
        validators: [
          Validators.required,
          Validators.pattern('(\\d{2}) \\d \\d{4}-\\d{5}')],
        updateOn: 'blur'
        }],
      listaAlergia: [
      '', {
        validators: [],
        updateOn: 'blur'
        }],
      listaCuidados: [
      '', {
        validators: [],
        updateOn: 'blur'
        }],
      convenio: [
      '', {
        validators: [],
        updateOn: 'blur'
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
          Validators.required],
        updateOn: 'blur'
      }],
      cidade: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      estado: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      logradouro: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      numero: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      complemento: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      bairro: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      pontoReferencia: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }]
      }
      );

  constructor (private fb: FormBuilder, private localStorage: LocalStorageService){}

}
