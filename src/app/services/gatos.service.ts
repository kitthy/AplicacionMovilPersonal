
import { Injectable } from '@angular/core';

@Injectable()
export class GatosService {

    private gatos:Gato[] = [ //arreglo
        {
          nombre: " 5 bellos Gatitos",
          edad: "2 meses",
          contacto: "60678145",
          descripcion: "Se dan en adopcion bellos gatitos, tienen 2 meses y una semana, ya saben comer y usar el arenero. Tienen sus vacunas al dia. Son juguetones, amorosos (no son ariscos).  Son 3 hembritas y 2 machitos",
          img:"assets/img/m1.png"
        },
        {
          nombre: "Matthias",
          edad: "10 meses",
          contacto: "70242141",
          descripcion: "Fue encontrado en un terreno baldio, estaba desnutrido, con pulguitas, pero actualmente ya termino su tratamiento, es muy social y afectuoso con otros animales, esta esterilizado, con vacunas al dia. Se busca una familia que le de mucho amor.",
          img:"assets/img/m4.png"
        },
        {
          nombre: "3 Hermanos",
          edad: "Entre 3 a 4 meses",
          contacto: "60315789",
          descripcion: "Fueron abandonados en una caja cerca de un basurero, 2 de ellos estaban en tratamiento por desnutricion y pulguitas. Actualmente todos ya estan sanitos, son muy juguetones, cariñosos, buscan una familia que los ame, cuide. Zona Chimba.",
          img:"assets/img/m3.png"
        },
        {
          nombre: "Mishu y Rossel",
          edad: "3 meses",
          contacto: "74894161",
          descripcion: "Preciosos hermanitos en adopcion, buscan una familia que los adopte juntos. Uno se cayo del techo y a los 3 dias se encontro al hermanito, no pueden estar separados. Tienen compromiso de esterilizacion(vacunas al dia).",
          img:"assets/img/m2.png"
        },
        {
          nombre: "Thanos",
          edad: "2 años aprox.",
          contacto: "74984161",
          descripcion: "Fue abandonado despues de que lo atropellaran, tenia una de las patas de atras fracturada, sigue en recuperacion (ejercicios de fisioterapia para volver a caminar), busca una familia que le de una segunda oportunidad, es super amoroso.(Zona Norte)",
          img:"assets/img/m5.png"
        },
        {
          nombre: "Buscan Mama Nodriza!!",
          edad: "3 dias",
          contacto: "70001579",
          descripcion: "Fueron desechados en un basurero, dentro de una bolsa, son recien nacidos, no abrieron ni los ojitos, se busca con mucha urgencia una gata, que pueda ser mama nodriza, estos bebes necesitan del calor y amor de mama, por favor ayudanos!. (Zona Norte)",
          img:"assets/img/m6.png"
        },
        {
          nombre: "Tayson",
          edad: "2 años y medio aprox.",
          contacto: "74879165",
          descripcion: "Fue rescatado de sus ex dueños que lo maltrataban, es muy cariñoso, pero perdio la vision del lado izquierdo, esta aun con tratamiento pero se comprometen a pagarlo hasta que termine. Busca una familia que le de mucho amor. (Zona Central) ",
          img:"assets/img/m7.png"
        },
        {
          nombre: "Mushu",
          edad: "1 año y 3 meses",
          contacto: "60154795",
          descripcion: "Se cayo del techo, y estaba con breves heridas, a causa de las peleas callejeras, ya culmino con todo su tratamiento, por problemas de inquilinos, lastimosamente no lo puedo conservar, busco una familia que sea amorosa con el. (Zona Sud)",
          img:"assets/img/m8.png"
        },
        {
          nombre: "Simba",
          edad: "7 meses",
          contacto: "78961030",
          descripcion: "Este es un caso especial, simba fue atropellado, maltratado, necesita con suma urgencia cuidados intensivos, cirugia de cadera, nutricion y mucho amor. Tiene muchas ganas de vivir, es super cariñoso (pese a su situacion). Por favor si puedes ayudar a darle un hogar temporal, definivito, o ayudar economicamente, estariamos muy agradecidos! (Veterinaria EVET).",
          img:"assets/img/m9.png"
        }
      ];

    constructor(){
        
    }

    getGatos():Gato[]{ //tipo arreglo gatos
        return this.gatos;
    }
    getGato(idx:string){
      return this.gatos[idx]; //estamos capturando un dato del arreglo 
    }
    
}

export interface Gato{ //es similar a una clase
    nombre:string;
    edad:string
    contacto:string;
    descripcion:string;
    img:string;
    idx?:number;
};