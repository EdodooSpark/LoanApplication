import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalInfoFormComponent } from './ps-info-form.component';

describe('PersonnalInfoFormComponent', () => {
  let component: PersonnalInfoFormComponent;
  let fixture: ComponentFixture<PersonnalInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnalInfoFormComponent]
    });
    fixture = TestBed.createComponent(PersonnalInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
