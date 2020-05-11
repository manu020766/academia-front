import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard.component'
import { RouterModule } from '@angular/router'
import { NavigationModule } from '../shared/navigation/navigation.module'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
