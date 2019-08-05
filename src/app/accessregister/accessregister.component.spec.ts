import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessregisterComponent } from './accessregister.component';

describe('AccessregisterComponent', () => {
  let component: AccessregisterComponent;
  let fixture: ComponentFixture<AccessregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
