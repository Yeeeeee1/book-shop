import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersModule } from './orders.module';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { ChangeOnclickElementDirective } from './directives/change-onclick-element.directive';

@NgModule({
  declarations: [ChangeBackgroundDirective, ChangeOnclickElementDirective],
  imports: [BrowserModule, FormsModule],
  exports: [
    CommonModule,
    OrdersModule,
    ChangeBackgroundDirective,
    ChangeOnclickElementDirective,
  ],
})
export class SharedModule {}
