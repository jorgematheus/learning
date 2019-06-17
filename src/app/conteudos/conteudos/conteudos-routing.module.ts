import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteudosComponent } from './conteudos.component';
import { NovoConteudoComponent } from './novo-conteudo/novo-conteudo.component';
import { EditarConteudoComponent } from './editar-conteudo/editar-conteudo.component';

const routes: Routes = [
  { path: '', component: ConteudosComponent },
  { path: 'new', component: NovoConteudoComponent },
  { path: 'edit/:id', component: EditarConteudoComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConteudosRoutingModule { }
