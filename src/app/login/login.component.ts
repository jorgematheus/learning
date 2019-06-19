import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuarios/shared/usuario.model';
import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('guardarSessao', { static: true }) guardarSessao;

  usuario: Usuario;
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.formLogin = this.fb.group({
      email: ['jorge.matheus10@hotmail.com', [Validators.required, Validators.email]],
      senha: ['123456', [Validators.required]]    
    })
  }

  //acesso fácil aos controles
  get f() { return this.formLogin.controls }

  ngOnInit() {  

    /*this.authService.mostrarMenu().subscribe(item => {
      console.log('observando: ', item)
    })*/
    
    console.log('token: ', this.authService.TokenUsuario)
    console.log('usuario autenticado: ', this.authService.isAutenticado())
  }

  validarLogin() {
    this.f.email.markAsTouched();
    this.f.senha.markAsTouched();

    if (this.formLogin.valid) {

      this.usuario = new Usuario();
      this.usuario.email = this.f.email.value;
      this.usuario.senha = this.f.senha.value;

      this.authService.validarUsuario(this.usuario);
      console.log(this.authService.TokenUsuario)
    }
    
    
  }

}
