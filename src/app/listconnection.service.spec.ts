import { TestBed } from '@angular/core/testing';

import { ListconnectionService } from './listconnection.service';

describe('ListconnectionService', () => {
  let service: ListconnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListconnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
