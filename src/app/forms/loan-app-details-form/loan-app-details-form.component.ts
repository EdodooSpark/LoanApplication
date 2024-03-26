import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoanTypeListItem } from 'src/app/model/loantype.module';
import { IInterestRateListItem } from 'src/app/model/interestrate.module';
import { IRepaymentmethodListItem } from 'src/app/model/repaymentmethod.module';
import { IloanProtectionCoverListItem } from 'src/app/model/loanprotectioncover.module';
import { ILesserOfferListItem } from 'src/app/model/lesseroffer.module';


@Component({
  selector: 'app-loan-app-details-form',
  templateUrl: './loan-app-details-form.component.html',
  styleUrls: ['./loan-app-details-form.component.css']
})
export class LoanApplicationDetailsFormComponent {
 
  LoanApplicationDetailsCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.LoanApplicationDetailsCsdField =this.formBuilder.group({
      loanAmt: new FormControl('',[Validators.required]),
      loantypeCard: new FormControl('',[Validators.required]),
      otherloantype: new FormControl('',[Validators.required]),
      interestrateCard: new FormControl('',[Validators.required]),
      score: new FormControl('',[Validators.required]),
      from: new FormControl('',[Validators.required]),
      to: new FormControl('',[Validators.required]),
      marginfirst: new FormControl('',[Validators.required]),
      marginsecond: new FormControl('',[Validators.required]),
      GuaranteeDetail: new FormControl('',[Validators.required]),
      repaymentmethodCard: new FormControl('',[Validators.required]),
      loanTerm: new FormControl('',[Validators.required]),
      repaymentamt: new FormControl('',[Validators.required]),
      loanprotectioncoverCard: new FormControl('',[Validators.required]),
      lesserofferCard: new FormControl('',[Validators.required]),
      minAmt: new FormControl('',[Validators.required]),
      })

   }

   onSubmit(){
    if (this.LoanApplicationDetailsCsdField.valid){
      console.log(this.LoanApplicationDetailsCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }


// loantype csd(checkbox) Start
loantype : ILoanTypeListItem[] = [
  {
   id : 1,
   name : "Fixed term loan",
   selected : false
  },
  {
   id : 2,
   name : "Revolving term loan",
   selected : false
  },
  {
    id : 3,
    name : "Consumer Finance Term Loan",
    selected : false
   },
   {
    id : 4,
    name : "EMS Non-guaranteed",
    selected : false
   },
   {
    id : 5,
    name : "EMS Guaranteed",
    selected : false
   },
   {
     id : 6,
     name : "Other",
     selected : false
    },
  
 ]

 otherloantype: string = '';

 toggleSelection(loantype: ILoanTypeListItem) {
   console.log(loantype.id);

   // Reset selection of all loantypes
   this.loantype.forEach(item => item.selected = false);

   if (loantype.name === "More") {
     alert("ji");
   } else if (loantype.name === "Other") {
     loantype.selected = true; // Mark "Other" as selected

     // Reset the input value for otherloantype
     const otherloantype = this.LoanApplicationDetailsCsdField.get('Other');
     if (otherloantype) {
       otherloantype.setValue('');
     }
   } else {
     loantype.selected = !loantype.selected;
   }
 }


// declaredinsolvent csd(checkbox) End






// interestrate csd(checkbox) Start
interestrate : IInterestRateListItem[] = [
  {
   id : 1,
   name : "Fixed",
   selected : false
  },
  {
   id : 2,
   name : "Variable",
   selected : false
  },
  // {
  //   id : 3,
  //   name : "other",
  //   selected : false
  //  },
 
 ]

 otherinterestrate: string = '';

 toggleSelection2(interestrate: IInterestRateListItem) {
   console.log(interestrate.id);

   // Reset selection of all interestrates
   this.interestrate.forEach(item => item.selected = false);

   if (interestrate.name === "More") {
     alert("ji");
   } else if (interestrate.name === "Other") {
     interestrate.selected = true; // Mark "Other" as selected

     // Reset the input value for otherinterestrate
     const otherinterestrate = this.LoanApplicationDetailsCsdField.get('Other');
     if (otherinterestrate) {
       otherinterestrate.setValue('');
     }
   } else {
     interestrate.selected = !interestrate.selected;
   }
 }
// interestrate csd(checkbox) End



// repaymentmethod csd(checkbox) Start
repaymentmethod : IRepaymentmethodListItem[] = [
  {
   id : 1,
   name : "Direct payroll deduction",
   selected : false
  },
  {
   id : 2,
   name : "Direct debit",
   selected : false
  },
  {
    id : 3,
    name : "Direct deposit",
    selected : false
   },
   {
    id : 4,
    name : "Standing order",
    selected : false
   },
   {
    id : 5,
    name : "Other",
    selected : false
   },
   
   
  
 ]

 otherrepaymentmethod: string = '';

 toggleSelection3(repaymentmethod: IRepaymentmethodListItem) {
   console.log(repaymentmethod.id);

   // Reset selection of all repaymentmethods
   this.repaymentmethod.forEach(item => item.selected = false);

   if (repaymentmethod.name === "More") {
     alert("ji");
   } else if (repaymentmethod.name === "Other") {
     repaymentmethod.selected = true; // Mark "Other" as selected

     // Reset the input value for otherrepaymentmethod
     const otherrepaymentmethod = this.LoanApplicationDetailsCsdField.get('Other');
     if (otherrepaymentmethod) {
       otherrepaymentmethod.setValue('');
     }
   } else {
     repaymentmethod.selected = !repaymentmethod.selected;
   }
 }

// repaymentmethod csd(checkbox) End



// loanprotectioncover csd(checkbox) Start
loanprotectioncover : IloanProtectionCoverListItem[] = [
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

 otherloanprotectioncover: string = '';

 toggleSelection4(loanprotectioncover: IloanProtectionCoverListItem) {
   console.log(loanprotectioncover.id);

   // Reset selection of all loanprotectioncovers
   this.loanprotectioncover.forEach(item => item.selected = false);

   if (loanprotectioncover.name === "More") {
     alert("ji");
   } else if (loanprotectioncover.name === "Other") {
     loanprotectioncover.selected = true; // Mark "Other" as selected

     // Reset the input value for otherloanprotectioncover
     const otherloanprotectioncover = this.LoanApplicationDetailsCsdField.get('Other');
     if (otherloanprotectioncover) {
       otherloanprotectioncover.setValue('');
     }
   } else {
     loanprotectioncover.selected = !loanprotectioncover.selected;
   }
 }

// loanprotectioncover csd(checkbox) End



// lesseroffer csd(checkbox) Start
lesseroffer : ILesserOfferListItem[] = [
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
  // {
  //   id : 3,
  //   name : "Other",
  //   selected : false
  //  },
 
 ]

 otherlesseroffer: string = '';

 toggleSelection5(lesseroffer: ILesserOfferListItem) {
   console.log(lesseroffer.id);

   // Reset selection of all lesseroffers
   this.lesseroffer.forEach(item => item.selected = false);

   if (lesseroffer.name === "More") {
     alert("ji");
   } else if (lesseroffer.name === "Other") {
     lesseroffer.selected = true; // Mark "Other" as selected

     // Reset the input value for otherlesseroffer
     const otherlesseroffer = this.LoanApplicationDetailsCsdField.get('Other');
     if (otherlesseroffer) {
       otherlesseroffer.setValue('');
     }
   } else {
     lesseroffer.selected = !lesseroffer.selected;
   }
 }
// lesseroffer csd(chelesseroffer

}



