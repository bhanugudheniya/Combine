import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanuserComponent } from './meanuser.component';

describe('MeanuserComponent', () => {
  let component: MeanuserComponent;
  let fixture: ComponentFixture<MeanuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
