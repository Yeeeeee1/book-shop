import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IOption } from '../models/OptionModel';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  setOption(option: IOption): void {
    this.localStorageService.setItem('option', option);
  }

  getOption(key: string): void {
    this.localStorageService.getItem(key);
  }

  constructor(private localStorageService: LocalStorageService) { }
}
