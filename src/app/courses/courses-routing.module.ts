import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: 'courses/new',
        component: AddCourseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'courses/:id',
        component: EditCourseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'courses',
        component: CoursesListComponent,
        canActivate: [AuthGuard]
    }
 ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class CoursesRoutingModule { }