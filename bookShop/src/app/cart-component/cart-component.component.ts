import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
