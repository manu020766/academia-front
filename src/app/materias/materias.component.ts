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
  TREE_DATA_COPIA: FoodNode[] = []
  
  constructor(public navigatioService: NavigationService,
              private router: Router,
              private materiasService: MateriasService
              ) { 
    //this.dataSource.data = TREE_DATA
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

      console.log(categoria)
      
      datosCategoria.name = categoria
      

      subCategorias.forEach((s) => {
        // console.log(s.subCategoria)
        //console.log('s.materias', s.materias)

        datosCategoria.children.push({ name: s.subCategoria, children: s.materias })
      })
      
      console.log('----------------------------')
      console.log(datosCategoria)

      // console.log(categoria, subCategorias)
      this.TREE_DATA_COPIA.push(datosCategoria)
      datosCategoria = { name: '', children: [] }
    })
    console.log('----------------------------')
    console.log('TREE_DATA_COPIA', this.TREE_DATA_COPIA)




    // let materiasTodo = this.materiasService.subCategoriasMaterias // categorias - subcategorias - materias
    // let categoriaAnterior = ''
    // let categoria
    // materiasTodo.forEach((materia) => {

    //   categoria = materia.categoria
    //   if (categoriaAnterior !== categoria) {
    //     categoriaAnterior = categoria
    //     categoria = { name: categoria }



    //     this.TREE_DATA_COPIA.push(categoria)
    //   }


    // })
    // console.log('TREE_DATA_COPIA', this.TREE_DATA_COPIA)
    this.dataSource.data = this.TREE_DATA_COPIA

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
