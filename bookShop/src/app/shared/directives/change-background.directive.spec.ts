import { CUSTOM_ELEMENTS_SCHEMA, ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { CartItemComponentComponent } from 'src/app/modules/components/cart/cart-component/cart-item-component/cart-item-component.component';
import { SharedModule } from '../shared.module';
import { ChangeBackgroundDirective } from './change-background.directive';

describe('ChangeBackgroundDirective', () => {
  let fixture: any;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [AppModule],
    }).createComponent(CartItemComponentComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should have yellow', () => {
    console.log(fixture);
    const div: HTMLElement = fixture.nativeElement;
    const bgColor = div.style.backgroundColor;
    let event = document.createEvent('MouseEvents');
    event.initEvent('mouseover', true, true);
    div.dispatchEvent(event);
    console.log(div);
    expect(bgColor).toBe('yellow');
  });
});
