import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurmasComponent } from './turmas.component';
import { NovaTurmaComponent } from './nova-turma/nova-turma.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';

const routes: Routes = [
  { path: '', component: TurmasComponent },
  { path: 'new', component: NovaTurmaComponent },
  { path: 'edit/:id', component: EditarTurmaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
