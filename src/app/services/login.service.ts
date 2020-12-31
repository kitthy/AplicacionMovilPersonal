import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  conectado:string;
  constructor() {
    this.conectado = localStorage.getItem('logeado');
   }


  login( correo: string, password: string){

    if (correo === 'neko@gmail.com' && password === 'administrador') {
      this.conectado = 'si';
      localStorage.setItem('logeado', this.conectado);
      return true;
    }
    this.conectado = 'no';
    return false;
  
  }



}
