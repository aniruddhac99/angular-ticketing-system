import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TicketIssuesComponent } from './ticket-issues/ticket-issues.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AngularFireModule } from 'angularfire2';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    TicketIssuesComponent,
    NewTicketComponent,
    ForgotPasswordComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
    RouterModule.forRoot([
      { path: '', component: LoginComponent }, 
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'ticket-issues', component: TicketIssuesComponent },
      { path: 'user-dashboard', component: UserDashboardComponent },
      { path: 'new-ticket', component: NewTicketComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
