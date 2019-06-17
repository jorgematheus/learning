import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guard/auth.service';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  logout() {
    this.authService.logout();
  }
}
