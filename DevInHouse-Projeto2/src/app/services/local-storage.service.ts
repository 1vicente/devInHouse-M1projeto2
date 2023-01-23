import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorageUsuarios: any;

  localStoragePacientes: any;

  constructor() { }


  cadastroUsuario(x: any ){

   this.localStorageUsuarios = localStorage.getItem('Usuarios')
       

    if (this.localStorageUsuarios == null) {
      this.localStorageUsuarios = []
    } else {
      this.localStorageUsuarios = JSON.parse(this.localStorageUsuarios)
    }
    this.localStorageUsuarios.push(x)
    localStorage.setItem('Usuarios', JSON.stringify(this.localStorageUsuarios))
        
    return "cadastrado"
  }

  loginUsuario(emailLogin: string, senhaLogin: string){
    let localStorageUsuarios = localStorage.getItem('Usuarios')
    let localStorageUsuariosTemp = JSON.parse(localStorageUsuarios)

    let result = localStorageUsuariosTemp.find(element => element.email == emailLogin && element.senha == senhaLogin)
    return result
    }

  usuarioLogado(usuario: any) {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
  }
  
  usuarioAtivo () {
    let localStorageUsuarios = localStorage.getItem('usuarioLogado')
    let localStorageUsuariosTemp = JSON.parse(localStorageUsuarios)
    return localStorageUsuariosTemp
  }

  deslogarUsuario () {
    localStorage.removeItem('usuarioLogado')
  }

  cadastraPaciente(paciente: any) {

    this.localStoragePacientes = localStorage.getItem('Pacientes')

    if (this.localStoragePacientes == null) {
      this.localStoragePacientes = []
    } else {
      this.localStoragePacientes = JSON.parse(this.localStoragePacientes)
    }
    
    this.localStoragePacientes.push(paciente)

    localStorage.setItem('Pacientes', JSON.stringify(this.localStoragePacientes))
    return "cadastrado"
  }
}