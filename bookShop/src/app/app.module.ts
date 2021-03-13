import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponentComponent } from './modules/components/about-component/about-component.component';

import { SharedModule } from './shared/shared.module';
import { BookModule } from './modules/components/book/book.module';
import { CartModule } from './modules/components/cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BookModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
