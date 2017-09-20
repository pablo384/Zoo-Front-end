import {animate, state, style, transition, trigger} from '@angular/animations';


export const fadeLateral=
  trigger('fadeLateral',[
    transition(':enter',[
      //cuando la animacion entra
      style({
        opacity: 0,
        transform:'translateX(-30%)'

      }),
      //cuando la animacionn acaba
      animate('300ms linear', style(
        {
          opacity: 1,
          transform:'translateX(0)'
        })
      )
    ])
  ]);
