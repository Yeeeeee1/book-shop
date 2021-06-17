import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { Category } from 'src/app/shared/models/BookModel';

import { CartItemComponentComponent } from './cart-item-component.component';

describe('CartItemComponentComponent', () => {
  let component: CartItemComponentComponent;
  let fixture: ComponentFixture<CartItemComponentComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call removeBook without event', () => {
    fixture.detectChanges();
    spyOn(component, 'removeBook');
    expect(component.removeBook).toHaveBeenCalledTimes(0);
  });
});
