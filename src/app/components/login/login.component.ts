import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  
})
export class LoginComponent implements OnInit {


  correo: string;
  password: string;
  conecta: boolean = false;
  
  constructor(public router: Router, public userServ: LoginService) { }

  ngOnInit(): void {
   
  }


  ingresar(formulario: NgForm){

    this.correo = formulario.value.correo;
    this.password = formulario.value.password;

    this.conecta = this.userServ.login(this.correo,this.password);
    if (this.conecta) {
      this.router.navigate(['/home']); 
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Incorrecto',
        text: 'Credenciales incorrectas'
       
      })
    }
    
  }

}
