import { Component, OnInit, Optional } from '@angular/core';
import { GeneratorService } from '../../../core/services/generator.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { BooksService } from '../../../core/services/books.service';
import { ConfigOptionsService } from '../../../core/services/config-options.service';
import { CartService } from '../../../core/services/cart.service';
import { ConstantsService } from '../../../core/services/constants.service';

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
