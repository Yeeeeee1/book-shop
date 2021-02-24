import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookShop';

  @ViewChild("appTitle", { static: false })
  nameParagraph!: ElementRef;
}
