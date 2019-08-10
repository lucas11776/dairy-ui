import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DairyComponent } from './dairy/dairy.component';
import { CreateComponent } from './create/create.component';

const ROUTES: Routes = [
  { path: '', component:  DairyComponent},
  { path: 'create', component: CreateComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
