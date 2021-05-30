import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() websiteName:string|undefined = "Website";
  activity='Login'


  switchMode() : void{
    this.activity=this.activity==='Login'?'Signup':'Login';
  }


}
