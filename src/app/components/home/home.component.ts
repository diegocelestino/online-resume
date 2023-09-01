import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showAboutMe = false;
  showSkills = false;
  showExperience = false;
  showEducation = false;
  showCertifications = false;
  showContact = false;
  showSectionAboutMe() {
    this.showAboutMe = !this.showAboutMe;
    console.log(this.showAboutMe);
  };

  showSectionSkills() {
    this.showSkills = !this.showSkills;
    console.log(this.showSkills);
  };

  showSectionExperience() {
    this.showExperience = !this.showExperience;
    console.log(this.showExperience);
  };

  showSectionEducation() {
    this.showEducation = !this.showEducation;
    console.log(this.showEducation);
  };

  showSectionCertifications() {
    this.showCertifications = !this.showCertifications;
    console.log(this.showCertifications);
  };

  showSectionContact() {
    this.showContact = !this.showContact;
    console.log(this.showContact);
  }

}
