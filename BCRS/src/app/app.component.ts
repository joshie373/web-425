import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'hughes-BCRS';
  Login: boolean=false;
  LoggedIn:boolean=false;
  loggedStatus:string="Employee Login";

  login(){
    if(this.LoggedIn){
      this.LoggedIn=false;
      this.Login=false;
      this.loggedStatus="Employee Login";
    }
    else{
      this.Login=true;
    }
  }

  closeLogin(){
    this.Login=false;
  }

  checkLogin(){
    this.Login=false;
    this.LoggedIn=true;
    this.loggedStatus = "Logout";
  }
}
