import { TestBed } from '@angular/core/testing';

import { ServicePortService } from './service-port.service';

describe('ServicePortService', () => {
  let service: ServicePortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
