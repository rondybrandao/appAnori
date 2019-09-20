import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAnoriPage } from './info-anori.page';

describe('InfoAnoriPage', () => {
  let component: InfoAnoriPage;
  let fixture: ComponentFixture<InfoAnoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAnoriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAnoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
