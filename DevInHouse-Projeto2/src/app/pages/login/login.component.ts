import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 emailLogin:string = "";
 senhaLogin:string = "";
 alert:boolean = false;

 onSubmit() {
  console.log(this.emailLogin, this.senhaLogin);
 }

 cadastroLogin() {
  console.log(this.emailLogin, this.senhaLogin)
 }
}
