import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryConfirmacaoPage } from './delivery-confirmacao.page';

describe('DeliveryConfirmacaoPage', () => {
  let component: DeliveryConfirmacaoPage;
  let fixture: ComponentFixture<DeliveryConfirmacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryConfirmacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryConfirmacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
