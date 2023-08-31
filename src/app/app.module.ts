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
import {Expression} from "@angular/compiler";
import {ExperienceComponent} from "./components/home/experience/experience.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    DropdownComponent,
    AboutmeComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
