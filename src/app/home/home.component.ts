import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  googleResponse$: Observable<any>;
  constructor(
    private httpService: HttpService,
    public notificationService: NotificationService
  ) {}
  ngOnInit(): void {}
  callGoogle() {
    this.googleResponse$ = this.httpService.callGoogle();
  }
  callServerError() {
    this.httpService
      .callServerError()
      .subscribe(response => console.log(response));
  }
  callClientError() {
    const shthppns = r; // r is not defined === ReferenceError
    console.log("I won't be logged");
  }
  callServerOffline() {
    // turn chrome network to be offline
    this.httpService.callServerOffline().subscribe(res => console.log(res));
  }
}
