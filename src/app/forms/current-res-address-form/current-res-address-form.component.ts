import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IResStatusListItem } from 'src/app/model/resstatus.module';


@Component({
  selector: 'app-current-res-address-form',
  templateUrl: './current-res-address-form.component.html',
  styleUrls: ['./current-res-address-form.component.css']
})
export class CurrentResAddressFormComponent {
 
   CurrentResAddressCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.CurrentResAddressCsdField =this.formBuilder.group({
      houseNumber: new FormControl('',[Validators.required]),
       streetName: new FormControl('',[Validators.required]),
       communityName: new FormControl('',[Validators.required]),
       nearestLandmark: new FormControl('',[Validators.required]),
       town: new FormControl('',[Validators.required]),
       livingSinceDate: new FormControl('',[Validators.required]),
       resstatusCard: new FormControl('',[Validators.required]),
       otherResSat: new FormControl('',[Validators.required]),
       postalAddress: new FormControl('',[Validators.required]),
       city: new FormControl('',[Validators.required]),
       postalSinceDate: new FormControl('',[Validators.required]),
     })

   }

   onSubmit(){
    if (this.CurrentResAddressCsdField.valid){
      console.log(this.CurrentResAddressCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }


// ResStatus csd(checkbox) Start
resstatus : IResStatusListItem[] = [
  {
   id : 1,
   name : "Rent",
   selected : false
  },
  {
   id : 2,
   name : "Own (mortgage)",
   selected : false
  },
  {
    id : 3,
    name : "Own (not mortgage)",
    selected : false
   },
   {
    id : 4,
    name : "Living with parents",
    selected : false
   },
   {
    id : 5,
    name : "Employer provided",
    selected : false
   },
   {
    id : 6,
    name : "Other",
    selected : false
   },
  
 ]

 otherresstatus: string = '';

 toggleSelection(resstatus: IResStatusListItem) {
   console.log(resstatus.id);

   // Reset selection of all resstatuss
   this.resstatus.forEach(item => item.selected = false);

   if (resstatus.name === "More") {
     alert("ji");
   } else if (resstatus.name === "Other") {
     resstatus.selected = true; // Mark "Other" as selected

       // Reset the input value for otherPersonalId
    const otherresstatus = this.CurrentResAddressCsdField.get('otherresstatus');
    if (otherresstatus) {
      otherresstatus.setValue('');
    }
   } else {
     resstatus.selected = !resstatus.selected;
   }
 }


// ResStatus csd(checkbox) End




}



