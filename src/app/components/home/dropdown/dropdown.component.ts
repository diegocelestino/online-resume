import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../home.service";


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit{
  @Input() title: string | undefined;
  @Input() dropdownClass: string | undefined;

  state = false;

  constructor(private homeService: HomeService) {
    this.homeService.getState.subscribe(state => this.state = state);
  }

  ngOnInit(): void {
  }


  showSection() {
    this.rotateArrow();
  };

  rotateArrow(){
    let img = document.querySelector(".down");
    if (!this.state){
      (img as HTMLElement).style.transform = 'rotate(0deg)';
    }else {
      (img as HTMLElement).style.transform = 'rotate(180deg)';
    }
  }
}
