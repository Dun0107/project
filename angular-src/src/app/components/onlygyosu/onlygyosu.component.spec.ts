import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlygyosuComponent } from './onlygyosu.component';

describe('OnlygyosuComponent', () => {
  let component: OnlygyosuComponent;
  let fixture: ComponentFixture<OnlygyosuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlygyosuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlygyosuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
