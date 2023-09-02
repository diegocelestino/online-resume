import { Component} from '@angular/core';
import {trigger, transition,animate, style, state} from '@angular/animations';
import {HomeService} from "../home.service";
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss', '../home.component.scss'],
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
export class AboutmeComponent{
  state: boolean = false;
  constructor(private homeService: HomeService){}

  toggle(){
    let img = document.getElementById("about-me-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }

}
