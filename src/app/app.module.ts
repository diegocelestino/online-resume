import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from "./components/home/home.component";
import {BannerComponent} from "./components/home/banner/banner.component";
import {DropdownComponent} from "./components/home/dropdown/dropdown.component";
import {AboutmeComponent} from "./components/home/aboutme/aboutme.component";
import {SkillsComponent} from "./components/home/skills/skills.component";
import {ExperienceComponent} from "./components/home/experience/experience.component";
import {EducationComponent} from "./components/home/education/education.component";
import {CertificationsComponent} from "./components/home/certifications/certifications.component";
import {ContactComponent} from "./components/home/contact/contact.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    DropdownComponent,
    AboutmeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
