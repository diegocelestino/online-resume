import { Component } from '@angular/core';
import {HomeService} from "../home.service";
import {Content} from "../content.model";
import {Animations} from "../animations";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', '../home.component.scss'],
  animations: [
    Animations.openClose,
    Animations.changeContent
  ],

})
export class ExperienceComponent {
  state: boolean = false;
  content: Content[] = [];
  actualContent: number = 0;
  changeView: boolean = true;
  side: string = "";


  toggle() {
    let img = document.getElementById("experience-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }

  constructor(public homeService: HomeService) {
    this.content.push(this.jnj);
    this.content.push(this.codelab);
    this.content.push(this.saHall);
    this.content.push(this.bars)
  }

  changeControl(side: string) {
    this.changeView = !this.changeView;
    this.side = side;
  }


  jnj = new Content(
    "Johnson & Johnson Medtech",
    "Experience Design Intern | 23/02 - nowadays,",
    "Practice of design thinking methodologies to build new solutions focused on customer needs; support in" +
    "building a toolbox of user-centered methodologies; development of guides and repositories for creating" +
    "visual interfaces; creating and facilitating communities of practice; support for product squads applying" +
    "UX and UI methods; development of actions to generate awareness of human-centered design.",
    "../assets/img/jnj.png"
  );

  codelab = new Content(
    "IFSP Codelab",
    "Software Developer Intern | 22/05 - 22/12",
    "Analysis and development of legacy project, survey and preparation of user stories" +
    "and acceptance criteria; development of low and high fidelity prototypes, development of SPA's" +
    "and REST API's with Spring and Angular; researching and developing solutions to implementation " +
    "problems; group work, pair programming and sharing solutions; code versioning with Git/Github; " +
    "presentations to the general public of the results obtained.",
    "../assets/img/codelab.png"
  );

  saHall = new Content(
    "Santo André City Hall",
    "Public Employee - Child Development Officer | 19/06 - 22/12",
    "Receive and refer children to their parents, by means of" +
    "in order to help them reduce their anxieties and fears." +
    "and fears; assisting in the acquisition and encouragement of " +
    "walking and motor skills, by respecting the stages of development, " +
    "encouraging them, with the teacher's supervision, to advance to the next " +
    "stage; assisting the teacher in expanding the speech repertoire by naming objects, " +
    "figures and musicality, so that they can communicate more effectively." +
    "communicate more effectively;",
    "../assets/img/creche.png"
  );

  bars = new Content(
    "Bars and Events",
    "Freelancer |  17/02 - nowadays",
    "Leading and supervising a team of attendants and re-stockers; setting up and dismantling" +
    "operations for small and large-scale events; replenishing materials on demand; " +
    "personalized customer service with classic cocktail menus; keeping the work area clean and organized;",
    "../assets/img/bar.png"
  );


}
