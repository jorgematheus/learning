import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UsuariosService } from './shared/usuarios.service';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [UsuariosComponent, NovoUsuarioComponent, EditarUsuarioComponent, ListaUsuariosComponent, FormUsuarioComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    NgDatepickerModule,
    UsuariosRoutingModule
  ],
  providers: [UsuariosService]
})
export class UsuariosModule { }
