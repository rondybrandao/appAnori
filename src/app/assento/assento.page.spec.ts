import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssentoPage } from './assento.page';

describe('AssentoPage', () => {
  let component: AssentoPage;
  let fixture: ComponentFixture<AssentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
