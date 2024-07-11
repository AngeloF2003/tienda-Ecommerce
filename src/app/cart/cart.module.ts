import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { CommonModule } from "@angular/common";
import { productoCartRouting } from "./cart.routes";
import { CartItemComponent } from './ui/cart-item/cart-item.component';

@NgModule({
  declarations: [
 CartComponent,
 CartItemComponent

  ],
  imports: [
    CommonModule,
    productoCartRouting


  ],
  providers: [

  ]
  })
  export class ProductCartModule {
  }

