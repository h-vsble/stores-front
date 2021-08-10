import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoresMapComponent } from './stores/map/map.component'

const routes: Routes = [
  {
    path      : '',
    component : StoresMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
