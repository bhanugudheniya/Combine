import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetaillistuserComponent } from './projectdetaillistuser.component';

describe('ProjectdetaillistuserComponent', () => {
  let component: ProjectdetaillistuserComponent;
  let fixture: ComponentFixture<ProjectdetaillistuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetaillistuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetaillistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
