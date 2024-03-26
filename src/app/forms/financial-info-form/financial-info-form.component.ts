import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-financial-info-form',
  templateUrl: './financial-info-form.component.html',
  styleUrls: ['./financial-info-form.component.css']
})
export class FinancialInfoFormComponent {
 
  FinancialInfoCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.FinancialInfoCsdField =this.formBuilder.group({
      rentpayment: new FormControl('',[Validators.required]),
      vehiclePayment: new FormControl('',[Validators.required]),
      verifiableIncome: new FormControl('',[Validators.required]),
      debtPayment: new FormControl('',[Validators.required]),
      guaranteedBonus: new FormControl('',[Validators.required]),
      monthlyCommitment: new FormControl('',[Validators.required]),
       })

   }

   onSubmit(){
    if (this.FinancialInfoCsdField.valid){
      console.log(this.FinancialInfoCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }



}



