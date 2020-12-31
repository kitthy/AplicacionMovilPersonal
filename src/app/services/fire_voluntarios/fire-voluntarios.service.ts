import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay} from 'rxjs/operators';//map transforma la respuesta del http
import { VoluntarioModel } from 'src/app/components/models/voluntario.model';

@Injectable({
  providedIn: 'root'
})
export class FireVoluntariosService {
  private url = 'https://firecrud-97dbe.firebaseio.com';
  constructor(private http: HttpClient) { }

  //map sirve para transformar lo q un observador puede 
   //regresar en este caso la peticion http, se almacenara en resp
  //lo q hizo es asignara el name de la rspuesta hhtp al modelo voluntario.id
  crearVoluntario( voluntario: VoluntarioModel){
    return this.http.post(`${this.url}/voluntario.json`, voluntario). //se usa para insertar
            pipe(
              map( (resp:any) => {
                voluntario.id= resp.name;
                return voluntario;
              })
            );
  }

  //.json es propio del firebase
  //... hace referencia a q utilizara todos los campos del voluntario
  actualizarVoluntario( voluntario: VoluntarioModel){
    const voluntarioTemp = { //actualiza los datos
     ...voluntario
    };

    delete voluntarioTemp.id;
    return this.http.put(`${this.url}/voluntario/${voluntario.id}.json`, voluntarioTemp); 
  }//put se utiliza para actualizar
  
  borrarVoluntario(id:string){ //para eliminar
    return this.http.delete(`${this.url}/voluntario/${id}.json`);
  }
  
  getVoluntario(id:string){//obtenemos un voluntario mediante su Id
    return this.http.get(`${this.url}/voluntario/${id}.json`);
  }

  getVoluntarios(){ //muestra todos los voluntario registrados
    return this.http.get(`${this.url}/voluntario.json`)
          .pipe(
              map(this.crearArreglovoluntarios),
              delay(0)
            );
  }


  private crearArreglovoluntarios( voluntariosObj: Object){
    const voluntarios: VoluntarioModel[] = [];
    if (voluntariosObj === null) { //para tranfomar lo que se obtiene de firebase a un arreglo
      return [];
    }

    Object.keys(voluntariosObj).forEach(key => {

      const voluntario: VoluntarioModel = voluntariosObj[key];
      voluntario.id = key;
      voluntarios.push(voluntario);
    });
    return voluntarios;
  }
}
