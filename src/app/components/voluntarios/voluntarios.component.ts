import { Component, OnInit } from '@angular/core';
import { FireVoluntariosService } from '../../services/fire_voluntarios/fire-voluntarios.service';
import { VoluntarioModel } from '../models/voluntario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html'

})
export class VoluntariosComponent implements OnInit {

  voluntarios: VoluntarioModel[] = [];
  cargando = false;

  constructor( private voluntarioService: FireVoluntariosService) { }

  ngOnInit(): void {
    this.cargando=true;
    this.voluntarioService.getVoluntarios().subscribe( resp => {
      this.voluntarios = resp;
      this.cargando= false;
      
      });
  }
  borrarVoluntario( voluntario: VoluntarioModel, i: number){
    Swal.fire({
      position: 'center',
      title: '¿Esta seguro?',
      text: `Esta seguro que desa borrar a ${voluntario.nombre}`,
      icon: 'question',
      showConfirmButton:true,
      showCancelButton:true,
    }).then( resp => {
      if (resp.value) {
        this.voluntarios.splice(i,1);
        this.voluntarioService.borrarVoluntario(voluntario.id).subscribe();
      }
    });
  }

}
