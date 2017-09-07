import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations:[fadeIn]
})
export class HomeComponent implements OnInit{
  title="Bienvenido a NGZOO";

  ngOnInit(): void {
    console.log('home.component.ts')
  }
}
