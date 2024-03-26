import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDeclaredInsolventListItem } from 'src/app/model/declaredinsolvent.module';
import { IGuarantorListItem } from 'src/app/model/guarantor.module';


@Component({
  selector: 'app-existing-unsecured-loans-form',
  templateUrl: './existing-unsecured-loans-form.component.html',
  styleUrls: ['./existing-unsecured-loans-form.component.css']
})
export class ExistingUnsecuredLoanFormComponent {
 
  ExistingUnsecuredLoanCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.ExistingUnsecuredLoanCsdField =this.formBuilder.group({
      total: new FormControl('',[Validators.required]),
      declaredinsolventCard: new FormControl('',[Validators.required]),
      ifyes: new FormControl('',[Validators.required]),
      guarantorCard: new FormControl('',[Validators.required]),
      GuaranteeDetail: new FormControl('',[Validators.required]),
     })

   }

   onSubmit(){
    if (this.ExistingUnsecuredLoanCsdField.valid){
      console.log(this.ExistingUnsecuredLoanCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }


// declaredinsolvent csd(checkbox) Start
declaredinsolvent : IDeclaredInsolventListItem[] = [
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
  {
    id : 3,
    name : "If yes,rehabilitation date",
    selected : false
   },
  
 ]

 otherdeclaredinsolvent: string = '';

 toggleSelection(declaredinsolvent: IDeclaredInsolventListItem) {
   console.log(declaredinsolvent.id);

   // Reset selection of all declaredinsolvents
   this.declaredinsolvent.forEach(item => item.selected = false);

   if (declaredinsolvent.name === "More") {
     alert("ji");
   } else if (declaredinsolvent.name === "If yes,rehabilitation date") {
     declaredinsolvent.selected = true; // Mark "If yes,rehabilitation date" as selected

     // Reset the input value for ifyesdeclaredinsolvent
     const ifyesdeclaredinsolvent = this.ExistingUnsecuredLoanCsdField.get('ifYes');
     if (ifyesdeclaredinsolvent) {
       ifyesdeclaredinsolvent.setValue('');
     }
   } else {
     declaredinsolvent.selected = !declaredinsolvent.selected;
   }
 }


// declaredinsolvent csd(checkbox) End






// guarantor csd(checkbox) Start
guarantor : IGuarantorListItem[] = [
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
  //   name : "If yes,please give details of guarantee",
  //   selected : false
  //  },
   
   
  
 ]

 otherguarantor: string = '';

 toggleSelection2(guarantor: IGuarantorListItem) {
   console.log(guarantor.id);

   // Reset selection of all guarantors
   this.guarantor.forEach(item => item.selected = false);

   if (guarantor.name === "More") {
     alert("ji");
   } else if (guarantor.name === "If yes,please give details of guarantee") {
     guarantor.selected = true; // Mark "Other" as selected

     // Reset the input value for ifYesguarantor
     const ifYesguarantor = this.ExistingUnsecuredLoanCsdField.get('ifYesGuarantee');
     if (ifYesguarantor) {
       ifYesguarantor.setValue('');
     }
   } else {
     guarantor.selected = !guarantor.selected;
   }
 }


// guarantor csd(checkbox) End


}



