import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(x: any): number {
    let idadeRecebida = new Date(x).getFullYear();
    let hoje = new Date().getUTCFullYear()

    return (hoje - idadeRecebida ) ;
  }
}
