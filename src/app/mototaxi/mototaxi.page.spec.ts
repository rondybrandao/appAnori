import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MototaxiPage } from './mototaxi.page';

describe('MototaxiPage', () => {
  let component: MototaxiPage;
  let fixture: ComponentFixture<MototaxiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MototaxiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MototaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
