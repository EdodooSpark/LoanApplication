import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ref-non-family-member-form',
  templateUrl: './ref-non-family-member-form.component.html',
  styleUrls: ['./ref-non-family-member-form.component.css']
})
export class RefreeNonFamilyMemberFormComponent {

  RefreeNonFamilyMemberCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.RefreeNonFamilyMemberCsdField =this.formBuilder.group({
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
    if (this.RefreeNonFamilyMemberCsdField.valid){
      console.log(this.RefreeNonFamilyMemberCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }



}



