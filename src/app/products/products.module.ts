import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetalisComponent } from './components/products-detalis/products-detalis.component';




@NgModule({
  declarations: [
    ProductsDetalisComponent,
  ],
  imports: [
    CommonModule,
    NgFor
  ]
})
export class ProductsModule { }
