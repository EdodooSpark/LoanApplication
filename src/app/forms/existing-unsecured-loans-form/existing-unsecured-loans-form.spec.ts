import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUnsecuredLoanFormComponent } from './existing-unsecured-loans-form.component';

describe('ExistingUnsecuredLoanFormComponent', () => {
  let component: ExistingUnsecuredLoanFormComponent;
  let fixture: ComponentFixture<ExistingUnsecuredLoanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingUnsecuredLoanFormComponent]
    });
    fixture = TestBed.createComponent(ExistingUnsecuredLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
