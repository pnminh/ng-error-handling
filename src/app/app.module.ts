import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ErrorHandlerService } from './error-handler.service';
import { ErrorRoutingModule } from './error/error-routing/error-routing.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { NotificationComponent } from './notification/notification.component';
import { RoutingModule } from './routing/routing.module';

function initalizieApp() {
  return () => {
    return new Promise(resolve => {
      console.log('starting app...');
      setTimeout(() => {
        console.log('app started...');
        resolve();
      }, 1500);
    });
  };
}
@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    ErrorRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initalizieApp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
