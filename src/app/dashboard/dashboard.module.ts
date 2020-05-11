import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../shared/material.module'
import { RouterModule } from '@angular/router'
import { NavigationModule } from '../shared/navigation/navigation.module'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NavigationModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
