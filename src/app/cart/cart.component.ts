import { Component } from '@angular/core';
import { CartStateService } from '../shared/data-access/cart-state.service';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { ProductItemCart } from '../shared/interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private cartStateService: CartStateService) {}

  get state() {
    return this.cartStateService.state;
  }

  trackByfn(quantity: number, item: ProductItemCart): number{
    return item.product.id;
    return quantity+=1;
  }

  onRemove(id: number) {
    this.state.remove(id);
  }

  onIncrease(product: ProductItemCart) {
    this.state.udpate({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }

  onDecrease(product: ProductItemCart) {
    this.state.udpate({
      ...product,
      quantity: product.quantity - 1,
    });
  }
}
