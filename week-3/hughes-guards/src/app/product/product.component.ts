import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  template: `
    <h1 class="product">Product Component</h1>
    <input placeholder="What is your name" type="text" [formControl]="name">
  `,
  styles: [ `
    .product { background-color: cyan;}
  `]
})
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
