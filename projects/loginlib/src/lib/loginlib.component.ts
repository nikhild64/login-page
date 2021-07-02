import { Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-loginlib',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginlibComponent  {


  @Input() websiteName:string|undefined = "Website";
  @Output() loginDetails = new EventEmitter();

  @Input() disableSignup = false;
  username='';
  password='';
  activity='Login'


  switchMode() : void{
    this.activity=this.activity==='Login'?'Signup':'Login';
  }

  submitDone() : void{
    if(!(this.password==='' && this.username==='')){
      this.loginDetails.next({'loginMode':this.activity,'userName':this.username,'password':this.password});

    }

  }

}

