import { TestBed, inject } from '@angular/core/testing';

import { PilotlistService } from './pilotlist.service';

describe('PilotlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotlistService]
    });
  });

  it('should be created', inject([PilotlistService], (service: PilotlistService) => {
    expect(service).toBeTruthy();
  }));
});
