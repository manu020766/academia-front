import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module'

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';


@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AlumnosRoutingModule
  ]
})
export class AlumnosModule { }
