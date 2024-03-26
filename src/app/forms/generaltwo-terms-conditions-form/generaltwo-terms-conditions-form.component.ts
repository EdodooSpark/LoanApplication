import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-generaltwo-terms-conditions-form',
  templateUrl: './generaltwo-terms-conditions-form.component.html',
  styleUrls: ['./generaltwo-terms-conditions-form.component.css']
})
export class GeneralTermsTwoConditionFormComponent {
 
  GeneralTermsTwoConditionCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.GeneralTermsTwoConditionCsdField =this.formBuilder.group({
      applicantName: new FormControl('',[Validators.required]),
      acceptanceDate: new FormControl('',[Validators.required]),
      })

   }

   onSubmit(){
    if (this.GeneralTermsTwoConditionCsdField.valid){
      console.log(this.GeneralTermsTwoConditionCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }



}



