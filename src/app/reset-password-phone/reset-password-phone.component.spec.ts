import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordPhoneComponent } from './reset-password-phone.component';

describe('ResetPasswordPhoneComponent', () => {
  let component: ResetPasswordPhoneComponent;
  let fixture: ComponentFixture<ResetPasswordPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordPhoneComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
