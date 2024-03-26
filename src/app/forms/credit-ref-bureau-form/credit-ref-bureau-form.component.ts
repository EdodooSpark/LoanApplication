import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-credit-ref-bureau-form',
  templateUrl: './credit-ref-bureau-form.component.html',
  styleUrls: ['./credit-ref-bureau-form.component.css']
})
export class CreditReferenceBureauConsentFormComponent {
 
  CreditReferenceBureauConsentCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.CreditReferenceBureauConsentCsdField =this.formBuilder.group({
      authorityName: new FormControl('',[Validators.required]),
      authorisedDesignation: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      witnessName: new FormControl('',[Validators.required]),
      witnessDesignation: new FormControl('',[Validators.required]),
      dateWitnessed: new FormControl('',[Validators.required]),
          })

   }

   onSubmit(){
    if (this.CreditReferenceBureauConsentCsdField.valid){
      console.log(this.CreditReferenceBureauConsentCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }



}



