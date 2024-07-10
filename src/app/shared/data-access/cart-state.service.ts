import { Injectable, Signal, inject } from "@angular/core";
import { ProductItemCart, Product } from '../interfaces/product.interface';
import { signalSlice } from "ngxtension/signal-slice";
import { StorageService } from "./storage.service";
import { Observable, map } from "rxjs";

interface State {
  products: ProductItemCart[];
  loaded: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class CartStateService {

  private _storageService = inject(StorageService)
  private initialState: State = {
    products: [],
    loaded: false,
  }

  loadProducts = this._storageService.loadProducts().pipe(
    map((products) => ({products, loaded: true})),
  )

  state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadProducts],
    actionSources: {
      /*add: (state, action$: Observable<ProductItemCart>) =>
      action$.pipe(
        map((product) => this.add(state, product)),
      ),*/
    },
    effects:(state) => ({
      load: () =>{
     console.log(state.products);
      },
    }),
  });

  private add(state: Signal<State>, product: ProductItemCart){

  }
}
