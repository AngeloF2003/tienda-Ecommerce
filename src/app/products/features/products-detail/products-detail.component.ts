import { Component, Input, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export default class ProductsDetailComponent {
  productId!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      // Llamar a un método para cargar detalles del producto según this.productId
      this.loadProductDetails(this.productId);
    });
  }

  loadProductDetails(productId: string): void {
    // Lógica para cargar los detalles del producto desde un servicio
    console.log(`Cargando detalles del producto con id: ${productId}`);
    // Aquí llamarías a un servicio para obtener los detalles del producto usando productId
  }
}
