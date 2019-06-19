import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
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

      console.log('ativou filha')

      if(this.authService.isAutenticado) {

        console.log('rota filha, user autenticado', state)

        if(this.authService.TipoUsuario == 'administrador' ) {
          console.log('usuario adm')
          return true;
        } 

        return false;
      }

      return false;
     
  }
}
