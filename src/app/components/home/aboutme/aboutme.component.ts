import {Component} from '@angular/core';
import {trigger, transition, animate, style, state} from '@angular/animations';
import {HomeService} from "../home.service";
import {Animations} from "../animations";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss', '../home.component.scss'],
  animations: [
    Animations.openClose,
  ],
})
export class AboutmeComponent {
  state: boolean = false;

  constructor(private homeService: HomeService) {
  }

  toggle() {
    let img = document.getElementById("about-me-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }

}
