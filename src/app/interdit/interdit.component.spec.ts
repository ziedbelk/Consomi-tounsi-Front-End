import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterditComponent } from './interdit.component';

describe('InterditComponent', () => {
  let component: InterditComponent;
  let fixture: ComponentFixture<InterditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
