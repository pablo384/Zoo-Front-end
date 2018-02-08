import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {fadeIn} from '../animation';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'tienda',
  templateUrl: 'tienda.component.html',
  styleUrls: ['tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ]),
    fadeIn
  ]
})

export class TiendaComponent implements OnInit{

  public titulo;
  public nombreDelparque: string;
  public miParque;
  public status;

  constructor(private seo: SeoService) {
    this.titulo = 'Esta es la tienda';
    this.status = 'inactive';
  }

  ngOnInit(): void {
    $('#textojq').hide();
    $('#botonjq').click(function () {
      console.log('clic desde jquery');
      $('#textojq').slideToggle();
    });


    $('#caja').dotdotdot({});

    this.seo.generateTags({
      title: 'Tienda web',
      description: 'Esto es una prueba de la pagina de Tienda',
      image: 'https://i.imgur.com/kdPI20L.png',
      slug: 'tienda'
    });
  }

  mostrarNombre() {
    console.log(this.nombreDelparque);
  }

  verDatosParque(event) {
    console.log(event);
    this.miParque = event;
  }
  textoRichEditor(event) {
    console.log(event);
  }
  cambiarEstado(status) {
    if (status === 'inactive') {
      this.status = 'active';
    }else {
      this.status = 'inactive';
    }
  }
}
