import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgShowEventsComponent } from './org-show-events.component';

describe('OrgShowEventsComponent', () => {
  let component: OrgShowEventsComponent;
  let fixture: ComponentFixture<OrgShowEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgShowEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgShowEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
