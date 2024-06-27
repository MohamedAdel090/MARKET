import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetalisComponent } from './components/products-detalis/products-detalis.component';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [
    ProductsDetalisComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    NgFor,
    
  ]
})
export class ProductsModule { }
