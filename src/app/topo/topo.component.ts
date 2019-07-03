import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  usuarioAutenticado: boolean = false;

  private inscricao: Subscription;
  public nomeUsuario: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {    
    this.inscricao = this.authService.$mostrarMenu.subscribe(isAutenticado => {     
      this.usuarioAutenticado = isAutenticado;  
      this.nomeUsuario = this.authService.NomeUsuario;        
    });      
  }  

  ngOnDestroy() {
   this.inscricao.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
