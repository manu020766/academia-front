import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'

import { NavigationComponent } from './navigation.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent
  ],
  exports: [NavigationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class NavigationModule { }
