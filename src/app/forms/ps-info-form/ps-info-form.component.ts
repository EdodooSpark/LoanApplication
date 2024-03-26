import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IGenderListItem } from 'src/app/model/gender.module';
import { IPersonalIDListItem } from 'src/app/model/personalid.module';


@Component({
  selector: 'app-ps-info-form',
  templateUrl: './ps-info-form.component.html',
  styleUrls: ['./ps-info-form.component.css']
})
export class PersonnalInfoFormComponent {
  gender : IGenderListItem[] = [
    {
     id : 1,
     name : "male",
     selected : false
    },
    {
     id : 2,
     name : "Female",
     selected : false
    },
    
   ]
 
 
   toggleSelection(gender: IGenderListItem, index: number) {
    console.log(gender.id);
    console.log(index);

    const specificIndividual = this.gender[index];
    console.log(specificIndividual);
 
       //map all genders as inactive
       // this.genders.map((gender)=> gender.selected = false)
 
       //make selected active
       if (gender.name == "More"){
         alert("ji")
       }
       gender.selected = !gender.selected;
   }

   PersonalIDCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.PersonalIDCsdField =this.formBuilder.group({
       Title: new FormControl('',[Validators.required]),
       firstName: new FormControl('',[Validators.required]),
       lastName: new FormControl('',[Validators.required]),
       dob: new FormControl('',[Validators.required]),
       genderCard: new FormControl('',[Validators.required]),
       personalidCard: new FormControl('',[Validators.required]),
       otherpsID: new FormControl('',[Validators.required]),
       idNumber: new FormControl('',[Validators.required]),
       countryName: new FormControl('',[Validators.required]),
       telephoneHome: new FormControl('',[Validators.required]),
       telephoneWork: new FormControl('',[Validators.required]),
       mobileNumber: new FormControl('',[Validators.required]),
     })

   }

   onSubmit(){
    if (this.PersonalIDCsdField.valid){
      console.log(this.PersonalIDCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }


// PersonalId csd(checkbox) Start
personalid : IPersonalIDListItem[] = [
  {
   id : 1,
   name : "Driver's license",
   selected : false
  },
  {
   id : 2,
   name : "Passport",
   selected : false
  },
  {
    id : 3,
    name : "Voters ID",
    selected : false
   },
   {
    id : 4,
    name : "NHIS",
    selected : false
   },
   {
    id : 5,
    name : "NHIS",
    selected : false
   },
   {
    id : 6,
    name : "Other",
    selected : false
   },
  
 ]

 otherPersonalId: string = '';
 toggleSelection2(personalid: IPersonalIDListItem) {
  console.log(personalid.id);

  // Reset selection of all personalids
  this.personalid.forEach(item => item.selected = false);

  if (personalid.name === "More") {
    alert("ji");
  } else if (personalid.name === "Other") {
    personalid.selected = true; // Mark "Other" as selected

    // Reset the input value for otherPersonalId
    const otherpsIDControl = this.PersonalIDCsdField.get('otherpsID');
    if (otherpsIDControl) {
      otherpsIDControl.setValue('');
    }
  } else {
    personalid.selected = !personalid.selected;
  }
}




// PersonalId csd(checkbox) End




}



