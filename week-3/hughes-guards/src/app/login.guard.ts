import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("No user logged in!!  Redirecting to login page.");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
