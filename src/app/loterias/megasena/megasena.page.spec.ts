import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegasenaPage } from './megasena.page';

describe('MegasenaPage', () => {
  let component: MegasenaPage;
  let fixture: ComponentFixture<MegasenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegasenaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
