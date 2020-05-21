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
  name: string
  children?: FoodNode[]
}

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {
  TREE_DATA_COPIA: FoodNode[] = []
  
  constructor(public navigatioService: NavigationService,
              private router: Router,
              private materiasService: MateriasService
              ) { 
  }

  ngOnInit(): void {
    // console.log('Categorias:', this.materiasService.categorias)
    // console.log('subCategorias:', this.materiasService.subCategorias)
    //console.log('subCategoriasMaterias:', this.materiasService.subCategoriasMaterias)
    // console.log('recuparar Subcategorias - por categoria', this.materiasService.recuperarSubCatagoriaPorCategoria("Desarrollo"))
    // console.log('recuparar Subcategorias - por categoria', this.materiasService.recuperarSubCatagoriaPorCategoria("Informática y Software"))
  

    let materiasTodo = this.materiasService.subCategoriasMaterias // categorias - subcategorias - materias
    let categorias = this.materiasService.categorias              // Todas las categorias

    let datosCategoria = { name: '', children: [] }
    categorias.forEach((c)=> {
      let categoria = c
      let subCategorias =  materiasTodo.filter(s => s.categoria === c)
      
      datosCategoria.name = categoria
      

      subCategorias.forEach((s) => {
        datosCategoria.children.push({ name: s.subCategoria, children: s.materias })
      })

      this.TREE_DATA_COPIA.push(datosCategoria)
      datosCategoria = { name: '', children: [] }
    })

    this.dataSource.data = this.TREE_DATA_COPIA
    console.log(this.TREE_DATA_COPIA)

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
