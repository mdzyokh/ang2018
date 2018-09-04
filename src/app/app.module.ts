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

import { TokenInterceptor } from './core/interceptors/token-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/store/auth/auth.effects';
import { CoursesEffects } from './core/store/courses/courses.effects';
import { authReducer } from './core/store/auth/auth.reducer';
import { coursesReducer } from './core/store/courses/courses.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer,
      courses: coursesReducer
    }),
    EffectsModule.forRoot([ AuthEffects, CoursesEffects ])
  ],
  providers: [AuthService, AuthGuard, CoursesGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
