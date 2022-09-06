import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /**
   * 
   * @param router 
   */
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * movies list
   */
  goToMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * user profile
   */
  goToProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * welcome view of the app
   */
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }

}