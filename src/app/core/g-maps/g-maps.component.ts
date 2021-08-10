import { Component, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

import { environment } from '../../../environments/environment';

@Component({
  selector    : 'g-maps',
  templateUrl : './g-maps.component.html',
  styleUrls   : ['./g-maps.component.scss']
})
export class GMapsComponent {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @ViewChild(GoogleMap) map!: GoogleMap;

  @Input() markers?: Array<any>;
  @Input() center?: any = {};
  @Input() zoom = 7;
  @Input() mapOptions = {
    fullscreenControl: false
  }

  apiLoaded: Observable<boolean>;

  infoWindowContent: string | undefined | null = ''

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  }

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsAPIKey}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  /**
   * Opens the `marker's` info window
   *
   * @param markerId The marker's id
   *
   * @return {undefined}
  */
  openMarker(markerId) : void {
    console.warn('[ggs]', markerId)
  }

  /**
   *  Opens the `infowWindow` for `marker`
   *
   * @param {MapMakrer} marker
   * @param {string} infoWindowContent The `html` content to be displayed
   *
   * @return {undefined}
  */
  openInfoWindow(marker: MapMarker, infoWindowContent: string) : void {
    this.infoWindow.open(marker);
    this.infoWindowContent = infoWindowContent
  }
}