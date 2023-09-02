import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {elementAt} from "rxjs";


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
    var arrow = document.getElementById('arrow');
    arrow!.classList.add(this.dropdownClass!.toString());
    console.log(arrow!.classList)
  }

  updateState(){
    this.homeService.setState(!this.state);
  }

  showSection() {
    this.rotateArrow();
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
