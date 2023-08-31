import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverRoutingModule } from './cover-routing.module';
import { CoverComponent } from './cover/cover.component';


@NgModule({
  declarations: [
    CoverComponent
  ],
  imports: [
    CommonModule,
    CoverRoutingModule
  ]
})
export class CoverModule { }
