import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { CartItemComponentComponent } from 'src/app/modules/components/cart/cart-component/cart-item-component/cart-item-component.component';
import { Category } from '../models/BookModel';
import { ChangeBackgroundDirective } from './change-background.directive';

describe('Directive: HoverFocus', () => {
  let component: CartItemComponentComponent;
  let fixture: ComponentFixture<CartItemComponentComponent>;
  let div: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponentComponent, ChangeBackgroundDirective],
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(CartItemComponentComponent);
    component = fixture.componentInstance;
    component.basketData = [
      {
        name: 'War and peace',
        description:
          'An epic novel by Leo Nikolaevich Tolstoy, describing Russian society in the era of wars against Napoleon in 1805-1812. The epilogue of the novel brings the story to 1820.',
        price: 5,
        category: Category.fiction,
        createDate: 0,
        isAvailable: true,
        count: 1,
        id: 2,
      },
    ];
    fixture.detectChanges();
    div = fixture.debugElement.query(By.css('div'));
  });

  it('hovering over input', () => {
    div.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe('yellow');

    div.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe('');
  });
});
