import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent{
  @Input() title: string | undefined;
  state = false;

  showSection() {
    this.rotateArrow();


    this.state = !this.state;
    console.log(this.state);
  };

  rotateArrow(){
    let img = document.querySelector(".down");
    if (this.state){
      (img as HTMLElement).style.transform = 'rotate(0deg)';
    }else {
      (img as HTMLElement).style.transform = 'rotate(180deg)';
    }
  }



}
