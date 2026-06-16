import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

export interface LoginDetails {
  userName: string;
  password: string;
}

@Component({
  selector: 'lib-loginlib',
  templateUrl: './loginlib.component.html',
  styleUrls: ['./loginlib.component.scss'],
  standalone: false
})
export class LoginlibComponent implements OnInit {
  @Input() websiteName: string = 'App';
  @Input() disableSignup: boolean = false;
  @Output() loginDetails = new EventEmitter<LoginDetails>();

  userName: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;
    this.errorMessage = '';
    this.isLoading = true;
    this.loginDetails.emit({ userName: this.userName, password: this.password });
    this.isLoading = false;
  }
}
