import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTermsTwoConditionFormComponent } from './generaltwo-terms-conditions-form.component';

describe('GeneralTermsConditionFormComponent', () => {
  let component: GeneralTermsTwoConditionFormComponent;
  let fixture: ComponentFixture<GeneralTermsTwoConditionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralTermsTwoConditionFormComponent]
    });
    fixture = TestBed.createComponent(GeneralTermsTwoConditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
