import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    DropdownComponent,
    AboutmeComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
