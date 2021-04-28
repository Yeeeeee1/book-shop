import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IOrderData } from '../../../order/models/orderDataModel';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orderData!: any[];

  constructor(private localStorageService: LocalStorageService) {
    this.orderData = this.localStorageService.getItem('orderData');
  }

  ngOnInit(): void {
    console.log(this.orderData);
  }
}
