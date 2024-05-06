import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetalisComponent } from './components/products-detalis/products-detalis.component';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetalisComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class ProductsModule { }
