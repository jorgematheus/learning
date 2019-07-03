import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { LoginModule } from '../login.module';
import { Usuario } from './usuario.model';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  listUsers(): Observable<any> {
   
    //return list users
    return this.http.get('/assets/mocks/usuarios.json')
    .pipe(
      map((usuarios: { usuarios: Usuario  }) => usuarios.usuarios)
    )
  }
}
