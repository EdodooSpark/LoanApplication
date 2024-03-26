import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusDependantFormComponent } from './marital-stat-depndants-form.component';

describe('MaritalStatusDependantFormComponent', () => {
  let component: MaritalStatusDependantFormComponent;
  let fixture: ComponentFixture<MaritalStatusDependantFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaritalStatusDependantFormComponent]
    });
    fixture = TestBed.createComponent(MaritalStatusDependantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
