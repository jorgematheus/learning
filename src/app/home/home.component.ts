import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
    console.log('usuario autenticado: ', this.AuthService.isAutenticado())
  }

}
