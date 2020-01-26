import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ticketingSystem = 'Ticketing System';
  salesAndSupport = 'Sales And Support';
  registerNewUser = 'Register New User';
  usernameEmail = 'Username / E-Mail';
  password = 'Password';
  confirmPassword = 'Confirm Password';
  firstName = 'First Name';
  lastName = 'Last Name';
  userName = 'Username';
  organizationName = 'Organization Name';
  username = 'Username';
  email = ' E-Mail';



  constructor() { }

  ngOnInit() {
  }

}
