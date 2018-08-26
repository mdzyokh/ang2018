import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth-page/auth.component';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from '../core/store/auth/auth.reducer';
import { AuthEffects } from '../core/store/auth/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class AuthModule { }