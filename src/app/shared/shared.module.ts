import { AllProductsComponent } from './../products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpineerComponent } from './components/spineer/spineer.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from '../products/product/product.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpineerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgFor,
  
  ],
  exports: [
    HeaderComponent,
    SpineerComponent,
    SelectComponent,
  ]
})
export class SharedModule { }
