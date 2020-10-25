import { TestBed } from '@angular/core/testing';

import { ApplianceCartService } from './appliance-cart.service';

describe('ApplianceCartService', () => {
  let service: ApplianceCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplianceCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
