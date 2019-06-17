import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { NovoCursoComponent } from './novo-curso/novo-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';

@NgModule({
  declarations: [CursosComponent, NovoCursoComponent, EditarCursoComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
