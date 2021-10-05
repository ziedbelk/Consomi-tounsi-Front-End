import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListComponent } from './forum-list.component';

describe('ForumListComponent', () => {
  let component: ForumListComponent;
  let fixture: ComponentFixture<ForumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
