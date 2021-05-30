import { TestBed } from '@angular/core/testing';

import { LoginlibService } from './loginlib.service';

describe('LoginlibService', () => {
  let service: LoginlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
