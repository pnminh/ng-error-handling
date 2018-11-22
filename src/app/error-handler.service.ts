import { Router } from '@angular/router';
import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    const routerService: Router = this.injector.get(Router);
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        console.log('server is offline');
        this.notificationService.notify('server is offline');
      } else {
        console.log('error thrown from server', error);
        this.notificationService.notify(`${error.status} - ${error.message}`);
      }
    } else {
      console.log('some client side error', error);
      //this.notificationService.notify('some client side error: ' + error);
      routerService.navigate(['/error']);
    }
  }

  constructor(
    private notificationService: NotificationService,
    private injector: Injector
  ) {}
}
