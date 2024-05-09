import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetalisComponent } from './products/components/products-detalis/products-detalis.component';
import { CartsComponent } from './carts/components/carts/carts.component';

const routes: Routes = [
  {path:"products", component:AllProductsComponent},
  {path:"detalis", component:ProductsDetalisComponent},
  {path:"cart", component:CartsComponent},
  {path:"**", redirectTo:"products" ,pathMatch:"full"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
