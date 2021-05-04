import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IntercepterService {
  constructor() {}

  timingIntecepter(req: HttpRequest<unknown>, next: HttpHandler) {
    const start = Date.now();
    return next.handle(req).pipe(
      map((res) => {
        console.log('took ' + (Date.now() - start) + 'ms');
        return res;
      })
    );
  }
}
