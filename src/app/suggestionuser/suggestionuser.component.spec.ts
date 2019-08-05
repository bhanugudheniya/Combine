import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionuserComponent } from './suggestionuser.component';

describe('SuggestionuserComponent', () => {
  let component: SuggestionuserComponent;
  let fixture: ComponentFixture<SuggestionuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
