import { Component } from '@angular/core';
import { Validators, FormBuilder  } from '@angular/forms';
import { ValidaSenhaModule } from './modulos/valida-senha/valida-senha.module';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
 alert:boolean = false;
 
 emailLogin:string;
 senhaLogin:string;

 resultadoLogin:any;

 retornoCadastro:string;

 form = this.fb.group({
  cadastroEmail: ['', {
        validators: [
           Validators.required,
           Validators.email
        ],
        updateOn: 'blur'
    }],
    cadastroSenha: [
        '', {
        validators: [
          Validators.required,
          Validators.minLength(8)],
          updateOn: 'blur'
        }
    ],
    cadastroConfirmaSenha: [
      '', {
      validators: [
        Validators.required],
        updateOn: 'blur'
      }
    ]},
    {  
    validator: ValidaSenhaModule("cadastroSenha", "cadastroConfirmaSenha")
    }
    );

 constructor(private fb: FormBuilder, private cadastroService: LocalStorageService) {}

  cadastroForm() {
    let formsCadastro = {
      id: Math.floor(Math.random() * 1000),
      email: this.form.controls['cadastroEmail'].value,
      senha: this.form.controls['cadastroSenha'].value
    }
    this.retornoCadastro = this.cadastroService.cadastro(formsCadastro)
  }

  loginForm() {
    this.resultadoLogin=this.cadastroService.login(this.emailLogin, this.senhaLogin)
  }
}
