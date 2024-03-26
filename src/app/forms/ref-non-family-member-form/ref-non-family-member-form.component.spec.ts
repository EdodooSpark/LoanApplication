import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreeNonFamilyMemberFormComponent } from './ref-non-family-member-form.component';

describe('RefreeNonFamilyMemberFormComponent', () => {
  let component: RefreeNonFamilyMemberFormComponent;
  let fixture: ComponentFixture<RefreeNonFamilyMemberFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreeNonFamilyMemberFormComponent]
    });
    fixture = TestBed.createComponent(RefreeNonFamilyMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
