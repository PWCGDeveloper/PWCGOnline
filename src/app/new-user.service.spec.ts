import { TestBed, inject } from '@angular/core/testing';

import { NewUserService } from './new-user.service';

describe('NewUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewUserService]
    });
  });

  it('should be created', inject([NewUserService], (service: NewUserService) => {
    expect(service).toBeTruthy();
  }));
});
