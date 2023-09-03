import {trigger, state, style, transition, animate, sequence} from '@angular/animations';

export const Animations = {
  openClose: trigger('openClose', [
    state('open', style({
      opacity: 1,
      zIndex: 1,
    })),
    state('closed', style({
      zIndex: 0,
      height: '0px',
      opacity: 0,
    })),
    transition('open => closed', [
      animate('0.5s'),
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]),

  changeContent: trigger('changeContent', [
    state('in', style({
      opacity: 1,
      zIndex: 1,
    })),
    state('out', style({
      zIndex: 1,
      opacity: 1,
    })),
    transition('in <=> out', [
      sequence([
        style({
          opacity: -1,
          zIndex: 0,
        }),
        animate('0.5s'),
      ]),
    ]),
  ])
}
