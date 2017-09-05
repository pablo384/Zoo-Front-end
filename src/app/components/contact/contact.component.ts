import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
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
