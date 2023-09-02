import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private state = new BehaviorSubject(true);

  getState = this.state.asObservable();
  constructor() { }

  toggle(img: HTMLElement, state: boolean): boolean{
    if (state){
      (img).style.transform = 'rotate(0deg)';
    }else {
      (img).style.transform = 'rotate(180deg)';
    }
    return !state;
  }
}
