import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IBook } from 'src/app/shared/models/BookModel';
import { IOrderData } from '../models/orderDataModel';
import { IOrderForm } from '../models/orderFormModel';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  basketData: IBook[] = [];
  buyWay = '';
  orderForm!: IOrderForm;
  orderData: IOrderData[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private cartService: CartService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.orderData =
      this.localStorageService.getItem('orderData')[0] === undefined
        ? []
        : this.localStorageService.getItem('orderData');
    this.basketData = this.localStorageService.getItem('basketData');
  }

  initForm(): void {
    this.orderForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.pattern(/^[A-Za-z].*$/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      address: ['', [Validators.required]],
      comment: [''],
      buyWay: ['', Validators.required],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.orderForm.controls[controlName];

    return control.invalid && control.touched;
  }

  chooseBuyWay(target: EventTarget | null): void {
    this.buyWay = (target as HTMLSelectElement).value;
  }

  sendData(): void {
    const { controls } = this.orderForm;

    if (this.orderForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );

      return;
    }

    const orderDataObj: IOrderData = {
      name: this.orderForm.value.name,
      email: this.orderForm.value.email,
      address: this.orderForm.value.address,
      comment: this.orderForm.value.comment,
      buyWay: this.orderForm.value.buyWay,
    };

    this.orderData.push(orderDataObj);

    this.localStorageService.setItem('orderData', this.orderData);

    this.basketData = [];
    this.localStorageService.removeItem('basketData');
    this.cartService.removeAll();
    alert('Заказ выполнен!');
    this.router.navigate(['']);
  }
}
