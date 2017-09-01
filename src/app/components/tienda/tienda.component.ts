import {Component} from '@angular/core';

@Component({
	selector:'tienda',
	template:`
	<h1>{{titulo}}</h1>
	`,
	styles:['h1{color:blue}']
})

export class TiendaComponent {

	public titulo;
	constructor(){
		this.titulo='Esta es la tienda'
	}
}