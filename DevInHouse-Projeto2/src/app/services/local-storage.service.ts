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

    let result = localStorageUsuariosTemp.find(element => element.email == emailLogin && element.senha == senhaLogin)
    return result
    }

  usuarioLogado(usuario: any) {
    console.log(usuario)
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
  }
  
  usuarioAtivo () {
    return !!localStorage.getItem('usuarioLogado')
  }
}