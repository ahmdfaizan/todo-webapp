import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger,
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

   export let  listSideIn= trigger('listSideIn', [
      transition(':enter, :increment', [
        query('.card:enter', [
          style({ opacity: 0, transform: 'translateX(-500px)'}),
          stagger(100, [
            animate('1000ms ease', style({ opacity: 1,  transform: 'translateX(0px)'})),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement',[
        query('.card:leave', [
          stagger(100, [
            animate('500ms ease',
              style({ opacity: 0,  transform: 'translateX(-500px)'})
            ),
          ]),
        ],{ optional: true }),
      ])
    ])
    export let sideInLeft = trigger('sideInLeft',[
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-500px)'}),
        animate('1000ms ease', style({ opacity: 1,  transform: 'translateX(0px)'})),
      ]),
      transition(':leave', [
        animate('500ms ease', style({ opacity: 1, transform: 'translateX(-500px)'})),
      ]),
    ]);
    export let sideInRight = trigger('sideInRight',[
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(500px)'}),
        animate('1000ms ease', style({ opacity: 1,  transform: 'translateX(0px)'})),
      ]),
      transition(':leave', [
        animate('500ms ease', style({ opacity: 0,  transform: 'translateX(500px)'})),
      ]),
    ]);
    export let fade = trigger('fade',[
      transition(':enter', [
        style({ opacity: 0}),
        animate('2000ms ease', style({ opacity: 1})),
      ])
    ]);

