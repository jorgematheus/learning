import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurmasRoutingModule } from './turmas-routing.module';
import { TurmasComponent } from './turmas.component';
import { NovaTurmaComponent } from './nova-turma/nova-turma.component';
import { EditarTurmaComponent } from './editar-turma/editar-turma.component';

@NgModule({
  declarations: [TurmasComponent, NovaTurmaComponent, EditarTurmaComponent],
  imports: [
    CommonModule,
    TurmasRoutingModule
  ]
})
export class TurmasModule { }
