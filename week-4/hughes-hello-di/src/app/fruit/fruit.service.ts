import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(1001, "Banana", "yellow");
  }
}
