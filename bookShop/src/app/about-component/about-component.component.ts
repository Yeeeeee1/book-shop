import { Component, OnInit, Optional } from '@angular/core';
import { GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.scss']
})
export class AboutComponentComponent implements OnInit {
  rval = this.generatorService.GeneratorFactory(5);

  constructor(@Optional() private generatorService: GeneratorService) { }

  ngOnInit(): void {
  }

}
