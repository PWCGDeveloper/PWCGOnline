import { TestBed, inject } from '@angular/core/testing';

import { NewPilotService } from './newpilot.service';

describe('NewpilotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPilotService]
    });
  });

  it('should be created', inject([NewPilotService], (service: NewPilotService) => {
    expect(service).toBeTruthy();
  }));
});
