import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';
import { CartComponentComponent } from '../cart/cart-component/cart-component.component';
import { AddProductComponent } from './add-product/add-product/add-product.component';

import { AdminComponent } from './admin-component/admin.component';
import { EditComponentComponent } from './edit-component/edit-component/edit-component.component';
import { OrderListComponent } from './order-component/order-list/order-list.component';
import { ProductsComponentComponent } from './products-component/products-component/products-component.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
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
          {
            path: 'edit/:productID',
            component: EditComponentComponent,
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
