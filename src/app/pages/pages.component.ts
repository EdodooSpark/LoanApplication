import { Component } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { FormBuilder, Validators, FormsModule,ReactiveFormsModule,} from '@angular/forms';
// import 'aos/dist/aos.css';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  firstFormGroup = this._formBuilder.group({
    // firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  sixthFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    //  secondCtrl: ['', Validators.required],
  });
  eightFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  ninethFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  tenthFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  eleventhFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  twelvethFormGroup = this._formBuilder.group({
    //  secondCtrl: ['', Validators.required],
  });
  thirteenthFormGroup = this._formBuilder.group({
    //  secondCtrl: ['', Validators.required],
  });
  forteenthFormGroup = this._formBuilder.group({
    //  secondCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 1024px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }



  }

