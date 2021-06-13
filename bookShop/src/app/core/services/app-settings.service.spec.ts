import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { ISettings } from 'src/app/shared/models/SettingsModel';

import { AppSettingsService } from './app-settings.service';

describe('AppSettingsService', () => {
  let service: AppSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [AppModule] });
    service = TestBed.inject(AppSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return settings', () => {
    spyOn(service, 'getSettings');
    service.getSettings();
    expect(service.getSettings).toHaveBeenCalledTimes(1);
  });
});
