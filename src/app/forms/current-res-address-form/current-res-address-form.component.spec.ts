import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentResAddressFormComponent } from './current-res-address-form.component';

describe('CurrentResAddressFormComponent', () => {
  let component: CurrentResAddressFormComponent;
  let fixture: ComponentFixture<CurrentResAddressFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentResAddressFormComponent]
    });
    fixture = TestBed.createComponent(CurrentResAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
