import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DairyComponent } from './dairy/dairy.component';
import { CreateComponent } from './create/create.component';
import { SettingsComponent } from './settings/settings.component';

const ROUTES: Routes = [
  { path: 'home', component:  DairyComponent},
  { path: 'create', component: CreateComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
