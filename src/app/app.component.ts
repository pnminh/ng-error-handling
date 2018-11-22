import { HttpService } from './http.service';
import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-error-handling';

}
