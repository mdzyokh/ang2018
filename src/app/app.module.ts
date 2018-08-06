import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth.guard';
import { CoursesGuard } from './courses.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, CoursesGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
