import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ColetasRoutingModule }     from './coletas-routing.module';
import { ColetasComponent }         from './coletas/coletas.component';
import { MatTableModule }           from '@angular/material/table';
import { MatCardModule }            from '@angular/material/card';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ColetasComponent
  ],
  imports: [
    CommonModule,
    ColetasRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ]
})
export class ColetasModule { }
