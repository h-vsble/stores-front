import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RestangularModule } from 'ngx-restangular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoresMapModule } from './stores/map/map.module';

export function RestangularConfigFactory (restangularProvider) {
  restangularProvider.setBaseUrl(environment.apiURL);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory),

    BrowserAnimationsModule,

    StoresMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
