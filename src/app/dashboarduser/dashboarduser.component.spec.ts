import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarduserComponent } from './dashboarduser.component';

describe('DashboarduserComponent', () => {
  let component: DashboarduserComponent;
  let fixture: ComponentFixture<DashboarduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
