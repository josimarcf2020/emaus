import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ColetasModule } from '../coletas/coletas.module';

@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    ColetasModule
  ],
  exports: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
