import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanaDatetimepickerComponent } from './hana-datetimepicker.component';

describe('HanaDatetimepickerComponent', () => {
  let component: HanaDatetimepickerComponent;
  let fixture: ComponentFixture<HanaDatetimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanaDatetimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanaDatetimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
