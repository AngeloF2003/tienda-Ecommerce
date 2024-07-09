import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent {
  @Input() product!: Product;
}