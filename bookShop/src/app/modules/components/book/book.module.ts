import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BookComponentComponent } from './book-component/book-component.component';

@NgModule({
  declarations: [BookComponentComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  exports: [BookComponentComponent],
})
export class BookModule {}
