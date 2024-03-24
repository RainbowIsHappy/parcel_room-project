import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LineLiffComponent } from './line-liff-page/line-liff.component';


@NgModule({
  declarations: [
    LineLiffComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],
})
export class LoginModule { }
