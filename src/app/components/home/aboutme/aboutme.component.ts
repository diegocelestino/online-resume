import { Component, OnInit} from '@angular/core';
import {trigger, transition,animate, style, state} from '@angular/animations';
import {HomeService} from "../home.service";
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        height: '700px'
      })),
      state('closed', style({
        height: '0px',
        opacity: -1,
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
export class AboutmeComponent implements OnInit{
  state: boolean = false;
  constructor(private homeService: HomeService){}

  ngOnInit(): void {}

  toggle(){
    let img = document.querySelector(".down");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }

}
