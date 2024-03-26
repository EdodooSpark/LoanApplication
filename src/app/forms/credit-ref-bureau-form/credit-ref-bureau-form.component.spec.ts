import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditReferenceBureauConsentFormComponent } from './credit-ref-bureau-form.component';

describe('CreditReferenceBureauConsentFormComponent', () => {
  let component: CreditReferenceBureauConsentFormComponent;
  let fixture: ComponentFixture<CreditReferenceBureauConsentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditReferenceBureauConsentFormComponent]
    });
    fixture = TestBed.createComponent(CreditReferenceBureauConsentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
