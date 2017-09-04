import {
  Component, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, OnInit
} from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: 'parques.component.html',
  styleUrls: ['parques.component.css']
})

export class ParquesComponent implements OnChanges, OnInit {


  @Input() nombre: String;
  @Input('metros_c') metros: number;
  public vegetacion: String;
  public abierto: boolean;

  @Output() pasameDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'Atlas';
    this.abierto = true;
  }

  //ciclos de vida de los componentes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Existen cambios en las propiedades');
  }

  ngOnInit(): void {
    console.log('Meotodo OnInit Lanzado');
  }

  emitirEvento() {
    this.pasameDatos.emit({

      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto

    });

  }
}
