import { NgModule } from "@angular/core";
import ProductsListComponent from "./features/products-list/products-list.component";
import { productoRouting } from "./features/products-shell/product.route";
import { CommonModule } from "@angular/common";
import { ProductsService } from "./data-acces/products.service";
import { ProductCardComponent } from './ui/product-card/product-card.component';
import ProductsDetailComponent from "./features/products-detail/products-detail.component";
import { ProductsDetailStateService } from "./data-acces/products-detail-state.service";

@NgModule({
declarations: [
  ProductsListComponent,
  ProductsDetailComponent,
  ProductCardComponent,

],
imports: [
  CommonModule,
  productoRouting,
],
providers: [
  ProductsService,
  ProductsDetailStateService
]
})
export class ProductModule {
}
