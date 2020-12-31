import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 
  title = 'My first AGM project';
  lat = -17.392570673241288;
  lng = -66.1588952261571;
  zoom = 15;
  google: any;
  markers: marker[] = [];
  constructor() { }

  ngOnInit(): void {
    this.markers.push(
      {
        lat: -17.388779455554083,
        lng: -66.156817059504,
        label: 'NEKO FUNDACION',
        draggable: true
      });
    
  }

  clickedMarker(label: string, index: number) {
    
  }

  agregarMarcador($event: any){
    this.markers = [];
    this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true
    });
  }

  markerDragEnd(m: marker, $event: any) {
    this.markers = [];
    this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true
    });
    
  }

}

interface marker { //en vez de crear una clase creamos en la interfaz
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

