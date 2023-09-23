import { TestBed } from '@angular/core/testing';

import { Cars.Service.TsService } from './cars.service.ts.service';

describe('Cars.Service.TsService', () => {
  let service: Cars.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cars.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
