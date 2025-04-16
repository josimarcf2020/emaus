import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'coletas',
    pathMatch: 'full'
    },
    {
      path: 'coletas',
      loadChildren: () => import('./coletas/coletas.module').then(m => m.ColetasModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
