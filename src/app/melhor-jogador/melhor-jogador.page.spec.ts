import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhorJogadorPage } from './melhor-jogador.page';

describe('MelhorJogadorPage', () => {
  let component: MelhorJogadorPage;
  let fixture: ComponentFixture<MelhorJogadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhorJogadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhorJogadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
