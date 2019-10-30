import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNewsPage } from './fake-news.page';

describe('FakeNewsPage', () => {
  let component: FakeNewsPage;
  let fixture: ComponentFixture<FakeNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
