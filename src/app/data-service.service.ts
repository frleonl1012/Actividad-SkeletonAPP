import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private usuario: string = '';

  setUsuario(usuario: string) {
    this.usuario = usuario;
  }

  getUsuario() {
    return this.usuario;
  }
  
}
