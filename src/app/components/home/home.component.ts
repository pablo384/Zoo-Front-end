import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../animation';
import {SeoService} from '../../seo.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations:[fadeIn]
})
export class HomeComponent implements OnInit{
  title="Bienvenido a NGZOO";

  constructor(private seo: SeoService) { }
  ngOnInit(): void {
    console.log('home.component.ts');
    this.seo.generateTags({
      title: 'Home Page',
      description: 'My SEO friendly home page in Angular 5',
      image: 'https://instafire-app.firebaseapp.com/assets/camel.jpeg',
      slug: 'home'
    });
  }
}
