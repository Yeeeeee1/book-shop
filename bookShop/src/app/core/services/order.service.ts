import { EventEmitter, Injectable } from '@angular/core';
import { IOrderData } from 'src/app/modules/components/order/models/orderDataModel';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderData: IOrderData[] = [];
  changeOrderDataEvent: EventEmitter<IOrderData[]> = new EventEmitter();

  constructor() {}

  addOrder(order: IOrderData): void {
    this.orderData.push(order);
    this.changeOrderDataEvent.emit(this.orderData);
  }

  getOrders(): IOrderData[] {
    return this.orderData;
  }
}
