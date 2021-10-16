import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

// import { ReCaptchaV3Service } from 'ngx-captcha';
import { NgxCaptchaModule } from 'ngx-captcha';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    // ReCaptchaV3Service,
    NgxCaptchaModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
