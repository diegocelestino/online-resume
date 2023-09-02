import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {DropdownComponent} from "./dropdown/dropdown.component";
import {AboutmeComponent} from "./aboutme/aboutme.component";


const routes: Routes = [
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'aboutMe',
    component: AboutmeComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomeRoutingModule { }
