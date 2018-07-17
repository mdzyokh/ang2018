import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { AuthComponent } from './auth/auth-page/auth.component';

const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }