import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlistuserComponent } from './projectlistuser.component';

describe('ProjectlistuserComponent', () => {
  let component: ProjectlistuserComponent;
  let fixture: ComponentFixture<ProjectlistuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectlistuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
