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
            Validators.required],
          updateOn: 'blur'
        }],
      rg: [
        '', {
          validators: [
            Validators.required],
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
            Validators.required],
          updateOn: 'blur'
        }],
      email: [
      '', {
        validators: [
          Validators.required,
          Validators.email],
        updateOn: 'blur'
      }],
      naturalidade: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      convenio: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      numeroCarteira: [
      '', {
        validators: [
          Validators.required],
        updateOn: 'blur'
      }],
      validade: [
      '', {
        validators: [
          Validators.required],
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
