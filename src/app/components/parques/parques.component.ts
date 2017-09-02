import {Component, Input} from '@angular/core';

@Component({
	selector:'parques',
	templateUrl:'parques.component.html',
	styleUrls:['parques.component.css']
})

export class ParquesComponent {

	@Input() nombre:String;
	@Input('metros_c') metros:number;
	public vegetacion:String
	public abierto:boolean;

	constructor(){
		this.nombre='Parque natural para caballos';
		this.metros=450;
		this.vegetacion='Atlas';
		this.abierto=true;
	}
}