import { TestBed } from '@angular/core/testing';

import { RestangularModule } from 'ngx-restangular';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { StoresMapComponent } from './map.component';

import { MatSnackBar } from '@angular/material/snack-bar';

import { StoreAPI } from '../services/store-api.service'

describe('StoresMapComponent', () => {
  function getTestComponent() {
    TestBed
      .configureTestingModule({
        imports   : [
          RestangularModule,
          MatSnackBarModule
        ],
        providers: [
          StoresMapComponent,
          { provide: StoreAPI },
          { provide: MatSnackBar }
        ]
      });

    const component = TestBed.inject(StoresMapComponent);

    TestBed.inject(StoreAPI);
    TestBed.inject(MatSnackBar);

    return component;
  }

  describe('.setMarkers', () => {
    describe('when `stores` has itens', () => {
      let mapComponent;
      let stores;

      beforeAll(() => {
        stores = [{
          latitude  : 10,
          longitude : 15
        }];

        mapComponent = getTestComponent();

        mapComponent.setMarkers(stores)
      });

      it('should set the `storeMarkers`', () => {
        const storeLocations = mapComponent.storeMarkers
          .map(sm => {
            return {
              latitude  : sm.lat,
              longitude : sm.lng
            };
          });

        expect(storeLocations).toEqual(stores);
      });

      it('should set `mapConfig.center`', () => {
        const center = {
          lat: stores[0].latitude,
          lng: stores[0].longitude
        }

        expect(mapComponent.mapConfig.center).toEqual(center);
      });
    });

    describe('when `stores` has no itens', () => {
      let mapComponent;

      beforeAll(() => {
        mapComponent = getTestComponent();

        mapComponent.setMarkers([])
      });

      it('should not set the `storeMarkers`', () => {
        expect(mapComponent.storeMarkers.length).toBe(0);
      });
    });
  });
});