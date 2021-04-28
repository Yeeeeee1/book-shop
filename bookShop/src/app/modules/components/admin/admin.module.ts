import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin-component/admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { OrderListComponent } from './order-component/order-list/order-list.component';
import { ProductsComponentComponent } from './products-component/products-component/products-component.component';

@NgModule({
  declarations: [
    AdminComponent,
    OrderListComponent,
    ProductsComponentComponent,
  ],
  imports: [FormsModule, AdminRoutingModule, CommonModule],
  exports: [AdminComponent],
})
export class AdminModule {}
