import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColetasRoutingModule } from './coletas-routing.module';
import { ColetasComponent } from './coletas/coletas.component';


@NgModule({
  declarations: [
    ColetasComponent
  ],
  imports: [
    CommonModule,
    ColetasRoutingModule
  ]
})
export class ColetasModule { }
