import { NgModule } from '@angular/core';

import { StoresMapModule } from './map/map.module';
import { StoresListModule } from './list/list.module';

import { StoresMapComponent } from './map/map.component';
import { StoresListComponent } from './list/list.component';

@NgModule({
  imports       : [
    StoresMapModule,
    StoresListModule
  ],
  declarations  : [
    StoresMapComponent,
    StoresListComponent
  ],
  exports       : [
    StoresMapComponent,
    StoresListComponent
  ],
})

export class StoresModule { }
