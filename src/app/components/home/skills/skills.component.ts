import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {HomeService} from "../home.service";
import {Animations} from "../animations";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../home.component.scss'],
  animations: [
    Animations.openClose
  ],
})
export class SkillsComponent {
  state: boolean = false;

  constructor(private homeService: HomeService) {
  }

  toggle() {
    let img = document.getElementById("skills-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }
}
