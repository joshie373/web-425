import { CanDeactivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ProductComponent } from './product/product.component';


@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      return window.confirm("Not all changes are saved. Do you still want to leave?");
    } else {
      return true;
    }
  }
}
