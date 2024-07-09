import { Injectable, inject } from '@angular/core';
import { ProductsService } from '../../products/data-acces/products.service';
import { Product } from '../interfaces/product.interface';
import {signalSlice} from 'ngxtension/signal-slice';
import { Subject, catchError, map, of, startWith, switchMap } from 'rxjs';


interface State {
  products : Product[];
  status: 'loading'| 'success'| 'error';
  page: number;
}
@Injectable()
export class ProductsStateService{
  private ProductsService = inject(ProductsService);
  private initialState: State = {
    products: [],
    status: 'loading' as const,
    page: 1,

  };

  changePages = new Subject<number>;

  loadProducts = this.changePages.pipe(
    startWith(1),
    switchMap((page) => this.ProductsService.getProducts(page)),
    map((products) => ({products, status: 'success' as const })),
    catchError (() =>{
      return of({
        products: [],
        status: 'error' as const,
      })
    })
    );
//optenemos los productos y vamos a devolver un objeto con el nuevo estado
  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePages.pipe(
        map((page) => ({page, status: 'loading' as const}),)
      ),

      this.loadProducts,
    ],
  });
}
