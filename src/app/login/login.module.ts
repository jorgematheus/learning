import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
