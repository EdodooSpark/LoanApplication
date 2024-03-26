import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ref-family-member-form',
  templateUrl: './ref-family-member-form.component.html',
  styleUrls: ['./ref-family-member-form.component.css']
})
export class RefreeFamilyMemberFormComponent {

  RefreeFamilyMemberCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.RefreeFamilyMemberCsdField =this.formBuilder.group({
       Title: new FormControl('',[Validators.required]),
       firstName: new FormControl('',[Validators.required]),
       lastName: new FormControl('',[Validators.required]),
       relationship: new FormControl('',[Validators.required]),
       mobileNumber: new FormControl('',[Validators.required]),
       dob: new FormControl('',[Validators.required]),
       houseNumber: new FormControl('',[Validators.required]),
       streetName: new FormControl('',[Validators.required]),
       nameOfCommunity: new FormControl('',[Validators.required]),
       nearestLandmark: new FormControl('',[Validators.required]),
       townCity: new FormControl('',[Validators.required]),
       livingAddressSince: new FormControl('',[Validators.required]),
     })

   }

   onSubmit(){
    if (this.RefreeFamilyMemberCsdField.valid){
      console.log(this.RefreeFamilyMemberCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }



}



