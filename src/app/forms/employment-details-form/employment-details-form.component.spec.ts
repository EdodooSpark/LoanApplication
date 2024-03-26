import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDetailsFormComponent } from './employment-details-form.component';

describe('EmploymentDetailsFormComponent', () => {
  let component: EmploymentDetailsFormComponent;
  let fixture: ComponentFixture<EmploymentDetailsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymentDetailsFormComponent]
    });
    fixture = TestBed.createComponent(EmploymentDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
