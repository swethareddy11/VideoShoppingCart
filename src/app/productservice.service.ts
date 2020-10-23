import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  products = [{productId: '12345678', productName: 'earrings', purity: '3.18', weight: '22g' }];

  getBuildData(){
    return this.products;
  }
}
