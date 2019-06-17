import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConteudosRoutingModule } from './conteudos-routing.module';
import { ConteudosComponent } from './conteudos.component';
import { NovoConteudoComponent } from './novo-conteudo/novo-conteudo.component';
import { EditarConteudoComponent } from './editar-conteudo/editar-conteudo.component';

@NgModule({
  declarations: [ConteudosComponent, NovoConteudoComponent, EditarConteudoComponent],
  imports: [
    CommonModule,
    ConteudosRoutingModule
  ]
})
export class ConteudosModule { }
