import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {HomeService} from "../home.service";
import {Animations} from "../animations";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../home.component.scss'],
  animations: [
    Animations.openClose,
   ]
})
export class SkillsComponent {
  state: boolean = false;

  constructor(private homeService: HomeService) {

  }

  toggle() {
    let img = document.getElementById("skills-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
    this.loadBars();

  }

  loadBars(){
    var bar1 = document.getElementById("bar_1");
    var bar2 = document.getElementById("bar_2");
    var bar3 = document.getElementById("bar_3");
    var bar4 = document.getElementById("bar_4");

    if(this.state){
      bar1!.style.width = '97px';
      bar2!.style.width = '134px';
      bar3!.style.width = '59px';
      bar4!.style.width = '48px';
    } else {
      bar1!.style.width = '0px';
      bar2!.style.width = '0px';
      bar3!.style.width = '0px';
      bar4!.style.width = '0px';
    }

  }
}


