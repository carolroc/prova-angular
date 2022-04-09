import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnaDisciplinasServiceService } from '../ana-disciplinas-service.service';

@Component({
  selector: 'app-ana-detalhes-component',
  templateUrl: './ana-detalhes-component.component.html',
  styleUrls: ['./ana-detalhes-component.component.css']
})
export class AnaDetalhesComponentComponent implements OnInit {
  item;
  constructor(private route: ActivatedRoute,public disciplina: AnaDisciplinasServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = this.disciplina.list[params.get('id')];
    })
  }

}