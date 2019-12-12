import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotomaniaPage } from './lotomania.page';

describe('LotomaniaPage', () => {
  let component: LotomaniaPage;
  let fixture: ComponentFixture<LotomaniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotomaniaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotomaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
