import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonsComponent } from './commons.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [CommonsComponent, CarouselComponent, NavComponent, HeaderComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports:[
    CarouselComponent,
    NavComponent,
    HeaderComponent
  ]
})
export class CommonsModule { }
