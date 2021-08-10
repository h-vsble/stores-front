import { Component, ViewChild } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '../models/store.model'
import { StoreAPI } from '../services/store-api.service'

import { GMapsComponent } from '../../core/g-maps/g-maps.component'

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector    : 'stores-map',
  templateUrl : './map.component.html',
  styleUrls   : ['./map.component.scss']
})
export class StoresMapComponent {
  @ViewChild('gMaps')
  private gMaps!: GMapsComponent;

  @ViewChild('snav')
  sidenav!: MatSidenav;

  mapConfig: any = {
    center  : {
      lat: 52.18489520690524,
      lng: 5.5306758710108355
    },
    zoom    : 11
  };

  stores: Store[] = [];
  storeMarkers: Array<any> = [];

  isSearching = false;
  isSideNavOpen = false;
  isInitialized = false;

  constructor(private storeAPI: StoreAPI, private snackBar: MatSnackBar) {
  }

  /**
   * Gets the nearests `stores` based on `params`
   *
   * @param {Object} params The filter params
   * @param {Number} params.latitude
   * @param {Number} params.longitude
   * @param {Number} params.radius
   * @param {Number} params.limit
   *
   * @return {Promise<Array<Store>>} The nearests `stores`
  */
  getNearestStores(params) : Promise<Store[]>{
    const paramsTemp = {
      ...params,
      radius  : 999999,
      limit   : 5
    };

    return this.storeAPI
      .getNearests(paramsTemp);
  }

  /**
   * Gets the `stores` based on `address`
   * @async
   *
   * @param {string} address The `address` to fetch near `stores`
   *
   * @return {Promise<Array<Store>>} The nearests `stores`
  */
  async getStores(address) : Promise<Store[]> {
    let stores: Store[] = []

    if (address && address.geometry) {
      this.isSearching = true;

      const location = address.geometry.location;

      const params = {
        latitude  : location.lat(),
        longitude : location.lng()
      }

      const nearestStores = await this
        .getNearestStores(params);

      if (nearestStores.length > 0)
        stores = this.setStores(nearestStores);
      else {
        this.isSearching = false;
        this.stores = [];
        this.storeMarkers = [];

        this.snackBar
          .open('Stores not found near the address', '', { duration: 1000 });
      }
    }

    return stores;
  }

  /**
   * Gets the map `markers` for `stores`
   *
   * @param {Array<Store>} stores
   *
   * @return {Array<Object>} The `store` markers
  */
  getMarkers(stores: Store[]) : Object[] {
    return stores
      .map(s => {
        return {
          lat               : s.latitude,
          lng               : s.longitude,
          title             : s.addressName,
          infoWindowContent : `
            <header>
              <h3 class="title">${s.addressName}</h3>
            </header>

            <span class="content">
              <p>
                ${s.street}, ${s.street2}.
                ${s.city}
              </p>
            </span>

            <footer>
              <p class="mdc-text-green-400">
                Opens: <i>${s.todayOpen}</i>
              </p>

              <p class="mdc-text-red-400">
                Closes: <i>${s.todayClose}</i>
              </p>
            </footer>
          `
        }
      })
  }

  /**
   * Sets the `stores` list
   *
   * @param {Array<Store>} stores
   *
   * @return {Array<store>} The new `stores` list
  */
  setStores(stores: Store[]) : Store[] {
    this.isSearching = false;
    this.stores = stores
      .map(s => new Store(s));

    this.setMarkers(this.stores);

    if (!this.isInitialized) {
      this.isInitialized = true;

      this.sidenav.toggle();
    }

    return this.stores;
  }

  /**
   * Sets the `map` markers for `stores`
   *
   * @param stores
   *
   * @return {undefined}
  */
  setMarkers(stores: Store[]) : void {
    if (stores && stores.length > 0) {
      this.storeMarkers = this.getMarkers(stores);

      this.mapConfig.center = {
        lat: stores[0].latitude,
        lng: stores[0].longitude
      };
    }
  }

  onStoreClick(store) :void {
    this.gMaps.openMarker(store);
  }
}