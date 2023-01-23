import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  retorno = [];

  constructor(private http: HttpClient) { }

  consultaCep(cep: any) {

    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(map((response:any) => ({
    cep: response.cep,
    logradouro: response.logradouro,
    bairro: response.bairro,
    cidade: response.localidade,
    estado: response.uf
    }))).subscribe((data) => {
      this.retorno.push(data)
      })

    return this.retorno

   }
  
}