import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketIssuesComponent } from './ticket-issues.component';

describe('TicketIssuesComponent', () => {
  let component: TicketIssuesComponent;
  let fixture: ComponentFixture<TicketIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
