import { TestBed } from '@angular/core/testing';

import { ColetasServiceService } from './coletas-service.service';

describe('ColetasServiceService', () => {
  let service: ColetasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColetasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
