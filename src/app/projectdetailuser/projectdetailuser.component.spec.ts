import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailuserComponent } from './projectdetailuser.component';

describe('ProjectdetailuserComponent', () => {
  let component: ProjectdetailuserComponent;
  let fixture: ComponentFixture<ProjectdetailuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
