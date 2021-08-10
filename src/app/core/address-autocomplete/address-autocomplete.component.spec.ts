import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddressAutocompleteComponent } from './address-autocomplete.component';

describe('AddressAutocompleteComponent', () => {
  function getTestComponent() {
    TestBed
      .configureTestingModule({
        imports     : [
          MatAutocompleteModule,
          MatFormFieldModule,
          MatInputModule,
          FlexLayoutModule
        ],
        declarations: [ AddressAutocompleteComponent ]
      });

    const fixture: ComponentFixture<AddressAutocompleteComponent> = TestBed.createComponent(AddressAutocompleteComponent);
    const component: AddressAutocompleteComponent = fixture.componentInstance;

    return { fixture, component };
  }

  describe('when html is loaded', () => {
    let testComponent;

    beforeEach(() => {
      testComponent = getTestComponent();
    });

    it('should load the `autocomplete` element', () => {
      const matListItem = testComponent.fixture.nativeElement.querySelector('address-autocomplete');

      expect(matListItem).toBeDefined();
    });
  });
});