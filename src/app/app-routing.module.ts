import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DairyComponent } from './dairy/dairy.component';

const ROUTES: Routes = [
  { path: '', component:  DairyComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
