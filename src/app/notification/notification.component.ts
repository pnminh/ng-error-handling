import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NotificationService } from './../notification.service';
import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('hideShowAnimator', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('0 => 1', animate('.5s')),
      transition('1 => 0', animate('.9s'))
    ]),
    trigger('hideShowAnimatorWithNgIf', [
      transition(':enter', [
        style({ /* transform: 'translateX(100%)', */ opacity: 0 }),
        animate('600ms ease-in-out', style({ opacity: 1 }))
        /*animate('500ms' , style({transform: 'translateX(0)', 'opacity': 1}) )*/
      ]),
      transition(':leave', [
        style({ /* transform: 'translateX(0)',  */ opacity: 1 }),
        animate('900ms ease-in-out', style({ opacity: 0 }))
        /* animate(
          '1000ms' , style({transform: 'translateX(100%)', 'opacity': 0}
        ) */
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {
  isShown = false;
  constructor(public notificationService: NotificationService) {}
  ngOnInit() {}
  click() {
    this.isShown = !this.isShown;
  }
}
