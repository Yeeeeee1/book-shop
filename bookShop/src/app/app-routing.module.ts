import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponentComponent } from './modules/components/book/book-component/book-component.component';
import { CartComponentComponent } from './modules/components/cart/cart-component/cart-component.component';
import { CartItemComponentComponent } from './modules/components/cart/cart-component/cart-item-component/cart-item-component.component';
import { OrderComponent } from './modules/components/order/order-component/order.component';

const routes: Routes = [
  { path: '', component: BookComponentComponent },
  { path: 'product/:id', component: CartItemComponentComponent },
  { path: 'cart', component: CartComponentComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
