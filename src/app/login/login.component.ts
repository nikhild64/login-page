import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() websiteName:string|undefined;
  activity='Login'

  //  Websites = 'www.google.com' | 'reddit.com';
  //  mySite: Websites = 'www.google.com' //pass
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }
  switchMode(){
    this.activity=this.activity==='Login'?'Signup':'Login';
  }


}
