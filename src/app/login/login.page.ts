import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  clave: string = '';

  constructor(private dataService : DataServiceService, private router: Router) { }

  irAHome() {
    if (this.usuario !== '') {
      this.dataService.setUsuario(this.usuario);
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

}
