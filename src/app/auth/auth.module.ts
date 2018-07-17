import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth-page/auth.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class AuthModule { }