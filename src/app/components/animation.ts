import {animate, state, style, transition, trigger} from '@angular/animations';


export const fadeIn=
  trigger('fadeIn',[
    transition(':enter',[
      //cuando la animacion entra
      style({
        opacity: 0

      }),
      //cuando la animacionn acaba
      animate('300ms linear', style(
        {
          opacity: 1
        })
      )
    ])
  ]);
