import { Component } from '@angular/core';
import {Animations} from "../animations";
import {Content, ContentChange} from "../content.model";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss', '../home.component.scss'],
  animations: [
    Animations.openClose,
    Animations.changeContent
  ],
})
export class EducationComponent {
  state: boolean = false;
  content: Content[] = [];
  contentChange: ContentChange;

  constructor(public homeService: HomeService) {
    this.addContent();
    this.contentChange = new ContentChange('', true, 0, this.content.length);
  }

  toggle() {
    let img = document.getElementById("education-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }

  changeControl(side: string) {
    this.contentChange.changeView = !this.contentChange.changeView;
    this.contentChange.side = side;
  }

  private addContent() {
    this.content.push(this.ads);
    this.content.push(this.drs);

  }

  ads = new Content(
    "Tech System Analysis And Development",
    "IFSP | 21/06 - nowadays",
    "The Systems Analysis and Development Technologist course is aimed at people who " +
    "want more practical training, geared towards the job market, and has one of the highest" +
    "demands for places in the entire IFSP.",
    "../assets/img/ifsp.png"
  );

  drs= new Content(
    "Clown Training for Youth",
    "Doutores da Alegria | 16/01 - 18/12",
    "The Doctors of Joy Youth Clown Training Program is an initiative that aims to train " +
    "young people to become professional artists trained in the language of clowning. Created " +
    "by the Doctors of Joy organization, the program offers specific training in clowning, " +
    "improvisation and circus techniques, preparing participants for an artistic career with " +
    "an eye to the human side.",
    "../assets/img/doutores.png"
  )
}
