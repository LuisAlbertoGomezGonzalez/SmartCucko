import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammedPlayPage } from './programmed-play.page';

describe('ProgrammedPlayPage', () => {
  let component: ProgrammedPlayPage;
  let fixture: ComponentFixture<ProgrammedPlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammedPlayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammedPlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
