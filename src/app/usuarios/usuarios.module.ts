import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UsuariosService } from './shared/usuarios.service';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [UsuariosComponent, NovoUsuarioComponent, EditarUsuarioComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    UsuariosRoutingModule
  ],
  providers: [UsuariosService]
})
export class UsuariosModule { }
