import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySacolaPage } from './delivery-sacola.page';

describe('DeliverySacolaPage', () => {
  let component: DeliverySacolaPage;
  let fixture: ComponentFixture<DeliverySacolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverySacolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverySacolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
