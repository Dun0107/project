import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cal3Component } from './cal3.component';

describe('Cal3Component', () => {
  let component: Cal3Component;
  let fixture: ComponentFixture<Cal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
