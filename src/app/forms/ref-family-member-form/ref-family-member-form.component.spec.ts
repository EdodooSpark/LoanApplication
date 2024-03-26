import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreeFamilyMemberFormComponent } from './ref-family-member-form.component';

describe('RefreeFamilyMemberFormComponent', () => {
  let component: RefreeFamilyMemberFormComponent;
  let fixture: ComponentFixture<RefreeFamilyMemberFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreeFamilyMemberFormComponent]
    });
    fixture = TestBed.createComponent(RefreeFamilyMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
