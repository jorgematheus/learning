import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasComponent } from './aulas.component';
import { NovaAulaComponent } from './nova-aula/nova-aula.component';
import { EditarAulaComponent } from './editar-aula/editar-aula.component';

const routes: Routes = [
  { path: '', component: AulasComponent },
  { path: 'new', component: NovaAulaComponent },
  { path: 'edit/:id', component: EditarAulaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutingModule { }
