import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumuserComponent } from './forumuser.component';

describe('ForumuserComponent', () => {
  let component: ForumuserComponent;
  let fixture: ComponentFixture<ForumuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
