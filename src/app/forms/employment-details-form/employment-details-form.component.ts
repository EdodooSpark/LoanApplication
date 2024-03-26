import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmploymentTypeListItem } from 'src/app/model/employmenttype.module';
import { IMarriageTypeListItem } from 'src/app/model/marriagetype.module';


@Component({
  selector: 'app-employment-details-form',
  templateUrl: './employment-details-form.component.html',
  styleUrls: ['./employment-details-form.component.css']
})
export class EmploymentDetailsFormComponent {
 
  EmploymentTypeCsdField: FormGroup
   constructor (private formBuilder: FormBuilder){
     this.EmploymentTypeCsdField =this.formBuilder.group({
      employmenttypeCard: new FormControl('',[Validators.required]),
      employerName: new FormControl('',[Validators.required]),
      Industry: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      cityTown: new FormControl('',[Validators.required]),
      employerTel: new FormControl('',[Validators.required]),
      employmentDate: new FormControl('',[Validators.required]),
      contractExpdate: new FormControl('',[Validators.required]),
      ssnitNumber: new FormControl('',[Validators.required]),
      telNum: new FormControl('',[Validators.required]),
      eduLevel: new FormControl('',[Validators.required]),
      occupation: new FormControl('',[Validators.required]),
      designation: new FormControl('',[Validators.required]),
      grossMonthSalary: new FormControl('',[Validators.required]),
      netmonthSalary: new FormControl('',[Validators.required]),
      staffNumber: new FormControl('',[Validators.required]),
      periodEmployed: new FormControl('',[Validators.required]),
     })

   }

   onSubmit(){
    if (this.EmploymentTypeCsdField.valid){
      console.log(this.EmploymentTypeCsdField.value)
      
    }
    else{
      alert("error")
    }
 
  }


// employmenttype csd(checkbox) Start
employmenttype : IEmploymentTypeListItem[] = [
  {
   id : 1,
   name : "Permanent",
   selected : false
  },
  {
   id : 2,
   name : "Private practice",
   selected : false
  },
  {
    id : 3,
    name : "Self-employed",
    selected : false
   },
   {
    id : 4,
    name : "Contract",
    selected : false
   },
   {
    id : 5,
    name : "Part-time",
    selected : false
   },
   {
    id : 6,
    name : "Pensioner",
    selected : false
   },
   {
    id : 7,
    name : "Student",
    selected : false
   },
   {
    id : 8,
    name : "Unemployed",
    selected : false
   },
   
  
 ]

 otheremploymenttype: string = '';

 toggleSelection(employmenttype: IEmploymentTypeListItem) {
   console.log(employmenttype.id);

   // Reset selection of all employmenttypes
   this.employmenttype.forEach(item => item.selected = false);

   if (employmenttype.name === "More") {
     alert("ji");
   } else if (employmenttype.name === "Other") {
     employmenttype.selected = true; // Mark "Other" as selected

     // Reset the input value for otheremploymenttype
     const otheremploymenttype = this.EmploymentTypeCsdField.get('otherpsID');
     if (otheremploymenttype) {
       otheremploymenttype.setValue('');
     }
   } else {
     employmenttype.selected = !employmenttype.selected;
   }
 }


// employmenttype csd(checkbox) End


}



