import { Component, OnInit } from '@angular/core';
import { Regiao } from '../model/regiao';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  regioes: Regiao[] = [];

  constructor(private regiaoService:RegiaoService) { }

  ngOnInit(): void {
    this.regioes = this.regiaoService.listRegioes();
  }

}
