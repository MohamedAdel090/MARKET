import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ProductsDetalisComponent } from './components/products-detalis/products-detalis.component';
import{ ProductComponent }from'./components/product/product.component'
import { SharedModule } from "../shared/shared.module";
import { SelectComponent } from '../shared/components/select/select.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';





@NgModule({
    declarations: [
        ProductsDetalisComponent,
        ProductComponent,
        ProductComponent,
        AllproductsComponent
    ],
    imports: [
    CommonModule,
    NgFor,
    SharedModule,
    NgIf
]
})
export class ProductsModule { }
