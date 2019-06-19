import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    //console.log('usuario autenticado: ', this.AuthService.isAutenticado())

    console.log('nome: ', this.authService.NomeUsuario, ' tipo: ',this.authService.TipoUsuario, ' email: ', this.authService.EmailUsuario)
  }

}
