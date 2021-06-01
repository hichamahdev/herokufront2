import { TestBed } from '@angular/core/testing';

import { AnneauService } from './anneau.service';

describe('AnneauService', () => {
  let service: AnneauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnneauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
