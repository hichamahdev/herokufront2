import { TestBed } from '@angular/core/testing';

import { PortEquipService } from './port-equip.service';

describe('PortEquipService', () => {
  let service: PortEquipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortEquipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
