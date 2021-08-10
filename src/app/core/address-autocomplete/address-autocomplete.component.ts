import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { MapGeocoder } from '@angular/google-maps';

/**
 * @title Display value autocomplete
*/
@Component({
  selector    : 'address-autocomplete',
  templateUrl : 'address-autocomplete.component.html',
  styleUrls   : ['address-autocomplete.component.scss'],
})
export class AddressAutocompleteComponent implements OnInit {
  @Input()
  label = 'Search address';

  @Input()
  search = '';

  @Output()
  addressSelected = new EventEmitter<google.maps.GeocoderResult>();

  addressAutocompleteControl = new FormControl();
  addresses!: Observable<google.maps.GeocoderResult[]>;

  isSearching = false;

  constructor(private geocoder: MapGeocoder) {}

  ngOnInit() {
    this.addressAutocompleteControl.valueChanges
      .pipe(
        filter(newValue => typeof(newValue) == 'string'),
        tap(() => this.isSearching = true),
        debounceTime(600),
        distinctUntilChanged(),
      )
      .subscribe(newValue => {
        this.addresses = this.getAddresses(newValue);

        this.isSearching = false;
      });
  }

  /**
   * Gets the `mat-autocmplete` display text
   *
   * @param {google.maps.GeocoderResult} address The selected `address` object
   *
   * @return {string} The text to be displayed
  */
  getAutocompleteDisplayText(address: google.maps.GeocoderResult): string {
    let text = '';

    if (address)
      text = address.formatted_address;

    return text;
  }

  /**
   * Gets the list of `addresses` based on `addressName`
   *
   * @param {google.maps.GeocoderResult} address The selected `address` object
   *
   * @return {Observable<google.maps.GeocoderResult[]>} The list of `addresses`
  */
  getAddresses(addressName: string) : Observable<google.maps.GeocoderResult[]> {
    return this.geocoder
      .geocode({ address: addressName })
      .pipe(
        map(({ results }) => results)
      );
  }

  /**
   * Emits the `address selected` event
   *
   * @param {Object} address The selected `address`
   *
   * @return {undefined}
  */
  onAddressSelected(address) : void {
    this.addressSelected.emit(address);
  }
}