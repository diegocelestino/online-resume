import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  state = new BehaviorSubject(true);

  getState = this.state.asObservable();
  constructor() { }

  toggle(img: HTMLElement, state: boolean): boolean{
    if (state){
      img.style.transform = 'rotate(0deg)';
    }else {
      img.style.transform = 'rotate(180deg)';
    }
    return !state;
  }

  onAnimationEvent(side: string, actualContent: number, contentLength: number): number {
    if (side == "right") {
        if (actualContent == contentLength - 1) {
          return 0;
        } else {
          return ++actualContent;
        }
    }
    if (side == "left") {
        if (actualContent == 0) {
          return contentLength - 1;
        } else {
          return --actualContent;
        }
    }
    return 0;
  }

}
