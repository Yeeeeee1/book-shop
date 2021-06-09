import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { IBook } from '../../../../shared/models/BookModel';
import { CartService } from 'src/app/core/services/cart.service';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Store } from '@ngrx/store';
import { RouterActions } from 'src/app/state/router/router.actions';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent implements OnInit, OnDestroy {
  someSetting: boolean = false;
  bookData$: Observable<IBook[]> = this.booksService.getBooks();

  settingsSub: Subscription | null = new Subscription();

  @Output() buyEvent = new EventEmitter<IBook>();
  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private appSettingsService: AppSettingsService,
    private localStorageService: LocalStorageService,
    private store: Store
  ) {}

  ngOnInit(): void {
    if (this.localStorageService.getItem('app-settings') === undefined) {
      this.settingsSub = this.appSettingsService
        .getSettings()
        .subscribe((data) => (this.someSetting = data.someSetting));
      this.localStorageService.setItem('app-settings', this.someSetting);
    } else {
      this.someSetting = this.localStorageService.getItem('app-settings');
    }
  }

  ngOnDestroy(): void {
    if (this.settingsSub) {
      this.settingsSub.unsubscribe();
      this.settingsSub = null;
    }
  }

  onBuy(book: IBook): void {
    book.isAvailable = false;
    this.cartService.addBook(book);
  }

  changeSettings(changedSettings: boolean): void {
    this.localStorageService.setItem('app-settings', changedSettings);
  }

  onOpenDetails(id: number) {
    this.store.dispatch(RouterActions.goToProductDetails({ id }));
  }
}
