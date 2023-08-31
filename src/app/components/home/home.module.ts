import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    DropdownComponent,
    AboutmeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
