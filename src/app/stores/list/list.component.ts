import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Store } from '../models/store.model'

@Component({
  selector    : 'stores-list',
  templateUrl : './list.component.html',
  styleUrls   : ['./list.component.scss']
})

export class StoresListComponent {
  @Input()
  stores: Array<Store> = [];

  @Input()
  storeClick;

  @Output()
  storeClicked = new EventEmitter<Store>();

  /**
   * Emits the `store clicked` event
   *
   * @param store The clicked `store`
   *
   * @return {undefined}
  */
  onStoreClick(store: Store) : void {
    this.storeClicked.emit(store);
  }
}