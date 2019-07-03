import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuarios/shared/usuario.model';
import { AuthService } from '../guard/auth.service';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';

//import { LoginService } from './shared/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('guardarSessao', { static: true }) guardarSessao;

  usuario: Usuario;
  formLogin: FormGroup;
  formTeste: FormGroup;

  cepConsultado = false;


  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService   
    ) { 
    this.formLogin = this.fb.group({
      email: ['jorge.matheus10@hotmail.com', [Validators.required, Validators.email]],
      senha: ['123456', [Validators.required]]
    })

    this.formTeste = this.fb.group({
      cep: [null, [Validators.required]],
      rua: [null],
      bairro: [null],
      localidade: [null]
    })
  }

  //acesso fácil aos controles
  get f() { return this.formLogin.controls }

  ngOnInit() { 
    if(this.authService.isAutenticado) {
     this.router.navigate(['home']);
    }

    console.log('nome: ', this.authService.NomeUsuario, ' tipo: ',this.authService.TipoUsuario, ' email: ', this.authService.EmailUsuario)

    this.loginService.listUsers().subscribe((data: any) => {
      console.log(data)
    })
  }

  validarLogin() {  
    //marcando todos os campos como touched
    Object.keys(this.formLogin.controls).forEach(controle => {
      const control = this.formLogin.get(controle);
      control.markAsTouched();
    })
    

    if (this.formLogin.valid) {

      this.usuario = new Usuario();
      this.usuario.email = this.f.email.value;
      this.usuario.senha = this.f.senha.value;

      this.authService.validarUsuario(this.usuario);
      console.log(this.authService.TokenUsuario)
    }
    
    
  }

}
