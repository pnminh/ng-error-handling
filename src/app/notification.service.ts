import { Injectable, ApplicationRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notification = new Subject<string>();
  // publish refCount allow us to only emit value when subscriptions >=1
  // default behavior is to run next right after subject subscribes to the observable
  readonly notification$: Observable<
    string
  > = this._notification.asObservable().pipe(
    publish(),
    refCount()
  );
  constructor(private applicationRef: ApplicationRef) {}
  notify(message: string) {
    console.log('inside notify');
    this._notification.next(message + Math.random());
    // in case registering asynchronous event handlers outside Angular, such as ErrorHandler????
    this.applicationRef.tick();
    // make the message to show up for 1000s
    setTimeout(() => {
      this._notification.next(null);
      this.applicationRef.tick();
      console.log('notify next:' + null);
    }, 3000);
  }
}
