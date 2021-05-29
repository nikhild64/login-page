import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-with-label',
  templateUrl: './input-with-label.component.html',
  styleUrls: ['./input-with-label.component.scss']
})
export class InputWithLabelComponent implements OnInit {
  @Input() label :string|undefined;
  @Input() inputType:string|undefined;


  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
