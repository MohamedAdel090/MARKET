import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetalisComponent } from './components/products-detalis/products-detalis.component';
import{ ProductComponent }from'./components/product/product.component'
import { SharedModule } from "../shared/shared.module";




@NgModule({
    declarations: [
        ProductsDetalisComponent,
        ProductComponent,
        ProductComponent,
        AllProductsComponent
    ],
    imports: [
        CommonModule,
        NgFor,
        SharedModule
    ]
})
export class ProductsModule { }
