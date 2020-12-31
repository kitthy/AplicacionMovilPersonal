import { Component, OnInit } from '@angular/core';
import { Gato, GatosService } from '../../services/gatos.service';
import { Router } from '@angular/router'; //propio para manejar rutas

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html'
})
export class GatosComponent implements OnInit {

  gatos:Gato[]=[]; //iniciando el arreglo vacio
  constructor(private _gatosService:GatosService,
              private _router:Router
              ) {

   }

  ngOnInit(): void { //asignando a la variable es igual al metodo 'Gatos' (metodo inicial de la pag)
    this.gatos = this._gatosService.getGatos();
  }
  verGato(idx:number){ //es para navegar entre paginas
    this._router.navigate(['/gato',idx]);
  }

}
