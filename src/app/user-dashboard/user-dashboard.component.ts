import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  ticketingSystem = 'Ticketing System';
  username = 'M Yallamma';
  status = 'Status';
  module = 'Module';
  listOrganizationTicketRequest = 'List Organization Ticket Request';

  constructor() { }

  ngOnInit() {
  }

}
