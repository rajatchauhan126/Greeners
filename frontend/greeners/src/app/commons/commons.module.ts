import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonsComponent } from './commons.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [CommonsComponent, CarouselComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports:[
    CarouselComponent
  ]
})
export class CommonsModule { }
