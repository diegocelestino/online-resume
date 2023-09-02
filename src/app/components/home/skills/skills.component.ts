import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../home.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        zIndex: 2,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        zIndex: 0,
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
export class SkillsComponent {
  state: boolean = false;
  constructor(private homeService: HomeService){}

  toggle(){
    let img = document.getElementById("skills-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }
}
