import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import { ReCaptchaV3Service } from 'ngx-captcha';
import { DatabaseService } from 'src/app/services/database.service';
import {utils} from '../../../utilities';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // loginForm: FormGroup;
  siteKey: string = utils.siteKey;
  loginForm = this.fb.group({
    // username: new FormControl('', [Validators.required]),
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    recaptcha:['']
  });

  isSubmitted=false;

  constructor(
    public fb: FormBuilder,
    private db: DatabaseService,
    public router: Router,
    public googlePlus: GooglePlus,
    // private reCaptchaV3Service: ReCaptchaV3Service,
    ) { }



  ngOnInit(){
    // this.reCaptchaV3Service.execute(this.siteKey, 'login', (token) => {
    //   console.log('This is your token: ', token);
    // }, {
    //     useGlobalDomain: false
    // });
  }

  submitForm() {
    this.isSubmitted = true;
    if(this.loginForm.invalid)
    {
      this.loginForm.get('username').markAsTouched();
      this.loginForm.get('password').markAsTouched();
      // this.loginForm.markAllAsTouched();
      return;
    }
    else{
      console.log('Form is Valid');
      // console.log(this.loginForm.value);
      // this.db.login(this.loginForm.value).subscribe(res=>{
      //   console.log(res);
      // });
      this.db.token = 'login token';
      this.router.navigate(['home']);
    }
  }

  loginWithGoogle()
  {
    this.googlePlus.getSigningCertificateFingerprint().then(result => {
      console.log(result); //return SHA 1 Certificate fingerprint
    });
    // show login propmt
    this.googlePlus.login({}).then(res => {
      console.log(res);
      if(res)
      {
        this.router.navigate(['home']);
      }
    })
    .catch(err => console.error(err));

  }

}
