import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LoanFormComponent } from 'src/app/forms/loan-form/loan-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { PersonnalInfoFormComponent } from '../forms/ps-info-form/ps-info-form.component';
import { CurrentResAddressFormComponent } from '../forms/current-res-address-form/current-res-address-form.component';
import { MaritalStatusDependantFormComponent } from '../forms/marital-stat-depndants-form/marital-stat-depndants-form.component';
import { RefreeFamilyMemberFormComponent } from '../forms/ref-family-member-form/ref-family-member-form.component';
import { RefreeNonFamilyMemberFormComponent } from '../forms/ref-non-family-member-form/ref-non-family-member-form.component';
import { EmploymentDetailsFormComponent } from '../forms/employment-details-form/employment-details-form.component';
import { MainBankingAccountFormComponent } from '../forms/main-banking-account-form/main-banking-account-form.component';
import { FinancialInfoFormComponent } from '../forms/financial-info-form/financial-info-form.component';
import { ExistingUnsecuredLoanFormComponent } from '../forms/existing-unsecured-loans-form/existing-unsecured-loans-form.component';
import { LoanApplicationDetailsFormComponent } from '../forms/loan-app-details-form/loan-app-details-form.component';
import { LoanProtectionBenefitFormComponent } from '../forms/loan-protection-benefit-form/loan-protection-benefit-form.component';
import { CreditReferenceBureauConsentFormComponent } from '../forms/credit-ref-bureau-form/credit-ref-bureau-form.component';
import { GeneralTermsConditionFormComponent } from '../forms/general-terms-conditions-form/general-terms-conditions-form.component';
import { GeneralTermsTwoConditionFormComponent } from '../forms/generaltwo-terms-conditions-form/generaltwo-terms-conditions-form.component';



@NgModule({
  declarations: [
    LoanFormComponent,
    PersonnalInfoFormComponent,
    CurrentResAddressFormComponent,
    MaritalStatusDependantFormComponent,
    RefreeFamilyMemberFormComponent,
    RefreeNonFamilyMemberFormComponent,
    EmploymentDetailsFormComponent,
    MainBankingAccountFormComponent,
    FinancialInfoFormComponent,
    ExistingUnsecuredLoanFormComponent,
    LoanApplicationDetailsFormComponent,
    LoanProtectionBenefitFormComponent,
    CreditReferenceBureauConsentFormComponent,
    GeneralTermsConditionFormComponent,
    GeneralTermsTwoConditionFormComponent,
    
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  
  providers: [DatePipe],
  exports: [
    
    LoanFormComponent,
    PersonnalInfoFormComponent,
    CurrentResAddressFormComponent,
    MaritalStatusDependantFormComponent,
    RefreeFamilyMemberFormComponent,
    RefreeNonFamilyMemberFormComponent,
    EmploymentDetailsFormComponent,
    MainBankingAccountFormComponent,
    FinancialInfoFormComponent,
    ExistingUnsecuredLoanFormComponent,
    LoanApplicationDetailsFormComponent,
    LoanProtectionBenefitFormComponent,
    CreditReferenceBureauConsentFormComponent,
    GeneralTermsConditionFormComponent,
    GeneralTermsTwoConditionFormComponent,
    
  ]
})
export class SharedModule { }
