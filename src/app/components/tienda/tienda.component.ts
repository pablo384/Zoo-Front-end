import {Component} from '@angular/core';

@Component({
  selector: 'tienda',
  templateUrl: 'tienda.component.html',
  styleUrls: ['tienda.component.css']
})

export class TiendaComponent {

  public titulo;
  public nombreDelparque: string;
  public miParque;

  constructor() {
    this.titulo = 'Esta es la tienda';
  }

  mostrarNombre() {
    console.log(this.nombreDelparque);
  }

  verDatosParque(event) {
    console.log(event);
    this.miParque=event;
  }
}
