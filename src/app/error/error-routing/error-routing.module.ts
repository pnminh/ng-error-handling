import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from '../error.component';
const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent, data: { error: 404 } }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
  constructor() {
    console.log(this);
  }
}
