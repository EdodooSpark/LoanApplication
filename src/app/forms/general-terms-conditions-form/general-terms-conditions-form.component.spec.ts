import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTermsConditionFormComponent } from './general-terms-conditions-form.component';

describe('GeneralTermsConditionFormComponent', () => {
  let component: GeneralTermsConditionFormComponent;
  let fixture: ComponentFixture<GeneralTermsConditionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralTermsConditionFormComponent]
    });
    fixture = TestBed.createComponent(GeneralTermsConditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
