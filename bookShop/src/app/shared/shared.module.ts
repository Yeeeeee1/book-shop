import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersModule } from './orders.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
      CommonModule,
      OrdersModule
  ],
  providers: [],
})
export class SharedModule { }
