import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcgenComponent } from './bcgen.component';

describe('BcgenComponent', () => {
  let component: BcgenComponent;
  let fixture: ComponentFixture<BcgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
