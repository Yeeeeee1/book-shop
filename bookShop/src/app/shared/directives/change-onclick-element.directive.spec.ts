import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Button } from 'selenium-webdriver';
import { AppModule } from 'src/app/app.module';
import { CartComponentComponent } from 'src/app/modules/components/cart/cart-component/cart-component.component';
import { CartItemComponentComponent } from 'src/app/modules/components/cart/cart-component/cart-item-component/cart-item-component.component';
import { Category } from '../models/BookModel';
import { ChangeOnclickElementDirective } from './change-onclick-element.directive';

describe('ChangeOnclickElementDirective', () => {
  let component: CartComponentComponent;
  let fixture: ComponentFixture<CartComponentComponent>;
  let button: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponentComponent, ChangeOnclickElementDirective],
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(CartComponentComponent);
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
    button = fixture.debugElement.query(By.css('#removeBtn'));
  });

  it('should change styles', () => {
    button.nativeElement.click();
    fixture.detectChanges();
    expect(button.nativeElement.style.fontSize).toBe('15px');
  });
});
