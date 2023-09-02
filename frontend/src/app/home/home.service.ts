import { Injectable } from '@angular/core';
import { HomeItems } from 'src/assets/placeholder-items/HomeGridItems';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getItems() {
    return HomeItems
  }
}
