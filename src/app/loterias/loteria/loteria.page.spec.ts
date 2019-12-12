import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteriaPage } from './loteria.page';

describe('LoteriaPage', () => {
  let component: LoteriaPage;
  let fixture: ComponentFixture<LoteriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
