import { Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit{
  state: boolean = false;
  first: number = 0;
  constructor(private homeService:HomeService){}

  ngOnInit(): void {
    this.homeService.getState.subscribe(state => {
      this.state = state;
      if(this.first !== 0){
        this.hidenTest();
      }
      this.first++;
    });
  }

  hidenTest(){
    var element = document.getElementById('panel');
    if (element!.classList.contains('hidden')) {
        element!.classList.remove('hidden');
        setTimeout(function () {
          element!.classList.remove('visuallyhidden');
        }, 2);
    } else {
        element!.classList.add('visuallyhidden');
        element!.addEventListener('transitionend', function(e) {
          element!.classList.add('hidden');

        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
  }


}
