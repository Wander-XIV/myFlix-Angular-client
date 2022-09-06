import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthdate: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationComponent>,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result: string) => {
      this.dialogRef.close();
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    }, (result: string) => {
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

}