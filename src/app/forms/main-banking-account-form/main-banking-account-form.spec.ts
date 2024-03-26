import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBankingAccountFormComponent } from './main-banking-account-form.component';

describe('MainBankingAccountFormComponent', () => {
  let component: MainBankingAccountFormComponent;
  let fixture: ComponentFixture<MainBankingAccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBankingAccountFormComponent]
    });
    fixture = TestBed.createComponent(MainBankingAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
