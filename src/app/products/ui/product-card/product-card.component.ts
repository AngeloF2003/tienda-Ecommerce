import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: [
  ],

})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output()
  public addToCart  = new EventEmitter<Product>();


  add(event: Event) {
    event.stopPropagation();
    event.preventDefault()
    this.addToCart.emit(this.product)
  }
}
