import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from './../error/error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  /* { path: 'error', component: ErrorComponent }, */
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
  constructor() {
    console.log(this);
  }
}
