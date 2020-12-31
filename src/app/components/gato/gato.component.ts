import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  GatosService } from '../../services/gatos.service';


@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html'
})
export class GatoComponent   {

  gato:any = {};
  
  constructor(private _activatedRoute:ActivatedRoute, //se usa para recibir el id de la anterior pag
              private _gatosService : GatosService ) {
    this._activatedRoute.params.subscribe( params=> { //es como un proveedor que nos da la informacion
      this.gato = this._gatosService.getGato(params['id']);

    })
   }

  
}
