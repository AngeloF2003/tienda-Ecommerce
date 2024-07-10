import { Injectable, inject } from '@angular/core';
import { ProductsService } from '../../products/data-acces/products.service';
import {signalSlice} from 'ngxtension/signal-slice';
import { Observable, Subject, catchError, map, of, startWith, switchMap } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product.interface';


interface State {
  product : Product | null;
  status: 'loading'| 'success'| 'error';
}

@Injectable()
export class ProductsDetailStateService{
  private ProductsService = inject(ProductsService);

  private initialState: State = {
    product: null,
    status: 'loading' as const,
  };

//optenemos los productos y vamos a devolver un objeto con el nuevo estado
  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getByid: (_state, $: Observable<string>) =>
      $.pipe(
        switchMap((id) => this.ProductsService.getProduct(id)),
        map((data) => ({product: data, status: 'success' as const}))
      )
    }


  });
}
