import { Injectable } from '@angular/core';

@Injectable()
export class AnaDisciplinasServiceService {
  list: string[] = [];
  constructor() {}

  add(
    codigo: string,
    nome: string,
    diaDaSemana: string,
    horario: string,
    ementa: string
  ) {
    this.list.push(codigo, nome, diaDaSemana, horario, ementa);
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
