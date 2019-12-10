import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gyosu2Component } from './gyosu2.component';

describe('Gyosu2Component', () => {
  let component: Gyosu2Component;
  let fixture: ComponentFixture<Gyosu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gyosu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gyosu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
