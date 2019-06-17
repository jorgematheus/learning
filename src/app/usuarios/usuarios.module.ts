import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
