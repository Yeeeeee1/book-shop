import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useClass: LocalStorageService,
})
export class LocalStorageService {
  constructor() {}

  setItem(name: string, item: any): void {
    item = JSON.stringify(item);
    localStorage.setItem(name, item);
  }

  getItem(key: string): any {
    const storage = localStorage.getItem(key) || '{}';
    return JSON.parse(storage);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
