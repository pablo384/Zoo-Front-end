import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations:[fadeIn]
})
export class ContactComponent implements OnInit{
  title="Contacto";
  emailContacto:string;

  ngOnInit(): void {
    console.log('contact.component.ts')
  }
  guardarEmail(){
    //local storage
    localStorage.setItem('emailContacto',this.emailContacto);
    //console.log(localStorage.getItem('emailContacto'))

  }
}
