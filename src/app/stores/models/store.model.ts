export class Store {
  street?             : string;
  street2?            : string;
  street3?            : string;
  formattedAddress?   : string;
  postalCode?         : string;
  city?               : string;
  addressName?        : string;
  locationType?       : string;
  latitude?           : number;
  longitude?          : number;
  location?           : [];
  complexNumber?      : string;
  showWarningMessage? : boolean;
  isOpen?             : boolean;
  todayOpen?          : string;
  todayClose?         : string;
  collectionPoint?    : boolean;

  constructor(attrs: Object) {
    Object.assign(this, attrs);
  }
}