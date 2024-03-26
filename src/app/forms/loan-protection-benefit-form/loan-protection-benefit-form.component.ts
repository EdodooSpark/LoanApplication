import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loan-protection-benefit-form',
  templateUrl: './loan-protection-benefit-form.component.html',
  styleUrls: ['./loan-protection-benefit-form.component.css']
})
export class LoanProtectionBenefitFormComponent {
 
  LoanProtectionBenefitCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.LoanProtectionBenefitCsdField =this.formBuilder.group({
      ratePercent: new FormControl('',[Validators.required]),
      premiumAmt: new FormControl('',[Validators.required]),
      oneOffPremium: new FormControl('',[Validators.required]),
      firstPremiumAmt: new FormControl('',[Validators.required]),
      value: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      details: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      accNumber: new FormControl('',[Validators.required]),
      bankBranch: new FormControl('',[Validators.required]),
      cusName: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      fullName: new FormControl('',[Validators.required]),
      customerName: new FormControl('',[Validators.required]),
      dateCus: new FormControl('',[Validators.required]),
      currentEmployer: new FormControl('',[Validators.required]),
      currentEmpDate: new FormControl('',[Validators.required]),
      loanGrant: new FormControl('',[Validators.required]),
      employeeOf: new FormControl('',[Validators.required]),
      endorsedBy: new FormControl('',[Validators.required]),
      officialTitle: new FormControl('',[Validators.required]),
      dateEndorsed: new FormControl('',[Validators.required]),
     })

   }

   onSubmit(){
    if (this.LoanProtectionBenefitCsdField.valid){
      console.log(this.LoanProtectionBenefitCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }



}



