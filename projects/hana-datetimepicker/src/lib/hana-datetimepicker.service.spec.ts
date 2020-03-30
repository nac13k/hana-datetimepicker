import { TestBed } from '@angular/core/testing';

import { HanaDatetimepickerService } from './hana-datetimepicker.service';

describe('HanaDatetimepickerService', () => {
  let service: HanaDatetimepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HanaDatetimepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
