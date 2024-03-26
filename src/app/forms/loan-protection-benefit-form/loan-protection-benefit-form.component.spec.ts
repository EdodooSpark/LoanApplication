import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProtectionBenefitFormComponent } from './loan-protection-benefit-form.component';

describe('LoanProtectionBenefitFormComponent', () => {
  let component: LoanProtectionBenefitFormComponent;
  let fixture: ComponentFixture<LoanProtectionBenefitFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanProtectionBenefitFormComponent]
    });
    fixture = TestBed.createComponent(LoanProtectionBenefitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
