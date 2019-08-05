import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmoreuserComponent } from './readmoreuser.component';

describe('ReadmoreuserComponent', () => {
  let component: ReadmoreuserComponent;
  let fixture: ComponentFixture<ReadmoreuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmoreuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmoreuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
