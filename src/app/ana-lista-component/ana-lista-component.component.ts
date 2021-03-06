import { Component, OnInit } from '@angular/core';
import { AnaDisciplinasServiceService } from '../ana-disciplinas-service.service';

@Component({
  selector: 'app-ana-lista-component',
  templateUrl: './ana-lista-component.component.html',
  styleUrls: ['./ana-lista-component.component.css'],
})
export class AnaListaComponentComponent implements OnInit {
  list: string[] = [];
  constructor(public disciplina: AnaDisciplinasServiceService) {
  }
  cod: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;

  ngOnInit() {}

  
}
