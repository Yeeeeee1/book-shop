import { Component, OnInit, Optional } from '@angular/core';
import { GeneratorService } from '../services/generator.service';
import { LocalStorageService } from '../services/local-storage.service';
import { BooksService } from '../services/books.service';
import { ConfigOptionsService } from '../services/config-options.service';
import { CartService } from '../services/cart.service';
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.scss']
})
export class AboutComponentComponent implements OnInit {
  rval = this.generatorService.GeneratorFactory(5);

  constructor(
    @Optional() private generatorService: GeneratorService,
    private localStorageService: LocalStorageService,
    private booksService: BooksService,
    private confugOptionService: ConfigOptionsService,
    private cartService: CartService,
    private constantsService: ConstantsService
    ) {}

  ngOnInit(): void {
  }

}
