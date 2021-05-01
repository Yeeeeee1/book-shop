import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { OrderService } from 'src/app/core/services/order.service';
import { IOrderData } from '../../../order/models/orderDataModel';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orderData!: IOrderData[];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderData = this.orderService.getOrders();
  }
}
