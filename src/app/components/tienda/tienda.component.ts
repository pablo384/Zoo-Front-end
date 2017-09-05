import {Component, OnInit} from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'tienda',
  templateUrl: 'tienda.component.html',
  styleUrls: ['tienda.component.css']
})

export class TiendaComponent implements OnInit{

  public titulo;
  public nombreDelparque: string;
  public miParque;

  constructor() {
    this.titulo = 'Esta es la tienda';
  }

  ngOnInit(): void {
    $('#textojq').hide();
    $('#botonjq').click(function () {
      console.log('clic desde jquery')
      $('#textojq').slideToggle();

    })
  }

  mostrarNombre() {
    console.log(this.nombreDelparque);
  }

  verDatosParque(event) {
    console.log(event);
    this.miParque=event;
  }
}
