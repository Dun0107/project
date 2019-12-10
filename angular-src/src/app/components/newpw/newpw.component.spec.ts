import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpwComponent } from './newpw.component';

describe('NewpwComponent', () => {
  let component: NewpwComponent;
  let fixture: ComponentFixture<NewpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
