import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutebolPage } from './futebol.page';

describe('FutebolPage', () => {
  let component: FutebolPage;
  let fixture: ComponentFixture<FutebolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutebolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutebolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
