import {
  Component, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, OnInit, DoCheck
} from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: 'parques.component.html',
  styleUrls: ['parques.component.css']
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck {


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

  //se ejecuta siempre que se le hacen cambios a un componente
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Existen cambios en las propiedades');
  }

  //siempre que se inicie el componente, Una sola vez
  ngOnInit(): void {
    console.log('Meotodo OnInit Lanzado');
  }

  //siempre que se ejecuta un cambio en la aplicacion por ejemplo rutas, cambio/evento en angular,
  // --despues de iniciar el componente
  ngDoCheck(): void {
    console.log("Esto es doCHeck")
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
