import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { UsuarioGuardService as UsuarioGuard } from './guard/usuario-guard.service';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent, canActivateChild: [UsuarioGuard],  children: [
    { path: '', component: ListaUsuariosComponent },
    { path: 'list', component: ListaUsuariosComponent },
    { path: 'new', component: NovoUsuarioComponent },
    { path: 'edit/:id', component: EditarUsuarioComponent } 
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
