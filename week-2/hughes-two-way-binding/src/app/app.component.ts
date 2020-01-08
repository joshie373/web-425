import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <br /><br /><br />

    <div class="container-fluid two-way-form">
      <h2 class="bg-warning">Joshua Hughes' Two-Way Binding Example</h2><br />
      <div class="form-group">
        <input class="form-control"
          type="text" placeholder="Enter your name ..."
          [(ngModel)]="name">
        <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
      </div>
      <div class="form-group">
        <p class="alert-success">Welcome Joshua Hughes' to two-way binding, {{name}}</p>
      </div>
    </div>
  `,
  styles: [
    `
    .two-way-form {
      width:50%;
    }
    `
  ]
})
export class AppComponent {
  title = 'hughes-two-way-binding';

  //class property
  name: string = "Mr. Hughes";
}
