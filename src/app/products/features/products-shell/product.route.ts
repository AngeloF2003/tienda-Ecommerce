import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import ProductsListComponent from '../products-list/products-list.component';
import { ProductModule } from '../../product.module';
import ProductsDetailComponent from '../products-detail/products-detail.component';

//cuando entre al path vacio, va a cargar el componente del listado donde estan los productos
// export default[
//   {path:'',
//   loadComponent: () => import('../products-list/products-list.component')
// }

// ]as Routes;


const routes: Routes =[
  {
    path:'productos',
    component: ProductsListComponent
  },
  {
    path:'productos/:id',
    component: ProductsDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productoRouting { }



// export const productoRouting = RouterModule.forChild(routes);
