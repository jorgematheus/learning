import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TopoModule } from './topo/topo.module';
import { RodapeModule } from './rodape/rodape.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent      
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    TopoModule,
    RodapeModule,    
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
