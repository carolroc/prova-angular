import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  constructor() {
    this.list= [{cod: 'ISW014A',
    nome: 'Projeto de Encontrabilidade',
    diaDaSemana: 'Segunda',
    horario: '19h',
    ementa: 'Teoria Geral. Marcação para encontrabilidade. Microformatos. Conteúdo. Rede Social. Estratégias Server-Side. Como evitar armadilhas de encontrabilidade. Pesquisas. Análises'}]

  }

  add(
    cod: string,
    nome: string,
    diaDaSemana: string,
    horario: string,
    ementa: string
  ) {
    this.list.push({ cod, nome, diaDaSemana, horario, ementa });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }

  getList() {
    return this.list;
  }
}
