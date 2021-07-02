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
  activity='Login'


  switchMode() : void{
    this.activity=this.activity==='Login'?'Signup':'Login';
  }

  submitDone() : void{

    this.loginDetails.next({'loginMode':this.activity});
  }

}
