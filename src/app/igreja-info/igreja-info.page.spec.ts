import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgrejaInfoPage } from './igreja-info.page';

describe('IgrejaInfoPage', () => {
  let component: IgrejaInfoPage;
  let fixture: ComponentFixture<IgrejaInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgrejaInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgrejaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
