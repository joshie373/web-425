import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="wrapper">
  <div class="frm-login">
    <mat-card class="login-panel frm-login-panel">
      <mat-card-header class="frm-login-header">
        <mat-toolbar class="frm-login-toolbar">
          Login Form
        </mat-toolbar>
      </mat-card-header>

      <mat-card-content class="frm-login-body">
        <mat-form-field>
          <input type="text" matInput placeholder="Username">
        </mat-form-field>

        <mat-form-field>
          <input type="password" matInput placeholder="Password">
        </mat-form-field>

      </mat-card-content>

      <mat-card-actions class="frm-login-actions">
        <button mat-raised-button class="btn-login">Cancel</button>
        <button mat-raised-button class="btn-login">Sign In</button>
      </mat-card-actions>
    </mat-card>
  </div>
</div>
  `,
  styles: [
    `
    /* Form Styles */
    .frm-login { width: 50%;  margin: 0 auto; }
    .frm-login-panel { border: 1px solid black; }
    .frm-login-header { background-color: maroon; }
    .frm-login-toolbar { background-color: maroon; color: gold; }
    .frm-login-body { display: flex; flex-direction: column; margin-top: 15px; }
    .btn-login { background-color: gold; color: maroon; }
    .frm-login-actions { text-align: right; }
    /* Global */
    .wrapper { width: 100%; margin-top: 10%;margin-bottom: 20%; height:100%;}
    `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
