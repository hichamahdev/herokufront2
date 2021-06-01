import { TestBed } from '@angular/core/testing';

import { TypeportService } from './typeport.service';

describe('TypeportService', () => {
  let service: TypeportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
