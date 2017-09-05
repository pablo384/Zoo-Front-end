import {Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
  <div *ngIf="emailContacto">
    <h4>{{title}}</h4>
    Email de contacto: <strong>{{emailContacto}}</strong>
    <button (click)="borrarEmail()">Eliminar email de contacto</button>
  </div>
  `
})
export class MostrarEmailComponent implements OnInit, DoCheck {

  title = 'Mostrar Email';
  emailContacto: string;

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }


  ngDoCheck(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }


  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
