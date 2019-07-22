import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefeituraPage } from './prefeitura.page';

describe('PrefeituraPage', () => {
  let component: PrefeituraPage;
  let fixture: ComponentFixture<PrefeituraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefeituraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefeituraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
