import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemPage } from './viagem.page';

describe('ViagemPage', () => {
  let component: ViagemPage;
  let fixture: ComponentFixture<ViagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
