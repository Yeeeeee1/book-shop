import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponentComponent } from './modules/components/book/book-component/book-component.component';
import { CartItemComponentComponent } from './modules/components/cart/cart-component/cart-item-component/cart-item-component.component';

const routes: Routes = [
  { path: '', component: BookComponentComponent },
  { path: 'product/:id', component: CartItemComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
