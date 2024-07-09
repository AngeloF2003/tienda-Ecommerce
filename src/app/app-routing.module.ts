import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ProductModule } from './products/product.module';

export const routes: Routes = [

  {path:'',
  loadChildren: () =>
  import('./products/product.module').then(
    (m) => m.ProductModule
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
