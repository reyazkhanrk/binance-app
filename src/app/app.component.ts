/* eslint-disable no-trailing-spaces */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  loginToken;
  constructor(public router: Router,private menu: MenuController,public db: DatabaseService) {
    console.log(this.router.url);
    this.loginToken = this.db.token;
    console.log(this.loginToken);

    // if(this.loginToken)
    // {
    //   this.router.navigate(['/home']);
    // }
    // else{
    //   this.router.navigate(['/login']);
    // }
  }

  openEnd() {
    this.menu.close();
  }
  goToPage(url)
  {
    this.menu.close();
    this.router.navigate(['/'+url]);
  }
}
