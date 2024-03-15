import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgShowBookingComponent } from './org-show-booking.component';

describe('OrgShowBookingComponent', () => {
  let component: OrgShowBookingComponent;
  let fixture: ComponentFixture<OrgShowBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgShowBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgShowBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
