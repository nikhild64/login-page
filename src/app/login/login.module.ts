import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InputWithLabelComponent } from './input-with-label/input-with-label.component';



@NgModule({
  declarations: [
    LoginComponent,

    InputWithLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
