import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectenrolluserComponent } from './projectenrolluser.component';

describe('ProjectenrolluserComponent', () => {
  let component: ProjectenrolluserComponent;
  let fixture: ComponentFixture<ProjectenrolluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectenrolluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectenrolluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
