import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatSortModule } from '@angular/material/sort'


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
    MatSortModule
  ]
})
export class ExamesModule { }
