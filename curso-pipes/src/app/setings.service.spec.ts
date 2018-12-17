import { TestBed, inject } from '@angular/core/testing';

import { SetingsService } from './setings.service';

describe('SetingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetingsService]
    });
  });

  it('should be created', inject([SetingsService], (service: SetingsService) => {
    expect(service).toBeTruthy();
  }));
});
