import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationDetailsFormComponent } from './loan-app-details-form.component';

describe('ExistingUnsecuredLoanFormComponent', () => {
  let component: LoanApplicationDetailsFormComponent;
  let fixture: ComponentFixture<LoanApplicationDetailsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanApplicationDetailsFormComponent]
    });
    fixture = TestBed.createComponent(LoanApplicationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
