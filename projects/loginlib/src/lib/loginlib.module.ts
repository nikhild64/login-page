import { NgModule } from '@angular/core';
import { InputWithLabelComponent } from './input-with-label.component';
import { LoginlibComponent } from './loginlib.component';



@NgModule({
  declarations: [
    LoginlibComponent,
    InputWithLabelComponent
  ],
  imports: [
  ],
  exports: [
    LoginlibComponent
  ]
})
export class LoginlibModule { }
