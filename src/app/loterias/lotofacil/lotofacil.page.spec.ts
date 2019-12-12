import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotofacilPage } from './lotofacil.page';

describe('LotofacilPage', () => {
  let component: LotofacilPage;
  let fixture: ComponentFixture<LotofacilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotofacilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotofacilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
