import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AddressAutocompleteComponentModule } from '../../core/address-autocomplete/address-autocomplete.module';
import { GMapsModule } from '../../core/g-maps/g-maps.module';
import { StoresListModule } from '../list/list.module';

import { StoresMapComponent } from './map.component';

@NgModule({
  declarations: [
    StoresMapComponent
  ],
  exports: [
    StoresMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    GMapsModule,
    AddressAutocompleteComponentModule,
    StoresListModule
  ],
  bootstrap: [StoresMapComponent]
})

export class StoresMapModule { }
