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
  private username: string;
  private typeUser: string;
  private email: string;

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
        let token = btoa(usuario.email + salt);
        
        this.mostrarMenu(true);

        this.token = token;
        this.username = 'Jorge';
        this.typeUser = 'Administrador';
        this.email = 'jorge.matheus10@hotmail.com';

        window.localStorage.setItem('token', token);       
        
        //guardando os dados do usuário logado
        window.localStorage.setItem('nomeUsuario', this.username);
        //quando tiver API:
        //nao salvar em storage o tipo, pois o usuário pode alterar via console, buscar o tipo diretamente da API
        //salvar  em uma variavel, exemplo : this.token = usuario.token (dados trazidos do banco)
        window.localStorage.setItem('tipo', this.typeUser);

        window.localStorage.setItem('email', this.email);   

        this.router.navigate(['home']);
    }   
  }

  isAutenticado(): boolean {      
    if(localStorage.getItem('token')) {

     if(this.token != localStorage.getItem('token')) {
      //caso o token gravado em storage for diferente do token
      //do usuário, setamos o token do storage com o valor gravado
      //na variável do usuário
      localStorage.setItem('token', this.token);     
     }

      //quando tiver API:
      //comparar o token gravado na api com o token gravado em storage, pois o usuario pode injetar um token e fingir estar autenticado             
      this.mostrarMenu(true);
      return true;
    }     
        
    //this.mostrarMenu(false);
    //return false;
   
  }

  get NomeUsuario(): string {
    if(this.username == undefined) {
      this.username = localStorage.getItem('nomeUsuario');
    }
    return this.username;
  }

  get TipoUsuario(): string {
    //quando tiver API:
    //buscar o tipo diretamente da API
    //não gravar no navegador pois o usuário pode alterar via console do navegador
    if(this.typeUser == undefined) {
      this.typeUser = localStorage.getItem('tipo');
    }
    return this.typeUser;
  }

  get EmailUsuario(): string {
    if(this.email == undefined) {
      this.email = localStorage.getItem('email');
    }
    return this.email;
  }

  get TokenUsuario(): string {
    if(this.token == undefined) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  logout(): void {
    window.localStorage.removeItem('nomeUsuario');
    window.localStorage.removeItem('tipo');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('token');

    this.token = undefined;   
    this.username = undefined;
    this.typeUser = undefined;
    this.email = undefined;    

    this.router.navigate(['login']);
    this.mostrarMenu(false);    
  }
}
