import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../guard/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService implements CanActivateChild {

  constructor(private authService: AuthService) { }        
  
  canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {      

      if(this.authService.isAutenticado) {
        console.log('rota filha, user autenticado', state)

        if(this.authService.TipoUsuario == 'Administrador' || this.authService.TipoUsuario == 'Editor') {

          if(this.authService.TipoUsuario == 'Editor') {
            if(state.url != '/users') {
              return false;
            }
            else return true;
          }  
          else return true;
          
        }         
      } 
      else return false;     
     
  }
}
