import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-general-terms-conditions-form',
  templateUrl: './general-terms-conditions-form.component.html',
  styleUrls: ['./general-terms-conditions-form.component.css']
})
export class GeneralTermsConditionFormComponent {
 
  GeneralTermsConditionCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.GeneralTermsConditionCsdField =this.formBuilder.group({
      authorityName: new FormControl('',[Validators.required]),
      authorisedDesignation: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      witnessName: new FormControl('',[Validators.required]),
      witnessDesignation: new FormControl('',[Validators.required]),
      dateWitnessed: new FormControl('',[Validators.required]),
          })

   }

   onSubmit(){
    if (this.GeneralTermsConditionCsdField.valid){
      console.log(this.GeneralTermsConditionCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }



}



