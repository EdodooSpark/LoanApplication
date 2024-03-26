import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IMainBankingAccountListItem } from 'src/app/model/mainbankingaccount.module';
import { ITransAccountListItem } from 'src/app/model/transaccount.module';


@Component({
  selector: 'app-main-banking-account-form',
  templateUrl: './main-banking-account-form.component.html',
  styleUrls: ['./main-banking-account-form.component.css']
})
export class MainBankingAccountFormComponent {
 
  MainBankingAccountCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.MainBankingAccountCsdField =this.formBuilder.group({
      mainbankingaccountCard: new FormControl('',[Validators.required]),
      othermainbankingaccount: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      transaccountCard: new FormControl('',[Validators.required]),
      finacialInstitution: new FormControl('',[Validators.required]),
      branchName: new FormControl('',[Validators.required]),
      dateOpened: new FormControl('',[Validators.required]),
      accountNumber: new FormControl('',[Validators.required]),
      branchCode: new FormControl('',[Validators.required]),
       })

   }

   onSubmit(){
    if (this.MainBankingAccountCsdField.valid){
      console.log(this.MainBankingAccountCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }


// mainbankingaccount csd(checkbox) Start
mainbankingaccount : IMainBankingAccountListItem[] = [
  {
   id : 1,
   name : "Cheque/current",
   selected : false
  },
  {
   id : 2,
   name : "Savings",
   selected : false
  },
  {
    id : 3,
    name : "Other",
    selected : false
   },
   
   
  
 ]

 othermainbankingaccount: string = '';

 toggleSelection(mainbankingaccount: IMainBankingAccountListItem) {
   console.log(mainbankingaccount.id);

   // Reset selection of all mainbankingaccounts
   this.mainbankingaccount.forEach(item => item.selected = false);

   if (mainbankingaccount.name === "More") {
     alert("ji");
   } else if (mainbankingaccount.name === "Other") {
     mainbankingaccount.selected = true; // Mark "Other" as selected

     // Reset the input value for othermainbankingaccount
     const othermainbankingaccount = this.MainBankingAccountCsdField.get('otherpsID');
     if (othermainbankingaccount) {
       othermainbankingaccount.setValue('');
     }
   } else {
     mainbankingaccount.selected = !mainbankingaccount.selected;
   }
 }


// mainbankingaccount csd(checkbox) End






// transaccount csd(checkbox) Start
transaccount : ITransAccountListItem[] = [
  {
   id : 1,
   name : "Yes",
   selected : false
  },
  {
   id : 2,
   name : "No",
   selected : false
  },
  
   
   
  
 ]

 othertransaccount: string = '';

 toggleSelection2(transaccount: ITransAccountListItem) {
   console.log(transaccount.id);

   // Reset selection of all transaccounts
   this.transaccount.forEach(item => item.selected = false);

   if (transaccount.name === "More") {
     alert("ji");
   } else if (transaccount.name === "Other") {
     transaccount.selected = true; // Mark "Other" as selected

     // Reset the input value for othertransaccount
     const othertransaccount = this.MainBankingAccountCsdField.get('otherpsID');
     if (othertransaccount) {
       othertransaccount.setValue('');
     }
   } else {
     transaccount.selected = !transaccount.selected;
   }
 }


// transaccount csd(checkbox) End


}



