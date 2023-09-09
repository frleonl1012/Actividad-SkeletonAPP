import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: string = '';

  constructor(private dataServices: DataServiceService) {}

  ngOnInit() {
    this.usuario = this.dataServices.getUsuario();
  }

}
