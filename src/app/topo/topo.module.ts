import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule
  ],
  exports: [TopoComponent]
})
export class TopoModule { }
