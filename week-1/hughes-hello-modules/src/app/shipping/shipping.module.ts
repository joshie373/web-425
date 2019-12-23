import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  declarations: [ShippingComponent],
  exports: [ShippingComponent],
  imports: [
    CommonModule
  ]
})
export class ShippingModule { }
