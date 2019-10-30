import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMenuPage } from './delivery-menu.page';

describe('DeliveryMenuPage', () => {
  let component: DeliveryMenuPage;
  let fixture: ComponentFixture<DeliveryMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
