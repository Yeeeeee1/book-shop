import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'bookShop';
  @ViewChild('appTitle', { static: false })
  pRef!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.pRef.nativeElement.textContent = 'bookShop';
  }
}
