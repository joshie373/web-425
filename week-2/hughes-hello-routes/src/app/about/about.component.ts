import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <h2>About Joshua Hughes' Routing</h2>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
      h2 {
        color: rgba(5, 158, 218, 0.71);
      }
    `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
