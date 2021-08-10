import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { StoresListComponent } from './list.component';

import { Store } from '../models/store.model';

describe('StoresListComponent', () => {
  function getTestComponent() {
    TestBed
      .configureTestingModule({
        declarations: [ StoresListComponent ]
      });

    const fixture: ComponentFixture<StoresListComponent> = TestBed.createComponent(StoresListComponent);
    const component: StoresListComponent = fixture.componentInstance;

    return { fixture, component }
  }

  describe('when `stores` has no itens', () => {
    let testComponent

    beforeEach(() => {
      testComponent = getTestComponent()
    })

    it('should not list any item', () => {
      const matListItem = testComponent.fixture.nativeElement.querySelector('mat-list-item');

      expect(matListItem).toBeNull();
    })
  });

  describe('when `stores` has itens', () => {
    let testComponent

    beforeEach(() => {
      testComponent = getTestComponent()

      testComponent.component.stores = [
        new Store({ addressName: 'random' }),
        new Store({ addressName: 'random2' })
      ];

      testComponent.fixture.detectChanges();
    });

    describe('when html is loaded', () => {
      it('should list the `stores`', () => {
        const matListItem = testComponent.fixture.debugElement
          .queryAll(By.css('mat-list-item'));

        expect(matListItem.length).toBe(testComponent.component.stores.length);
      });
    });

    describe('when a `store` is `clicked`', () => {
      let storeClickedSpy: jasmine.Spy;

      beforeEach(() => {
        storeClickedSpy = spyOn(testComponent.component.storeClicked, 'emit').and.callThrough();

        const listItem = testComponent.fixture.debugElement
          .query(By.css('mat-list-item'));

        listItem.nativeElement.click();
      });

      afterAll(() => {
        storeClickedSpy.calls.reset()
      });

      it('should emit `storeClicked`', () => {
        expect(testComponent.component.storeClicked.emit).toHaveBeenCalledWith(testComponent.component.stores[0]);
      });
    })
  });
});