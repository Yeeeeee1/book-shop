import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin-component/admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  exports: [AdminComponent],
})
export class AdminModule {}
