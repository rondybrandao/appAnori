import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovantesPage } from './comprovantes.page';

describe('ComprovantesPage', () => {
  let component: ComprovantesPage;
  let fixture: ComponentFixture<ComprovantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprovantesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprovantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
