import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { ProductsDetalisComponent } from './products/components/products-detalis/products-detalis.component';
import { CartsComponent } from './carts/components/carts/carts.component';

const routes: Routes = [
  {path:"products", component:AllproductsComponent},
  {path:"cart", component:CartsComponent},
  {path:"detalis", component:ProductsDetalisComponent},
  // {path:"cart", component:CartsComponent},
  {path:"**", redirectTo:"products" ,pathMatch:"full"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
