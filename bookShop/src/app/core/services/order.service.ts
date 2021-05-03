import { Injectable } from '@angular/core';
import { IOrderData } from 'src/app/modules/components/order/models/orderDataModel';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderData: IOrderData[] = [];

  constructor() {}

  addOrder(order: IOrderData): void {
    const newOrderData = [...this.orderData, order]; // or concat or something other simillar method
    this.orderData = newOrderData;
  }

  getOrders(): IOrderData[] {
    return this.orderData;
  }
}
