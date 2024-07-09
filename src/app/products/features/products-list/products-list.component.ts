import { Component, inject } from '@angular/core';
import { ProductsStateService } from 'src/app/shared/data-access/products-state.service';
import { ProductsService } from '../../data-acces/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductsStateService],
})
export default class ProductsListComponent /*implements OnInit*/ {

  productsState = inject(ProductsStateService);

  changePage() {
    const page = this.productsState.state.page()+1;
    this.productsState.changePages.next(page);
  }




}
