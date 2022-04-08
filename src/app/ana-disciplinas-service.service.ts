import { Injectable } from '@angular/core';

interface Disciplinas {
  cod: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
}

@Injectable()
export class AnaDisciplinasServiceService {
  list: string[] = [];
  constructor() {
    //this.list.push('ISW014A','Projeto de Encontrabilidade' ,'Segunda' ,'19h' ,'Teoria Geral. Marcação para encontrabilidade. Microformatos. Conteúdo. Rede Social. Estratégias Server-Side. Como evitar armadilhas de encontrabilidade. Pesquisas. Análises' );

    //this.list.push('ISD002A','Arquitetura Orientada a Serviços' ,'Quarta' ,'19h' ,'Construção de aplicações por meio da utilização de arquitetura orientada a serviços – SOA (Service-Oriented Architecture) e das principais tecnologias Web Services' );

    //this.list.push('ITE004A','Tópicos Especiais em Sistemas para Internet II' ,'Sexta' ,'19h' ,'Recursos e aplicações da tecnologia escolhida' );

    //this.list.push('TTG401A','Projeto de Trabalho de Graduação em Sistemas para Internet I' ,'Sábado' ,'11:30' ,'Conceito de portfólio no âmbito da educação superior. Planejamento e organização de portfólios' );
  }

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
