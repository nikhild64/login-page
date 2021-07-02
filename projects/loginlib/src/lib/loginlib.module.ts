import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputWithLabelComponent } from './input-with-label.component';
import { LoginlibComponent } from './loginlib.component';



@NgModule({
  declarations: [
    LoginlibComponent,
    InputWithLabelComponent
  ],
  imports: [
    FormsModule,CommonModule
  ],
  exports: [
    LoginlibComponent
  ]
})
export class LoginlibModule { }
