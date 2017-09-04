import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit{
  title="Contacto";

  ngOnInit(): void {
    console.log('contact.component.ts')
  }
}
