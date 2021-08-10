import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AddressAutocompleteComponent } from './address-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatProgressBarModule
  ],
  declarations: [
    AddressAutocompleteComponent
  ],
  exports: [
    AddressAutocompleteComponent
  ]
})

export class AddressAutocompleteComponentModule {}