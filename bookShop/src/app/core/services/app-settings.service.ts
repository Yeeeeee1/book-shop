import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISettings } from '../../shared/models/SettingsModel';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  constructor(private httpClient: HttpClient) {}

  getSettings(): Observable<ISettings> {
    return this.httpClient.get<ISettings>(`http://localhost:3000/app-settings`);
  }
}
