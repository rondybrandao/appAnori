import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgrejaPage } from './igreja.page';

describe('IgrejaPage', () => {
  let component: IgrejaPage;
  let fixture: ComponentFixture<IgrejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgrejaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgrejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
