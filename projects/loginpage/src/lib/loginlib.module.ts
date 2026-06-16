import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginlibComponent } from './loginlib.component';

@NgModule({
  declarations: [LoginlibComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginlibComponent]
})
export class LoginlibModule {}
