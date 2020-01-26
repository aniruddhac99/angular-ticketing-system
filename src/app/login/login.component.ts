import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ticketingSystem = 'Ticketing System';
  salesAndSupport = 'Sales And Support';
  appLogo = 'src/assets/applogo.png';
  loginForm = ' LOGIN FORM ';
  usernameEmail = 'Username / E-Mail';
  userPassword = 'Password';
  rememberMe = 'Remember Me?';
  forgotYourPassword = 'Forgot your password?';
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}
