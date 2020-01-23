import { Component } from '@angular/core';
import {Fruit} from "./fruit";
import {FruitService} from "./fruit.service";
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </nav>
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>List Of Fruits</h2>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price Per Pound</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let fruit of fruits | async">
                <th scope="row">{{ fruit.id }}</th>
                <td>{{ fruit.name }}</td>
                <td>{{ fruit.pricePerPound }}</td>
                <td>{{ fruit.quantity }}</td>
              </tr>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'app';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
