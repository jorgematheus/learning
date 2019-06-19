import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/shared/usuario.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsuariosService } from '../usuarios/shared/usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  private _mostrarmenuSubject = new Subject<boolean>();

  $mostrarMenu = this._mostrarmenuSubject.asObservable();

  constructor(private router: Router, private usuariosService: UsuariosService) {     
  }

  mostrarMenu(mostrar: boolean) {
    this._mostrarmenuSubject.next(mostrar);   
   
  }  
 
  validarUsuario(usuario: Usuario) {
    console.log(this.usuariosService.getUsuarios())
    if (usuario.email == 'jorge.matheus10@hotmail.com' &&
      usuario.senha == '123456') {
        let salt = Date.now();
        this.token = btoa(usuario.email + salt);
        window.localStorage.setItem('token', this.token);       
        
        //guardando os dados do usuário logado
        window.localStorage.setItem('nomeUsuario', 'Jorge');
        //quando tiver API:
        //nao salvar em storage o tipo, pois o usuário pode alterar via console, buscar o tipo diretamente da API
        //salvar  em uma variavel, exemplo : this.token = usuario.token (dados trazidos do banco)
        window.localStorage.setItem('tipo', 'administrador');

        window.localStorage.setItem('email', 'jorge.matheus10@hotmail.com');   

        this.router.navigate(['home'])
    }   
  }

  isAutenticado(): boolean {   
    if(localStorage.getItem('token')) {
      //quando tiver API:
      //comparar o token gravado na api com o token gravado em storage, pois o usuario pode injetar um token e fingir estar autenticado      
      this.token = localStorage.getItem('token');      
      this.mostrarMenu(true);
      return true;
    } 
    
    else {      
      this.mostrarMenu(false);
      return false;
    }
   
  }

  get NomeUsuario(): string {
    return window.localStorage.getItem('nomeUsuario');    
  }

  get TipoUsuario(): string {
    //quando tiver API:
    //buscar o tipo diretamente da API
    //não gravar no navegador pois o usuário pode alterar via console do navegador
    return window.localStorage.getItem('tipo');
  }

  get EmailUsuario(): string {
    return window.localStorage.getItem('email');
  }

  get TokenUsuario(): string {
    return this.token;
  }

  logout(): void {
    window.localStorage.removeItem('nomeUsuario');
    window.localStorage.removeItem('tipo');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('token');
    this.token = null;        
    this.router.navigate(['login'])    
  }
}
