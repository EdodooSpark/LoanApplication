import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFormComponent } from './loan-forms.component';

describe('LoanFormComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanFormComponent]
    });
    fixture = TestBed.createComponent(LoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
