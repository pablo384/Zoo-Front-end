import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
})
export class KeepersComponent implements OnInit{
  title="Cuidadores";

  ngOnInit(): void {
    console.log('keepers.component.ts')
  }
}
