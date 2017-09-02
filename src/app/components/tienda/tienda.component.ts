import {Component} from '@angular/core';

@Component({
	selector:'tienda',
	templateUrl:'tienda.component.html',
	styleUrls:['tienda.component.css']
})

export class TiendaComponent {

	public titulo;
	public nombreDelparque: string;

	constructor(){
		this.titulo='Esta es la tienda';
	}

	mostrarNombre(){
		console.log(this.nombreDelparque);
	}
}