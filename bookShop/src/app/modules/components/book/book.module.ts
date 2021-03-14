import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BookComponentComponent } from './book-component/book-component.component';

@NgModule({
  declarations: [
    BookComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    BookComponentComponent
  ],
  providers: [],
})
export class BookModule { }
