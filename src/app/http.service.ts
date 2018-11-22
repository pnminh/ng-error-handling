import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}
  callGoogle(): Observable<any> {
    return this.http.get('https://google.com', {
      responseType: 'text' as 'text'
    });
  }
  callServerError() {
    return this.http.get('https://jsonplaceholder.typicode.com/1');
  }
  callServerOffline() {
    return this.http.get('http://examtddd.com');
  }
}
