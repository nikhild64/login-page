import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlibComponent } from './loginlib.component';

describe('LoginlibComponent', () => {
  let component: LoginlibComponent;
  let fixture: ComponentFixture<LoginlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
