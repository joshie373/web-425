import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="homeWrap">
   <h2>Welcome to Josh Hughes Material Design in action</h2><br>
   <h4> To login, click Login in the menu, or click <a routerLink="/login" >here</a></h4>
   </div>
  `,
  styles: [
    `
    .homeWrap{margin-top:10%;margin-bottom:40%;margin-left:15%;}
    `

  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
