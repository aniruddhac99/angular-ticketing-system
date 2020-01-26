import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  ticketingSystem = 'Ticketing System';
  salesAndSupport = 'Sales And Support';
  previousLocation = 'Ticketing System';
  currentLocation = 'New Ticket Request';
  newTicketRequest = 'New Ticket Request';
  problemStatement = 'Problem Statement   ';
  selectModule = 'Select Module  ';
  priority = 'Priority  ';
  description = 'Description (Guidelines & Conditions)'; 

  constructor() { }

  ngOnInit() {
  }

}
