import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{

  title = 'NGZOO';
  emailContacto:string;

  ngOnInit(): void {
    this.emailContacto=localStorage.getItem('emailContacto');
    //console.log(localStorage.getItem('emailContacto'))
  }


  ngDoCheck(): void {
    this.emailContacto=localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear()
    this.emailContacto=null;
  }
}
