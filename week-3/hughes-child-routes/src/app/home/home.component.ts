import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <h1>Welcome to Joshua Hughes' Site!!</h1>
  </div>
  `,
  styles: [
    `
    .container {
      color: steelblue;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
