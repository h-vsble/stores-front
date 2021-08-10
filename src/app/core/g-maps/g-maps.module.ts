import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { GMapsComponent } from './g-maps.component';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  declarations: [
    GMapsComponent
  ],
  exports: [
    GMapsComponent
  ]
})

export class GMapsModule {}