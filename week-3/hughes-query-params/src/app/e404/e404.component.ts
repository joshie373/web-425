import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>Uh-Oh! There's nothing here!</h2>
      </div>
    </div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
  }
  h2 {
    color: red;
  }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
