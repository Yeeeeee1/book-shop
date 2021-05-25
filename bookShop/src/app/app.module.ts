import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponentComponent } from './modules/components/about-component/about-component.component';

import { SharedModule } from './shared/shared.module';
import { BookModule } from './modules/components/book/book.module';
import { CartModule } from './modules/components/cart/cart.module';
import { OrdersModule } from './modules/components/order/orders.module';
import { AdminComponent } from './modules/components/admin/admin-component/admin.component';
import { AdminModule } from './modules/components/admin/admin.module';
import { AdminGuard } from './shared/guards/admin.guard';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { IntercepterService } from './core/services/intercepter.service';

@NgModule({
  declarations: [AppComponent, AboutComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BookModule,
    CartModule,
    OrdersModule,
    AdminModule,
    HttpClientModule,
  ],
  providers: [
    AdminGuard,
    { provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
