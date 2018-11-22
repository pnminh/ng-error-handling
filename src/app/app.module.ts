import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './http-interceptor.service';
import { ErrorRoutingModule } from './error/error-routing/error-routing.module';
import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from './notification.service';
import { HttpClientModule, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [BrowserModule,BrowserAnimationsModule, HttpClientModule, RoutingModule, ErrorRoutingModule],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule {}
