import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map } from 'rxjs';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http: HttpClient) { }

  consultaCep(cep: any) {

    let retorno = this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(map((response:any) => ({
    cep: response.cep,
    logradouro: response.logradouro,
    bairro: response.bairro,
    cidade: response.localidade,
    estado: response.uf
    }))).toPromise()

    return retorno
   }
}