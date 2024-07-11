import { Component, inject } from '@angular/core';
import { ProductsStateService } from 'src/app/shared/data-access/products-state.service';
import { ProductsService } from '../../data-acces/products.service';
import { CartStateService } from 'src/app/shared/data-access/cart-state.service';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductsStateService],
})
export default class ProductsListComponent /*implements OnInit*/ {

  productsState = inject(ProductsStateService);
  carState = inject(CartStateService).state;

  changePage() {
    const page = this.productsState.state.page()+1;
    this.productsState.changePages.next(page);
  }

  addToCart(product: Product) {
    this.carState.add({
      product,
      quantity: 1,
    });
  }



}
