import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoTorneioPage } from './bingo-torneio.page';

describe('BingoTorneioPage', () => {
  let component: BingoTorneioPage;
  let fixture: ComponentFixture<BingoTorneioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoTorneioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoTorneioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
