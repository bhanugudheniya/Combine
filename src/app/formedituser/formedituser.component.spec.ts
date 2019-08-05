import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormedituserComponent } from './formedituser.component';

describe('FormedituserComponent', () => {
  let component: FormedituserComponent;
  let fixture: ComponentFixture<FormedituserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormedituserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
