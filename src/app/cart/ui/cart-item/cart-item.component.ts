import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItemCart } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
@Input()
productCartItem!: ProductItemCart

@Output()
 onRemove  = new EventEmitter<number>();

@Output()
 onIncrease: EventEmitter<ProductItemCart>= new EventEmitter();

 @Output()
 onDecrease: EventEmitter<ProductItemCart> = new EventEmitter();

}
