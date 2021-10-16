import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { DatabaseService } from 'src/app/services/database.service';
import {utils} from '../../../utilities';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  siteKey: string = utils.siteKey;

   // registerForm: FormGroup;
   registerForm = this.fb.group({
    // username: new FormControl('', [Validators.required]),
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    recaptcha:[''],
  });

  isSubmitted=false;

  constructor(public fb: FormBuilder,private db: DatabaseService,public router: Router, public googlePlus: GooglePlus) { }

  ngOnInit() {
  }
  submitForm() {
    this.isSubmitted = true;
    if(this.registerForm.invalid)
    {
      this.registerForm.get('username').markAsTouched();
      this.registerForm.get('password').markAsTouched();
      // this.registerForm.markAllAsTouched();
      return;
    }
    else{
      console.log('Form is Valid');
      if(this.registerForm.value.password !== this.registerForm.value.confirmPassword)
      {
        alert('Error in Register');
      }
      else{
        // console.log(this.registerForm.value);
        this.db.login(this.registerForm.value);
      }

    }
  }

  loginWithGoogle()
  {
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    //   .then((data) => {
    //     console.log(data);
    //     console.log("Successfully authenticated");
    //     // this.userService.saveUserDataLocal(data)
    //     // this.router.navigate(['homepage']);
    //   })
    //   .catch((err) => console.log(err));
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
