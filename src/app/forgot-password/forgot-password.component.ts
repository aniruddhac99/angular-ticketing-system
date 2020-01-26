import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ticketingSystem = 'Ticketing System';
  salesAndSupport = 'Sales And Support';
  forgotPassword = 'Forgot Password?';
  userInstruction1 = 'Enter the E-Mail address you have registered with.';
  userInstruction2 = 'Instructions will be sent to the E-Mail address given by you.';
  username = 'Username ';
  email = ' E-Mail';
  organizationName = 'Organization Name';

  constructor() { }

  ngOnInit() {
  }

}
