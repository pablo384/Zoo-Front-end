import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../animation';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
})
export class ContactComponent implements OnInit{
  title= 'Contacto';
  emailContacto: string;

  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    console.log('contact.component.ts');
    this.seo.generateTags({
      title: 'Pagina de contacto',
      description: 'Esto es una prueba de la pagina de contacto',
      image: 'https://i.imgur.com/4V8hMwr.jpg',
      slug: 'contacto'
    });
  }
  guardarEmail() {
    //local storage
    localStorage.setItem('emailContacto', this.emailContacto);
    //console.log(localStorage.getItem('emailContacto'))

  }
}
