import { TestBed } from '@angular/core/testing';

import { SquadronpersonnelService } from './squadronpersonnel.service';

describe('SquadronpersonnelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SquadronpersonnelService = TestBed.get(SquadronpersonnelService);
    expect(service).toBeTruthy();
  });
});
