import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  constructor(private httpClient: HttpClient) {}

  getSettings(): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:3000/app-settings`);
  }

  setSettings(): void {}
}
