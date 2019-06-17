import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { NovoCursoComponent } from './novo-curso/novo-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'new', component: NovoCursoComponent },
  { path: 'edit/:id', component: EditarCursoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
