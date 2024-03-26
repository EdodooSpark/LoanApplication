import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IMaritalStatusListItem } from 'src/app/model/maritalstatus.module';
import { IMarriageTypeListItem } from 'src/app/model/marriagetype.module';


@Component({
  selector: 'app-marital-stat-depndants-form',
  templateUrl: './marital-stat-depndants-form.component.html',
  styleUrls: ['./marital-stat-depndants-form.component.css']
})
export class MaritalStatusDependantFormComponent {
 
   MaritalStatusDependantCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.MaritalStatusDependantCsdField =this.formBuilder.group({
      maritalstatusCard: new FormControl('',[Validators.required]),
      otherMaritalSat: new FormControl('',[Validators.required]),
      marriageTypeCard: new FormControl('',[Validators.required]),
       spouse: new FormControl('',[Validators.required]),
       children: new FormControl('',[Validators.required]),
       otherSpecify: new FormControl('',[Validators.required]),
       Title: new FormControl('',[Validators.required]),
       firstName: new FormControl('',[Validators.required]),
       lastName: new FormControl('',[Validators.required]),
       mobileNumber: new FormControl('',[Validators.required]),
     })

   }

   onSubmit(){
    if (this.MaritalStatusDependantCsdField.valid){
      console.log(this.MaritalStatusDependantCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }


// maritalstatus csd(checkbox) Start
maritalstatus : IMaritalStatusListItem[] = [
  {
   id : 1,
   name : "Single",
   selected : false
  },
  {
   id : 2,
   name : "Married",
   selected : false
  },
  {
    id : 3,
    name : "Divorced",
    selected : false
   },
   {
    id : 4,
    name : "Widowed",
    selected : false
   },
   {
    id : 5,
    name : "Other",
    selected : false
   },
   
  
 ]

 othermaritalstatus: string = '';

 toggleSelection(maritalstatus: IMaritalStatusListItem) {
   console.log(maritalstatus.id);

   // Reset selection of all maritalstatuss
   this.maritalstatus.forEach(item => item.selected = false);

   if (maritalstatus.name === "More") {
     alert("ji");
   } else if (maritalstatus.name === "Other") {
     maritalstatus.selected = true; // Mark "Other" as selected

     // Reset the input value for othermaritalstatus
     const othermaritalstatus = this.MaritalStatusDependantCsdField.get('otherpsID');
     if (othermaritalstatus) {
       othermaritalstatus.setValue('');
     }
   } else {
     maritalstatus.selected = !maritalstatus.selected;
   }
 }


// maritalstatus csd(checkbox) End


// marriageType csd(checkbox) Start
marriagetype : IMarriageTypeListItem[] = [
  {
   id : 1,
   name : "Customary marriage",
   selected : false
  },
  {
   id : 2,
   name : "Ordinance",
   selected : false
  },
  {
    id : 3,
    name : "Islamic",
    selected : false
   },
   {
    id : 4,
    name : "Widowed",
    selected : false
   },
   {
    id : 5,
    name : "Other",
    selected : false
   },
   
  
 ]

 othermarriagetype: string = '';

 toggleSelection2(marriagetype: IMarriageTypeListItem) {
   console.log(marriagetype.id);

   // Reset selection of all marriagetypes
   this.marriagetype.forEach(item => item.selected = false);

   if (marriagetype.name === "More") {
     alert("ji");
   } else if (marriagetype.name === "Other") {
     marriagetype.selected = true; // Mark "Other" as selected

     // Reset the input value for marriagetype
     this.othermarriagetype = '';
   } else {
     marriagetype.selected = !marriagetype.selected;
   }
 }


// maritaltype csd(checkbox) End

}



