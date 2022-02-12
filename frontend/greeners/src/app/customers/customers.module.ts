import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonsModule } from '../commons/commons.module';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CommonsModule
  ]
})
export class CustomersModule { }
