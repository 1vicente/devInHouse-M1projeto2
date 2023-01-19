import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  cadastro(x: any ){

    let localStorageUsuarios = localStorage.getItem('Usuarios')
    let localStorageUsuariosTemp = JSON.parse(localStorageUsuarios)
    localStorageUsuariosTemp.push(x)

    localStorage.setItem('Usuarios', JSON.stringify(localStorageUsuariosTemp))
    return "cadastrado"
  }

  login(emailLogin: string, senhaLogin: string){
    let localStorageUsuarios = localStorage.getItem('Usuarios')
    let localStorageUsuariosTemp = JSON.parse(localStorageUsuarios)
    localStorageUsuariosTemp.forEach(element => {
      if (emailLogin == element.email) {
        console.log("Email encontrado ", emailLogin, element.email)
        if (senhaLogin == element.senha) {
        console.log("Senha confere", senhaLogin, element.senha)
        } else {
          console.log("combinação não encontrada")
        }
      }
    });
  }
}
