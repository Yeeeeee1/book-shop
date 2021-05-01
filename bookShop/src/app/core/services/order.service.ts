import { Injectable } from '@angular/core';
import { IOrderData } from 'src/app/modules/components/order/models/orderDataModel';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderData: IOrderData[] = [];

  constructor() {}

  addOrder(order: IOrderData): void {
    this.orderData.push(order);
  }

  getOrders(): IOrderData[] {
    return this.orderData;
  }
}
