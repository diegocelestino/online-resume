import { Component } from '@angular/core';
import {HomeService} from "../home.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', '../home.component.scss'],
  animations: [
    trigger('openClose', [
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
  ],
})
export class ExperienceComponent {
  state: boolean = false;
  constructor(private homeService: HomeService){}

  toggle(){
    let img = document.getElementById("experience-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }

}
