import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutantComponent } from './accoutant.component';

describe('AccoutantComponent', () => {
  let component: AccoutantComponent;
  let fixture: ComponentFixture<AccoutantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccoutantComponent]
    });
    fixture = TestBed.createComponent(AccoutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
