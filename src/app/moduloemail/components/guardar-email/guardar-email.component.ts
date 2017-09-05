import {Component } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template:`
    <h4>{{title}}</h4>
    <input [(ngModel)]="emailContacto">
    <button (click)="guardarEmail()">Guardar Email</button>
  `
})
export class GuardarEmailComponent {

  title = 'Guardar Email';
  emailContacto:string;

  guardarEmail(){
    //local storage
    localStorage.setItem('emailContacto',this.emailContacto);
    //console.log(localStorage.getItem('emailContacto'))

  }

}
