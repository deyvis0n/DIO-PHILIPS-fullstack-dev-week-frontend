import { Component, OnInit } from '@angular/core';
import { Regiao } from '../model/regiao';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent implements OnInit {

  regioes: Regiao[] = [];

  constructor(private RegiaoService:RegiaoService) { }

  ngOnInit(): void {
    this.regioes = this.RegiaoService.listRegioes();
  }

}
