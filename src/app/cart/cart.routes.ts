import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { NgModule } from "@angular/core";

const routescart: Routes =[
  {
    path:'cart',
    component: CartComponent
  },

]
@NgModule({
  imports: [RouterModule.forChild(routescart)],
  exports: [RouterModule]
})
export class productoCartRouting{

}
