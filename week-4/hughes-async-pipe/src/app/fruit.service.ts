import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';



@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: "Apple", pricePerPound: ".50", quantity: 3},
    {id: 2, name: "Banana", pricePerPound: ".75", quantity: 4},
    {id: 3, name: "Blueberry", pricePerPound: "1.25", quantity: 15},
    {id: 4, name: "Orange", pricePerPound: ".25", quantity: 6},
    {id: 5, name: "Watermelon", pricePerPound: "1.00", quantity: 2}
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
