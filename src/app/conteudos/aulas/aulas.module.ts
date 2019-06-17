import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulasRoutingModule } from './aulas-routing.module';
import { AulasComponent } from './aulas.component';
import { NovaAulaComponent } from './nova-aula/nova-aula.component';
import { EditarAulaComponent } from './editar-aula/editar-aula.component';

@NgModule({
  declarations: [AulasComponent, NovaAulaComponent, EditarAulaComponent],
  imports: [
    CommonModule,
    AulasRoutingModule
  ]
})
export class AulasModule { }
