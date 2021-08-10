import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class StoreAPI {
  resourceName = 'stores'

  restAPI: Restangular;

  constructor(private restangular: Restangular) {
    this.restAPI = this.restangular.all(this.resourceName);
  }

  getNearests(params) {
    return this.restAPI
      .one('nearests')
      .get(params)
      .toPromise()
  }
}