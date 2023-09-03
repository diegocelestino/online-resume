import { Component } from '@angular/core';
import {Animations} from "../animations";
import {Content, ContentChange} from "../content.model";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss', '../home.component.scss'],
  animations: [
    Animations.openClose,
    Animations.changeContent
  ],
})
export class CertificationsComponent {
  state: boolean = false;
  content: Content[] = [];
  contentChange: ContentChange;

  constructor(public homeService: HomeService) {
    this.addContent();
    this.contentChange = new ContentChange('', true, 0, this.content.length);
  }

  toggle() {
    let img = document.getElementById("certification-dropdown");
    this.state = this.homeService.toggle(img as HTMLElement, this.state);
  }

  changeControl(side: string) {
    this.contentChange.changeView = !this.contentChange.changeView;
    this.contentChange.side = side;
  }

  private addContent() {
    this.content.push(this.eventPlatform);
    this.content.push(this.spring);
    this.content.push(this.figma);
    this.content.push(this.data);
    this.content.push(this.c);
    this.content.push(this.python);
    this.content.push(this.agile);
    this.content.push(this.lead);
    this.content.push(this.persona);
  }

  eventPlatform = new Content(
    "Events Platform Development",
    "https://www.linkedin.com/feed/update/urn:li:activity:7102782887225176064/",
    "",
    "../assets/img/ifsp.png"
  )

  spring = new Content(
    "Spring Framework",
    "https://cursos.alura.com.br/degree/certificate/fdf3c59e-2f9f-4eb3-9aaa-a1ceee337ffe?lang=pt_BR",
    "",
    "../assets/img/alura.png"
  )

  figma = new Content(
    "Figma: Visual Design of a Mobile Site",
    "https://cursos.alura.com.br/certificate/17010ee7-e84b-4582-992a-8a6a1b94591d",
    "",
    "../assets/img/alura.png"
  )

  data = new Content(
    "Data Modeling",
    "https://cursos.alura.com.br/degree/certificate/8ffc2ab6-0ef7-4c5f-b288-97519ebea88e",
    "",
    "../assets/img/alura.png"
  )

  c = new Content(
    "C# and OOP",
    "https://cursos.alura.com.br/degree/certificate/09acab15-900c-4064-870a-e51e005a3131?lang=en",
    "",
    "../assets/img/alura.png"
  )

  python = new Content(
    "Python",
    "https://cursos.alura.com.br/degree/certificate/4a3d662d-1369-42c4-accc-7cf2644439c4",
    "",
    "../assets/img/alura.png"
  )

  agile = new Content(
    "Agile User Experience Design and Research",
    "https://www.linkedin.com/learning/certificates/ce55a22d65e62c639fb5788aa48edc09b32c280cbfb7485c73de50fc7c380b45?u=26887274",
    "",
    "../assets/img/linkedin.png"
  )

  lead = new Content(
    "Lead Generation Foundations",
    "https://www.linkedin.com/learning/certificates/996a9e90ea59cc0a1cd8fae66256520ab9020c067e0960de87921acfd30ea611?u=26887274",
    "",
    "../assets/img/linkedin.png"
  )

  persona = new Content(
    "CX: Creating Customer Personas",
    "https://www.linkedin.com/learning/certificates/297656e5b4ebe1868c1fff298904e30ee4256aa5be6bd27dcc20bea91540bc0f?u=26887274",
    "",
    "../assets/img/linkedin.png"
  )
}
