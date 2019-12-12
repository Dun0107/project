import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Is2Component } from './is2.component';

describe('Is2Component', () => {
  let component: Is2Component;
  let fixture: ComponentFixture<Is2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Is2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Is2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
