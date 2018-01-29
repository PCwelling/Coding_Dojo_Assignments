import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionProfileComponent } from './question-profile.component';

describe('QuestionProfileComponent', () => {
  let component: QuestionProfileComponent;
  let fixture: ComponentFixture<QuestionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
