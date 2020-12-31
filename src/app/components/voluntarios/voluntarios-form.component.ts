import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VoluntarioModel } from '../models/voluntario.model';
import { FireVoluntariosService } from '../../services/fire_voluntarios/fire-voluntarios.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voluntarios-form',
  templateUrl: './voluntarios-form.component.html',
  styles: []
})
export class VoluntariosFormComponent implements OnInit {
 
  voluntario = new VoluntarioModel();
  constructor(private voluntarioService:FireVoluntariosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== 'nuevo'){ //se carga un voluntario para modificar
      this.voluntarioService.getVoluntario(id).subscribe( (resp: VoluntarioModel) => {
        this.voluntario=resp;
        this.voluntario.id=id;
      })
    }
  }

  guardar(formulario:NgForm){
    if (formulario.invalid) { //donde se guarda o se modifica
      console.log("formulario no valido");
      return;
    }

    Swal.fire({ //mensaje de espera mientras se procesan los datos
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick:false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    
    
    //si ya existe el id, actualizara y si no creara un voluntario
    if (this.voluntario.id) {
      peticion = this.voluntarioService.actualizarVoluntario(this.voluntario);
    }
    else{
      peticion= this.voluntarioService.crearVoluntario(this.voluntario);
    }

    peticion.subscribe( resp => {
      Swal.fire({//este es el mensaje de que todo esta correcto
        title: this.voluntario.nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      });
    })
   
  
  }

}
