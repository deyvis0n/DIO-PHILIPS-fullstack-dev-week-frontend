import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { FaixaetariaService } from '../service/faixaetaria.service';
import { Incidencia } from '../model/incidencia';
import { IncidenciaService } from '../service/incidencia.service';
import { Regiao } from '../model/regiao';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  regioes: Regiao[] = [];
  incidencia: Incidencia[] = [];
  faixaEtaria: Faixaetaria[] = [];
  

  constructor(
    private faixaEtariaService: FaixaetariaService,
    private incidenciaService: IncidenciaService,
    private regiaoService: RegiaoService
  ) { }

  ngOnInit(): void {
    this.faixaEtariaService.listFaixaEtaria().subscribe(faixaEtaria => {this.faixaEtaria = faixaEtaria});
    this.incidenciaService.listIncidencias().subscribe(incidencia => { this.incidencia = incidencia});
    this.regiaoService.listRegioes().subscribe(regioes => {this.regioes = regioes});
  }
}
