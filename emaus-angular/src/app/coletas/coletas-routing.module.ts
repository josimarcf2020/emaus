import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColetasComponent } from './coletas/coletas.component';

const routes: Routes = [
  {
    path: '',
    component: ColetasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColetasRoutingModule { }
