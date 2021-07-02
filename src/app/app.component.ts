/* eslint-disable no-undef */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login-page';
  websiteName="MyPortfolio"

  userAction($event:any): void{


    console.log($event);
  }
}
