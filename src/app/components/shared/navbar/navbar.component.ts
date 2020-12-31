import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-navbar', 
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  logeado: string;
 
  constructor(private router:Router,  public loginServ: LoginService ) { }

  ngOnInit(): void {
    if (localStorage.getItem('conecta')) {
      localStorage.setItem('conecta',this.logeado);
     }
     else{
       this.logeado= 'no';
     }
  }

  


  desconectar(){
    localStorage.removeItem('logeado');
    this.router.navigate(['/login']);
  }
}
