import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { UserLoginComponent } from '../user-login/user-login.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  /**
   * opens the user registration dialog when signup button is clicked
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationComponent, {
      // Assign dialog width
      width: '280px',
    });
  }

  /**
   * opens the user login dialog when login button is clicked
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginComponent, {
      // Assign dialog width
      width: '280px',
    });
  }

  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
      width: '500px'
    });
  }
}