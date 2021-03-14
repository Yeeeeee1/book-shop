import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CartComponentComponent } from './cart-component/cart-component.component';
import { CartItemComponentComponent } from './cart-component/cart-item-component/cart-item-component.component';

@NgModule({
  declarations: [
      CartComponentComponent,
      CartItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    CartComponentComponent,
    CartItemComponentComponent
  ],
  providers: [],
})
export class CartModule { }
