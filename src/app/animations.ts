import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';

  export let dropIn =trigger('dropIn', [
    // ...
    state('void', style({
      opacity: 0,
      transform: 'translateY(-50px)',
    })),
    transition(':enter', [
      animate('1s ease-out')
    ]),
  ]);