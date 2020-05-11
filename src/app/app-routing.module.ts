import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent,
    children: [
      { path: 'materias', loadChildren: () => import('./materias/materias.module').then(m => m.MateriasModule) },
      { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
      { path: 'alumnos', loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule) },
      { path: 'profesores', loadChildren: () => import('./profesores/profesores.module').then(m => m.ProfesoresModule) },
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
