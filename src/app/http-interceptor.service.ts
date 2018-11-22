import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  // If the call fails, retry until 5 times before throwing an error
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // If the call fails, retry until 5 times before throwing an error
    console.log('interceptor should call retry');
    return next.handle(request).pipe(retry(5));
  }

  constructor() {}
}
