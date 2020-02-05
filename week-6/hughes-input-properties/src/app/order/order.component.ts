import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <span *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</span>
  `,
  styles: [`
    :host {
      background: cyan;
      padding: 20px 5px 20px 5px;
    }
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
