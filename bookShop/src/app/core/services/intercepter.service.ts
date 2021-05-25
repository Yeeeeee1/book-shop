import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from 'src/app/shared/models/BookModel';

@Injectable({
  providedIn: 'root',
})
export class IntercepterService {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const start = Date.now();
    return next.handle(req).pipe(
      map((res: HttpEvent<any>) => {
        if (res instanceof HttpResponse && res.url?.match(/books\//)) {
          console.log('took ' + (Date.now() - start) + 'ms');
        }
        return res;
      })
    );
  }
}
