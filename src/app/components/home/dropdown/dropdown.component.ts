import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../home.service";


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit{
  @Input() title: string | undefined;
  state = false;

  message:string="";
  constructor(private homeService: HomeService) {
    this.homeService.getMessage.subscribe(msg => this.message = msg);
    this.homeService.getState.subscribe(state => this.state = state);
  }

  updateMessage(){
    this.homeService.setMessage('This is updated msg from test component.');
  };
  updateState(){
    this.homeService.setState(!this.state);
  }

  ngOnInit(): void {
  }
  showSection() {
    this.rotateArrow();
    this.updateMessage();
    this.updateState();
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
