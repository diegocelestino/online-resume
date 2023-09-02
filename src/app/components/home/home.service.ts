import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private message = new BehaviorSubject('Initial message');
  private state = new BehaviorSubject(true);

  getState = this.state.asObservable();
  getMessage = this.message.asObservable();
  constructor() { }

  setState(state: boolean){
    this.state.next(state);
  }
  setMessage(message: string){
    this.message.next(message);
  }
}
