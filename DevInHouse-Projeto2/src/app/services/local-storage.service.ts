import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorageUsuarios: any;

  localStoragePacientes: any;

  localStorageConsulta: any;

  localStorageExames: any;

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

  editaPacientes(paciente:any,idpaciente:any) {
    this.localStoragePacientes = localStorage.getItem('Pacientes')
    this.localStoragePacientes = JSON.parse(this.localStoragePacientes)
    
    let pacienteTemp = this.localStoragePacientes.filter((pacienteFiltro: any) =>{ return pacienteFiltro.paciente['id'] != idpaciente })
    pacienteTemp.push(paciente)

    localStorage.setItem('Pacientes', JSON.stringify(pacienteTemp))
    return "Paciente Editado"
  }

  removerPacientes (idpaciente: any) {
    this.localStoragePacientes = localStorage.getItem('Pacientes')
    this.localStoragePacientes = JSON.parse(this.localStoragePacientes)
    let pacienteTemp = this.localStoragePacientes.filter((pacienteFiltro: any) =>{ return pacienteFiltro.paciente['id'] != idpaciente })
    localStorage.setItem('Pacientes', JSON.stringify(pacienteTemp))
    return "Paciente Removido"
  }

  cadastraConsulta (consulta:any) {

    this.localStorageConsulta = localStorage.getItem('Consultas')

    if (this.localStorageConsulta == null) {
      this.localStorageConsulta = []
    } else {
      this.localStorageConsulta = JSON.parse(this.localStorageConsulta)
    }
    
    this.localStorageConsulta.push(consulta)

    localStorage.setItem('Consultas', JSON.stringify(this.localStorageConsulta))
    return "cadastrado"
  }

  cadastraExames (exames:any) {

    this.localStorageExames = localStorage.getItem('Exames')

    if (this.localStorageExames == null) {
      this.localStorageExames = []
    } else {
      this.localStorageExames = JSON.parse(this.localStorageExames)
    }
    
    this.localStorageExames.push(exames)

    localStorage.setItem('Exames', JSON.stringify(this.localStorageExames))
    return "cadastrado"
  }

  estatisticasSistema (){

    let storages = ['Pacientes','Consultas','Exames']
    let storagesTemp;
    let controle = []
    storages.forEach(x => {
      storagesTemp = localStorage.getItem(x)
      storagesTemp = JSON.parse(storagesTemp)
      storagesTemp = storagesTemp.length
      controle.push(storagesTemp)      
    })
    return controle
  }

  retornaPacientes() {
    let localstorage = localStorage.getItem('Pacientes')
    localstorage = JSON.parse(localstorage)

    return localstorage
  }

  retornaExames () {
    let localstorage = localStorage.getItem('Exames')
    localstorage = JSON.parse(localstorage)

    return localstorage
  }

  retornaConsultas () {
    let localstorage = localStorage.getItem('Consultas')
    localstorage = JSON.parse(localstorage)

    return localstorage
  }
}