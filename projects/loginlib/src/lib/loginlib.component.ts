import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-loginlib',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginlibComponent  {


  @Input() websiteName:string|undefined = "Website";
  activity='Login'


  switchMode() : void{
    this.activity=this.activity==='Login'?'Signup':'Login';
  }

}
