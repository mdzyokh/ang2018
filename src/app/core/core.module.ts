import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingComponent } from './loading/loading.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '../../../node_modules/@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, LoginComponent, PageNotFoundComponent, LoadingComponent],
  exports: [HeaderComponent, FooterComponent, LoadingComponent],
})
export class CoreModule { }
