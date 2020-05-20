import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MaterialModule } from '../shared/material.module'
import { MateriasComponent } from './materias.component';


@NgModule({
  declarations: [MateriasComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MateriasRoutingModule
  ]
})
export class MateriasModule { }
