import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="home">Joshua Hughes Home</h1>
  `,
  styles: [ `
    .home {
      background-color: red;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
