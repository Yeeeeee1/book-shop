import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponentComponent } from '../cart/cart-component/cart-component.component';
import { AddProductComponent } from './add-product/add-product/add-product.component';

import { AdminComponent } from './admin-component/admin.component';
import { OrderListComponent } from './order-component/order-list/order-list.component';
import { ProductsComponentComponent } from './products-component/products-component/products-component.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        children: [
          {
            path: 'add',
            component: AddProductComponent,
          },
          {
            path: '',
            component: ProductsComponentComponent,
          },
        ],
      },
      {
        path: 'orders',
        component: OrderListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
