import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/navigation/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {

  constructor(public navigatioService: NavigationService, private router: Router) { }

  ngOnInit(): void {
  }

  salir() {
    this.navigatioService.toggle()
    this.router.navigate(['/'])
  }
  

}
