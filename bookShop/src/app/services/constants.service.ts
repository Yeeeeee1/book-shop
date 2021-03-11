import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  values = {
    App: 'BookShop',
    Ver: '1.0'
  };

  constructor() { }
}
