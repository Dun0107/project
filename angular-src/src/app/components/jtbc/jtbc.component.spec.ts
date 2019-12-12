import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JtbcComponent } from './jtbc.component';

describe('JtbcComponent', () => {
  let component: JtbcComponent;
  let fixture: ComponentFixture<JtbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JtbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JtbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
