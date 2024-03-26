import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IIndividualListItem } from 'src/app/model/individual.module';
import { ICondictionalListItem } from 'src/app/model/condictional.module';
import { IStaffIndicatorListItem } from 'src/app/model/staffindicator.module';

@Component({
  selector: 'app-loan-forms',
  templateUrl: './loan-forms.component.html',
  styleUrls: ['./loan-forms.component.css']
})
export class LoanFormComponent {
  individual: IIndividualListItem[] = [
    {
      id: 1,
      name: "First time borrower",
      selected: false
    },
    {
      id: 2,
      name: "Repeat borrower",
      selected: false
    },
  ];

  condictional: ICondictionalListItem[] = [
    {
      id: 1,
      name: "Yes",
      selected: false
    },
    {
      id: 2,
      name: "No",
      selected: false
    },
  ];

  staffindicator: IStaffIndicatorListItem[] = [
    {
      id: 1,
      name: "Yes",
      selected: false
    },
    {
      id: 2,
      name: "No",
      selected: false
    },
  ];

  loanForms: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loanForms = this.formBuilder.group({
      namePSC: new FormControl('', [Validators.required]),
      pscCode: new FormControl('', [Validators.required]),
      originatorID: new FormControl('', [Validators.required]),
      branchName: new FormControl('', [Validators.required]),
      customerNumber: new FormControl('', [Validators.required]),
      individualCard: new FormControl('', [Validators.required]),
      condictionalCard: new FormControl('', [Validators.required]),
      staffIndicatorCard: new FormControl('', [Validators.required]),
    });
  }

  toggleSelection(item: any) {
    console.log(item.id);

    // Make selected active
    if (item.name == "More") {
      alert("ji");
    }
    item.selected = !item.selected;
  }

  toggleSelection1(condictional: any) {
    console.log(condictional.id);

    // Make selected active
    if (condictional.name == "More") {
      alert("ji");
    }
    condictional.selected = !condictional.selected;
  }

  toggleSelection2(staffindicator: any) {
    console.log(staffindicator.id);

    // Make selected active
    if (staffindicator.name == "More") {
      alert("ji");
    }
    staffindicator.selected = !staffindicator.selected;
  }

  onSubmit() {
    if (this.loanForms.valid) {
      console.log(this.loanForms.value);
    } else {
      alert("error");
    }
  }
}
