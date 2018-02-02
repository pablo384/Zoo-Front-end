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
      title: 'Contact Page',
      description: 'Contact me through this awesome search engine optimized Angular component',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contacto'
    });
  }
  guardarEmail() {
    //local storage
    localStorage.setItem('emailContacto', this.emailContacto);
    //console.log(localStorage.getItem('emailContacto'))

  }
}
