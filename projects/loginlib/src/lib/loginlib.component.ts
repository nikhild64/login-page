/* eslint-disable no-undef */
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-loginlib',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginlibComponent implements OnInit  {



  @Input() websiteName:string|undefined = "Website";
  @Output() loginDetails = new EventEmitter();
  @Input() primaryColor = "#60c6f1";
  @Input() secondaryColor = "#ffde59";

  @Input() disableSignup = false;
  username='';
  password='';
  activity='Login'

  ngOnInit(): void {

    document.documentElement.style.setProperty('--primary-color', this.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', this.secondaryColor);
  }
  switchMode() : void{
    this.activity=this.activity==='Login'?'Signup':'Login';
  }

  submitDone() : void{
    if(!(this.password==='' && this.username==='')){
      this.loginDetails.next({'loginMode':this.activity,'userName':this.username,'password':this.password});

    }

  }

}

