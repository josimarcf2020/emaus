import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ColetasRoutingModule }     from './coletas-routing.module';
import { ColetasComponent }         from './coletas/coletas.component';
import { MatTableModule }           from '@angular/material/table';
import { MatCardModule }            from '@angular/material/card';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule }        from '@angular/material/checkbox';
import { MatInputModule }           from '@angular/material/input';
import { MatIconModule }            from '@angular/material/icon';
import { MatSelectModule }            from '@angular/material/select';

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
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class ColetasModule { }
