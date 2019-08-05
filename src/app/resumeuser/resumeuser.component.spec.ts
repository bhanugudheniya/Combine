import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeuserComponent } from './resumeuser.component';

describe('ResumeuserComponent', () => {
  let component: ResumeuserComponent;
  let fixture: ComponentFixture<ResumeuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
