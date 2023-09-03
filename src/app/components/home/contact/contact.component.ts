import { Component } from '@angular/core';
import {HomeService} from "../home.service";
import {Animations} from "../animations";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../home.component.scss'],
  animations: [
    Animations.openClose,
  ],
})
export class ContactComponent {
  state: boolean = false;

  constructor(private homeService: HomeService) {
  }


  toggle() {
    let img = document.getElementById("contact-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }
}
