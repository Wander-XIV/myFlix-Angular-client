import { Component, OnInit } from '@angular/core';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationComponent, {
      width: '280px'
    });
  }
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginComponent, {
      width: '280px'
    });
  }
}