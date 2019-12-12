import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasNotificacoesPage } from './minhas-notificacoes.page';

describe('MinhasNotificacoesPage', () => {
  let component: MinhasNotificacoesPage;
  let fixture: ComponentFixture<MinhasNotificacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasNotificacoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasNotificacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
