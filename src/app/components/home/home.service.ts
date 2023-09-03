import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ContentChange} from "./content.model";

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

  onAnimationEvent(contentChange: ContentChange): number {
    if (contentChange.side == "right") {
      if (contentChange.actualContent == contentChange.contentLength - 1) {
        return 0;
      } else {
        return ++contentChange.actualContent;
      }
    }
    if (contentChange.side == "left") {
      if (contentChange.actualContent == 0) {
        return contentChange.contentLength - 1;
      } else {
        return --contentChange.actualContent;
      }
    }
    return 0;
  }

}
