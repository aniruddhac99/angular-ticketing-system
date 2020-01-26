import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-issues',
  templateUrl: './ticket-issues.component.html',
  styleUrls: ['./ticket-issues.component.css']
})
export class TicketIssuesComponent implements OnInit {
  ticketingSystem = 'Ticketing System';
  salesAndSupport = 'Sales And Support';
  organizationTicketIssues = 'Organization Ticket Issues';
  ticketInformation = 'Ticket Information';
  problemStatement = 'Problem Statement : ';
  module = 'Module : ';
  priority = 'Priority : ';
  status = 'Status : ';
  description = 'Description : ';
  createdDate = 'Created Date : ';
  uploadedDate = 'Uploaded Date : ';
  readWrite = 'Read / Write Converters not working.';
  springData = 'Spring Data MongoDB';
  open = 'Open';
  descriptionValue = "Converter although it doesn't convert from a store supported type. You might want to check your annotation setup at the converter implementation.";
  createdDateValue = '12/Dec/19 2:46 PM';
  uploadedDateValue = '23/Dec/19 02:46 PM';
  namith = 'Namith';
  namithComment = "I'm getting these warnings too, but the application seems to work here. Does this have an effect on date conversions? ";
  namithCommentDetails = 'Namith addded a comment - 08/Nov/19 at 8:50 AM';
  pavanK = 'Pavan K';
  pavanKComment = 'Spring Data commons registers the Java Time Default converters by default for quite some time now and considers them as simple types that an be handled by the store itself. ';
  pavanKCommentDetails = 'Pavan K added a comment - 09/Nov/19 at 8:50 AM';
  navay = 'Navay';
  navayComment = 'Spring Data MongoDB which we fixed in the last release, as a side effect, the warnings appear once again.';
  navayCommentDetails = 'Navay added a comment - 10/Nov/19 at 8:54 PM';
  enterComment = 'Enter Comment';
  previousLocation = 'Ticketing System';
  currentLocation = 'Additional Information';





  constructor() { }

  ngOnInit() {
  }

}
