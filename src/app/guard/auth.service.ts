import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/shared/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token;
  private usuarioAutenticado = false;

  constructor(private router: Router) { 
    
  }

  validarUsuario(usuario: Usuario) {
    if (usuario.email == 'jorge.matheus10@hotmail.com' &&
      usuario.senha == '123456') {
        let salt = Date.now();
        this.token = btoa(usuario.email + salt);
        window.localStorage.setItem('token', this.token);  
        this.usuarioAutenticado = true;    
        this.router.navigate(['home'])
    }
    else {     
      this.usuarioAutenticado = false;
    }

  }

  isAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  getToken(): string {
    return window.localStorage.getItem('token');
  }

  logout(): void {
    window.localStorage.removeItem('token');
    this.token = null;
    this.usuarioAutenticado = false;
    this.router.navigate(['login'])    
  }
}
