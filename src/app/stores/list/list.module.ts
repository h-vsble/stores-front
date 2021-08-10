import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { StoresListComponent } from './list.component';

@NgModule({
  declarations: [
    StoresListComponent
  ],
  exports: [
    StoresListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule
  ],
  bootstrap: [StoresListComponent]
})

export class StoresListModule { }
