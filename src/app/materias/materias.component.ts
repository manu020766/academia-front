import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/navigation/navigation.service'
import { Router } from '@angular/router';

import {NestedTreeControl} from '@angular/cdk/tree'
import {MatTreeNestedDataSource} from '@angular/material/tree'

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

  private readonly MateriasDB = [
    {
      categoria: "Desarrollo",
      subCategoria: "Desarrollo Web",
      nombre: "JavaScript"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Desarrollo Web",
      nombre: "React"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Desarrollo Web",
      nombre: "Angular"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Desarrollo Web",
      nombre: "Node"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Desarrollo Web",
      nombre: "Vue"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Desarrollo Web",
      nombre: "Svelte"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Aplicaciones móviles",
      nombre: "Desarrollo en Android"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Aplicaciones móviles",
      nombre: "Desarrollo en iOs"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Aplicaciones móviles",
      nombre: "Ionic"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Aplicaciones móviles",
      nombre: "NativeScript"
    },
    {
      categoria: "Desarrollo",
      subCategoria: "Aplicaciones móviles",
      nombre: "React Native"
    },
    {
      categoria: "Informática y Software",
      subCategoria: "Hardware",
      nombre: "Arduino"
    },
    {
      categoria: "Informática y Software",
      subCategoria: "Hardware",
      nombre: "Raspberry Pi"
    },
    {
      categoria: "Informática y Software",
      subCategoria: "Sistemas operativos",
      nombre: "Linux"
    },
    {
      categoria: "Informática y Software",
      subCategoria: "Sistemas operativos",
      nombre: "Windows Server"
    },
    {
      categoria: "Informática y Software",
      subCategoria: "DevOps",
      nombre: "Docker"
    },
    {
      categoria: "Informática y Software",
      subCategoria: "DevOps",
      nombre: "Kubernetes"
    }
  ]

  // { name: 'Desarrollos' }, 
  // { name: 'Informática y Software' }

  // TREE_DATA: FoodNode[] = []

  categorias = []       // Categorias para el autocompletado del input de categorias
  subCategorias = []    // Contiene la relación de Categoria -> subCategoria
  subCategoria = []     // Dependiendo Categoria del input de Categoria, se optienen las subcategorias del input de subCategoria 
  subCategoriasMaterias = [] // Relacion Categorias -> subCategorias -> materias
  
  constructor(public navigatioService: NavigationService, private router: Router) { 
    
    let categoriaAnterior = ''
    let subCategoriaAnterior = ''
    let nombres = []

    this.MateriasDB.forEach((materia) => {
       
      if (categoriaAnterior === '') { nombres.push({ materia: materia.nombre}) }

      if (categoriaAnterior !== '') {
        if  ((categoriaAnterior === materia.categoria) && (subCategoriaAnterior === materia.subCategoria)) {
          nombres.push({ materia: materia.nombre})
        } else {
            this.subCategoriasMaterias.push({ categoria: categoriaAnterior, subCategoria: subCategoriaAnterior, materias: nombres })
            nombres = []
            nombres.push({ materia: materia.nombre})
        }
      }

      if (categoriaAnterior !== materia.categoria) {       
        categoriaAnterior = materia.categoria

        console.log(`Categoria: ${categoriaAnterior}`)
        this.categorias.push(categoriaAnterior)
      }

      if (categoriaAnterior === materia.categoria) {
        if (subCategoriaAnterior !== materia.subCategoria) {
          subCategoriaAnterior = materia.subCategoria
          

          console.log(`subCategoria: ${subCategoriaAnterior}`)
          this.subCategorias.push({ categoria: categoriaAnterior, subCategoria: subCategoriaAnterior })
        }       
      }
      
      console.log(`Nombre: ${materia.nombre}`)
    })
    if (categoriaAnterior !== '') {
        this.subCategoriasMaterias.push({ categoria: categoriaAnterior, subCategoria: subCategoriaAnterior, materias: nombres })
    }
    


    console.log('-------------------------')
    console.log(this.categorias)
    console.log(this.subCategorias)
    console.log(this.subCategoriasMaterias)
    console.log('-------------------------')

    console.log('Desarrollo:')
    console.log(this.subCategorias.filter( s => s.categoria === "Desarrollo").map(sub => (sub.subCategoria)))

    console.log('Informática y Software:')
    console.log(this.subCategorias.filter( s => s.categoria === "Informática y Software").map(sub => (sub.subCategoria)))
    console.log('-------------------------')

    this.dataSource.data = TREE_DATA
  }

  ngOnInit(): void {
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
