import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios: Array<object> = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {

    this.usuarios = this.usuariosService.getUsuarios();    
  }

}
