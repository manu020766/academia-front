import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/navigation/navigation.service'
import { Router } from '@angular/router';

import {NestedTreeControl} from '@angular/cdk/tree'
import {MatTreeNestedDataSource} from '@angular/material/tree'
import { MateriasService } from './materias.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Desarrollo',
    children: [
      {
        name: 'Desarrollo Web',
        children: [
          {name: 'JavaScript'},
          {name: 'Angular'},
          {name: 'React'},
        ]
      }, {
        name: 'Aplicaciones móviles',
        children: [
          {name: 'Desarrollo en Android'},
          {name: 'Desarrollo en iOs'},
        ]
      },
    ]
  }, {
    name: 'Informática y Software',
    children: [
      {
        name: 'Sistemas operativos',
        children: [
          {name: 'Linux'},
          {name: 'Windows Server'},
        ]
      }, {
        name: 'Hardware',
        children: [
          {name: 'Arduino'},
          {name: 'Raspberry Pi'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {
  
  constructor(public navigatioService: NavigationService,
              private router: Router,
              private materiasService: MateriasService
              ) { 
    this.dataSource.data = TREE_DATA
  }

  ngOnInit(): void {
    console.log('Categorias:', this.materiasService.categorias)
    console.log('subCategorias:', this.materiasService.subCategorias)
    console.log('subCategoriasMaterias:', this.materiasService.subCategoriasMaterias)
    console.log('recuparar Subcategorias - por categoria', this.materiasService.recuperarSubCatagoriaPorCategoria("Desarrollo"))
    console.log('recuparar Subcategorias - por categoria', this.materiasService.recuperarSubCatagoriaPorCategoria("Informática y Software"))
  }

  salir() {
    this.navigatioService.toggle()
    this.router.navigate(['/'])
  }

  guardar() {
    alert('Materia guardada')
  }

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  

}
