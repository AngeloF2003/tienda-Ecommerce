import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
export const routes: Routes = [

  {path:'',
  loadChildren: () =>
  import('./products/product.module').then(
    (m) => m.ProductModule
  ),
},
 {path:'',
  loadChildren: () =>
  import('./cart/cart.module').then(
    (m) => m.ProductCartModule
  ),
},
{
  path:'**',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterLink],
  exports: [RouterModule],
})
export class AppRoutingModule {}
