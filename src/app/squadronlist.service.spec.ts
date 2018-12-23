import { TestBed, inject } from '@angular/core/testing';

import { SquadronListService } from './squadronlist.service';

describe('SquadronListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquadronListService]
    });
  });

  it('should be created', inject([SquadronListService], (service: SquadronListService) => {
    expect(service).toBeTruthy();
  }));
});
