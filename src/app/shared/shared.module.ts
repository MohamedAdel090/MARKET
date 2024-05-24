import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    
    HttpClientModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgFor
  ],
  exports: [
    HeaderComponent,
    AllProductsComponent
  ]
})
export class SharedModule { }
