import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInfoFormComponent } from './financial-info-form.component';

describe('MainBankingAccountFormComponent', () => {
  let component: FinancialInfoFormComponent;
  let fixture: ComponentFixture<FinancialInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialInfoFormComponent]
    });
    fixture = TestBed.createComponent(FinancialInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
