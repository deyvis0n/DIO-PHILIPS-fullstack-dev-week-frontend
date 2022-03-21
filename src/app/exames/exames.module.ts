import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatSortModule } from '@angular/material/sort'
import { HttpClientModule } from '@angular/common/http'

import { ExamesRoutingModule } from './exames-routing.module';
import { ExamesComponent } from './exames/exames.component';


@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule,
    ExamesRoutingModule,
    MatCardModule,
    MatSortModule,
    HttpClientModule
  ]
})
export class ExamesModule { }
