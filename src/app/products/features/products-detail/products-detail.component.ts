import { Component, effect, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDetailStateService } from '../../data-acces/products-detail-state.service';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
  providers: [ProductsDetailStateService]
})
export default class ProductsDetailComponent{

  productDetailState = inject(ProductsDetailStateService).state;
  @Input() id!: string;
   //productos: Product[] = []


  constructor() {

    /*let Product [] = [];
    let foundElement = Product.find(item => id > 0);*/
    effect(() => {
      this.productDetailState.getByid(this.id);
    })
  }
   // Devuelve 3
  /*ngOnInit(): void {
    setTimeout(() => {
         console.log(this.productDetailState.product())
    }, 1000);
*/
  /*loadProductDetails(productId: string): void {
    // Lógica para cargar los detalles del producto desde un servicio
    console.log(`Cargando detalles del producto con id: ${productId}`);
    // Aquí llamarías a un servicio para obtener los detalles del producto usando productId
  }*/
}
