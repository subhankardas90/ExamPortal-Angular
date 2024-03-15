import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCreateEventsComponent } from './org-create-events.component';

describe('OrgCreateEventsComponent', () => {
  let component: OrgCreateEventsComponent;
  let fixture: ComponentFixture<OrgCreateEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgCreateEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgCreateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
