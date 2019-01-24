import { TestBed } from '@angular/core/testing';

import { TalkywalkyService } from './talkywalky.service';

describe('TalkywalkyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalkywalkyService = TestBed.get(TalkywalkyService);
    expect(service).toBeTruthy();
  });
});
