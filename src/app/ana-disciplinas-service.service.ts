import { Injectable } from '@angular/core';

interface AnaDisciplinasService {
  cod: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
}

@Injectable()
export class AnaDisciplinasServiceService {
  list: Array<AnaDisciplinasService> = [];
  constructor() {}

  add(
    cod: string,
    nome: string,
    diaDaSemana: string,
    horario: string,
    ementa: string
  ) {
    this.list.push({ cod, nome, diaDaSemana, horario, ementa });
    alert({ cod, nome, diaDaSemana, horario, ementa });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }

  getList() {
    return this.list;
  }
}
