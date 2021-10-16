import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,private menu: MenuController) { }

  ngOnInit() {}
  openEnd() {
    this.menu.close();
  }
  goToPage(url)
  {
    this.menu.close();
    this.router.navigate(['/'+url]);
  }
}
